import React from 'react';

const emotions = [
    "Happily Surprised", "Happily Disgusted", "Sadly Fearful", "Sadly Angry",
    "Sadly Surprised", "Sadly Disgusted", "Fearfully Angry", "Fearfully Surprised",
    "Fearfully Disgusted", "Angrily Surprised", "Angrily Disgusted", "Disgustedly Surprised",
    "Happily Fearful", "Happily Sad"
];

export default function Dataset() {
    return (
        <section id="dataset" className="dataset-bg">
            <div className="container">
                <div className="dataset-header-row">
                    <div>
                        <h2 className="section-title">The RAF-CE <span className="gradient-text">Dataset</span></h2>
                        <p className="section-desc">
                            Utilizing 4,549 real-world images with compound labels and Action Unit (AU) annotations.
                        </p>
                    </div>
                    <a href="http://www.whdeng.cn/RAF/model1.html" target="_blank" className="dataset-link">
                        Visit Official Website
                    </a>
                </div>

                <div className="dataset-grid">
                    {emotions.map((emotion, idx) => (
                        <div key={idx} className="glass emotion-card">
                            <span className="emotion-id">{(idx).toString().padStart(2, '0')}</span>
                            <span className="emotion-label">{emotion}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
