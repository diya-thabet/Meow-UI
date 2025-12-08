import React from 'react';
// import { ArrowRight, Play } from 'lucide-react';
// import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-bg-wrapper">
                <img src={heroBg} alt="" className="hero-bg-img" />
                <div className="hero-overlay"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text-block animate-fade-in-up">
                    <div className="badge">New: RAF-CE Dataset Support</div>
                    <h1 className="hero-title">
                        See How You <br />
                        <span className="gradient-text">Really Feel.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Meow AI uses Vision-LLMs to detect 14 complex compound emotions, going beyond simple "Happy" or "Sad".
                        Understand the <i>why</i> behind the face.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn-primary">
                            Get Started
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 8 }}>
                                <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                        <button className="btn-secondary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" style={{ marginRight: 8 }}>
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                            Watch Demo
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <h3>14</h3>
                            <p>Compound Emotions</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h3>98%</h3>
                            <p>Accuracy on RAF-CE</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h3>XAI</h3>
                            <p>Explainable AI</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
