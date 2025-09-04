import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CropRecommendation from './pages/CropRecommendation'
import SoilAnalysis from './pages/SoilAnalysis'
import MarketInsights from './pages/MarketInsights'
import DiseaseDetection from './pages/DiseaseDetection'
import ChatBot from './pages/ChatBot'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        <Navbar />
        <main className="pb-20 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recommendations" element={<CropRecommendation />} />
            <Route path="/soil-analysis" element={<SoilAnalysis />} />
            <Route path="/market" element={<MarketInsights />} />
            <Route path="/disease-detection" element={<DiseaseDetection />} />
            <Route path="/chat" element={<ChatBot />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#16a34a',
              color: '#fff',
            },
          }}
        />
      </div>
    </>
  )
}

export default App