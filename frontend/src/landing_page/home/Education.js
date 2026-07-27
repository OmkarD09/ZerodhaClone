import React from "react";


function Education() {
    return (
        <section className="zk-section zk-education">
            <div className="container py-5">
                <div className="row align-items-end mb-4">
                    <div className="col-lg-8">
                        <h2 className="fw-bold">Learn before you invest</h2>
                        <p className="text-secondary mb-0">Free learning resources to help you build long-term confidence in the market.</p>
                    </div>
                    <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
                        <a href="/support" className="btn zk-btn-outline">Explore Learning Hub</a>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-md-4">
                        <article className="zk-resource-card h-100">
                            <i className="fas fa-chalkboard-teacher" />
                            <h5>Live Workshops</h5>
                            <p className="mb-0">Join weekly live sessions on market basics, risk management, and strategy.</p>
                        </article>
                    </div>
                    <div className="col-md-4">
                        <article className="zk-resource-card h-100">
                            <i className="fas fa-video" />
                            <h5>Video Courses</h5>
                            <p className="mb-0">Step-by-step modules designed for beginners and active traders.</p>
                        </article>
                    </div>
                    <div className="col-md-4">
                        <article className="zk-resource-card h-100">
                            <i className="fas fa-book-open" />
                            <h5>Guides & Articles</h5>
                            <p className="mb-0">Practical explainers covering fundamentals, taxes, and investment planning.</p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;   