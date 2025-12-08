import React, { useState, useEffect } from 'react';
// import { Github } from 'lucide-react'; // Removed to prevent crash
import logo from '../assets/logo.png';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (

        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <div className="logo-section" onClick={() => window.scrollTo(0, 0)}>
                    <img src={logo} alt="Meow AI Logo" className="logo-img" />
                    <span className="logo-text gradient-text">Meow AI</span>
                </div>
                <div className="nav-links">
                    <a href="#features" className="nav-link">Features</a>
                    <a href="#methodology" className="nav-link">Methodology</a>
                    <a href="#dataset" className="nav-link">Dataset</a>
                    <a href="#pricing" className="nav-link">Pricing</a>
                    <a href="https://github.com/diya-thabet/Meow-AI" target="_blank" rel="noreferrer" className="btn-glass flex-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        GitHub
                    </a>
                </div>
            </div>
        </nav>

    )
}
