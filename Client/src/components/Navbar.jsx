import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Sprout, TestTube, TrendingUp, Camera, MessageCircle, User } from 'lucide-react'

const Navbar = () => {

    const navItems = [
        { path: '/', icon: Home, label: 'Home' },
        { path: '/recommendations', icon: Sprout, label: 'Crops' },
        { path: '/soil-analysis', icon: TestTube, label: 'Soil' },
        { path: '/market', icon: TrendingUp, label: 'Market' },
        { path: '/disease-detection', icon: Camera, label: 'Detect' },
        { path: '/chat', icon: MessageCircle, label: 'Chat' },
        { path: '/profile', icon: User, label: 'Profile' }
    ]

    return (
        <>
            <nav className='hidden md:flex bg-white shadow-lg border-b border-green-100'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between h-16'>
                        <div className='flex items-center'>
                            <Sprout className='h-8 w-8 text-green-600' />
                            <span className='ml-2 text-xl font-bold text-gray-900'>AI Crop Advisor</span>
                        </div>
                        <div className="flex space-x-8">
                            {navItems.map(({ path, icon: Icon, label }) => (
                                <NavLink
                                    key={path}
                                    to={path}
                                    className={({ isActive }) =>
                                        `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                                            ? 'text-green-600 bg-green-50'
                                            : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                                        }`
                                    }
                                >
                                    <Icon className="h-4 w-4 mr-2" />
                                    {label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
            {/* Mobile Bottom Navigation */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
                <div className="grid grid-cols-7 h-16">
                    {navItems.map(({ path, icon: Icon, label }) => (
                        <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) =>
                                `flex flex-col items-center justify-center space-y-1 ${isActive ? 'text-green-600' : 'text-gray-600'
                                }`
                            }
                        >
                            <Icon className="h-5 w-5" />
                            <span className="text-xs font-medium">{label}</span>
                        </NavLink>
                    ))}
                </div>
            </nav>
        </>
    )
}

export default Navbar