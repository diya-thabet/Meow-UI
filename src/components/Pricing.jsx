import React from 'react';

export default function Pricing() {
    return (
        <section id="pricing">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Enterprise <span className="gradient-text">Solutions</span></h2>
                    <p className="section-desc">Scale your emotion recognition capabilities with our production-ready API tiers.</p>
                </div>

                <div className="features-grid">
                    {/* Starter Tier */}
                    <div className="glass feature-card" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h3 className="feature-title" style={{ fontSize: '1.5rem' }}>Researcher</h3>
                        <div style={{ fontSize: '3rem', fontWeight: 700, margin: '20px 0' }}>$0<span style={{ fontSize: '1rem', color: '#94a3b8' }}>/mo</span></div>
                        <p className="feature-desc" style={{ marginBottom: '24px' }}>Perfect for academic research and non-commercial testing.</p>
                        <ul style={{ listStyle: 'none', color: '#ccc', lineHeight: 2 }}>
                            <li>✓ Access to 14 Emotion Classes</li>
                            <li>✓ 500 API Calls / Month</li>
                            <li>✓ Standard Support</li>
                        </ul>
                        <button className="btn-secondary" style={{ width: '100%', marginTop: '32px', justifyContent: 'center' }}>Start Free</button>
                    </div>

                    {/* Pro Tier */}
                    <div className="glass feature-card" style={{ borderColor: '#9d4edd', backgroundColor: 'rgba(157, 78, 221, 0.05)' }}>
                        <div style={{ color: '#9d4edd', fontWeight: 'bold', marginBottom: 8 }}>MOST POPULAR</div>
                        <h3 className="feature-title" style={{ fontSize: '1.5rem' }}>Startup</h3>
                        <div style={{ fontSize: '3rem', fontWeight: 700, margin: '20px 0' }}>$49<span style={{ fontSize: '1rem', color: '#94a3b8' }}>/mo</span></div>
                        <p className="feature-desc" style={{ marginBottom: '24px' }}>For growing teams building emotional intelligence apps.</p>
                        <ul style={{ listStyle: 'none', color: '#fff', lineHeight: 2 }}>
                            <li>✓ <b>Everything in Researcher</b></li>
                            <li>✓ 50,000 API Calls / Month</li>
                            <li>✓ Commercial License</li>
                            <li>✓ Heatmap Visualization Access</li>
                        </ul>
                        <button className="btn-primary" style={{ width: '100%', marginTop: '32px', justifyContent: 'center' }}>Get Started</button>
                    </div>

                    {/* Enterprise Tier */}
                    <div className="glass feature-card">
                        <h3 className="feature-title" style={{ fontSize: '1.5rem' }}>Enterprise</h3>
                        <div style={{ fontSize: '3rem', fontWeight: 700, margin: '20px 0' }}>Custom</div>
                        <p className="feature-desc" style={{ marginBottom: '24px' }}>Full-scale deployment for large organizations.</p>
                        <ul style={{ listStyle: 'none', color: '#ccc', lineHeight: 2 }}>
                            <li>✓ Unlimited API Calls</li>
                            <li>✓ On-Premise Docker Deployment</li>
                            <li>✓ Dedicated Support Manager</li>
                            <li>✓ Custom Model Fine-tuning</li>
                        </ul>
                        <button className="btn-secondary" style={{ width: '100%', marginTop: '32px', justifyContent: 'center' }}>Contact Sales</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
