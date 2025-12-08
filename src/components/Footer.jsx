import React from 'react';

export default function Footer() {
    return (
        <footer>
            <div className="container footer-content">
                <div className="text-center md:text-left">
                    <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '8px' }}>Meow AI</h4>
                    <p className="footer-text">Vision-LLM for Compound Facial Emotion Recognition</p>
                </div>

                <div className="footer-text">
                    &copy; 2025 Diya Thabet. Open Source Research.
                </div>
            </div>
        </footer>
    )
}
