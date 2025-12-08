import React from 'react';
// import { ScanFace, MessageSquareText, BrainCircuit, Activity } from 'lucide-react';

const features = [
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f72585" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                <path d="M9 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"></path>
            </svg>
        ),
        title: "Compound Emotions",
        desc: "Detects 14 mixed emotional states like 'Happily Surprised' or 'Sadly Angry' using the RAF-CE dataset."
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4cc9f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
            </svg>
        ),
        title: "Textual Explanations",
        desc: "Generates natural language descriptions explaining why an emotion is classified as such."
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9d4edd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10z"></path><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path>
            </svg>
        ),
        title: "Vision-LLM Core",
        desc: "Powered by state-of-the-art Large Vision-Language Models (BLIP-2, LLaVA) for deep semantic understanding."
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
        ),
        title: "Explainable AI (XAI)",
        desc: "Uses Heatmaps and Grad-CAM to visualize exactly which facial features influenced the model's decision."
    }
];

export default function Features() {
    return (
        <section id="features">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Beyond Standard <br /><span className="gradient-text">Recognition</span></h2>
                    <p className="section-desc">
                        Traditional models fail to capture the nuance of human expression. Meow AI bridges the gap between vision and language.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((f, i) => (
                        <div key={i} className="glass feature-card">
                            <div className="feature-icon-wrapper">
                                {f.icon}
                            </div>
                            <h3 className="feature-title">{f.title}</h3>
                            <p className="feature-desc">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
