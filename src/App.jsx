import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Dataset from './components/Dataset'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
    return (
        <div className="app-container">
            <div className="hero-glow" style={{ top: '-20%', left: '-10%' }} />
            <div className="hero-glow" style={{ bottom: '-20%', right: '-10%', background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, rgba(0,0,0,0) 70%)' }} />

            <Navbar />
            <main>
                <Hero />
                <Features />
                <Dataset />
                <Pricing />
            </main>
            <Footer />
        </div>
    )
}

export default App
