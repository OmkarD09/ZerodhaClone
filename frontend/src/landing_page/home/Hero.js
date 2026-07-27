import React from "react";


function Hero() {
    return (
        <section className="zk-section zk-hero">
            <div className="container py-5 py-lg-6">
                <div className="row align-items-center g-4">
                    <div className="col-lg-7">
                        <p className="zk-kicker mb-3">Built for modern investors</p>
                        <h1 className="display-4 fw-bold mb-3">
                            Invest smarter with transparent pricing and powerful tools.
                        </h1>
                        <p className="lead text-secondary mb-4">
                            Start investing in stocks, mutual funds, and ETFs with a clean platform designed for speed,
                            clarity, and confidence.
                        </p>
                        <div className="d-flex flex-wrap gap-3">
                            <a className="btn btn-lg zk-btn-primary" href="/open-account">
                                Start Investing
                            </a>
                            <a className="btn btn-lg zk-btn-outline" href="/support">
                                Talk to Support
                            </a>
                        </div>
                        <div className="zk-trust mt-4 d-flex flex-wrap gap-4">
                            <span><i className="fas fa-shield-alt me-2" />SEBI Registered</span>
                            <span><i className="fas fa-bolt me-2" />Fast Order Execution</span>
                            <span><i className="fas fa-headset me-2" />24x7 Assistance</span>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="zk-hero-card">
                            <h5 className="mb-3">Today at a glance</h5>
                            <div className="zk-hero-stat">
                                <p className="mb-1">Orders Executed</p>
                                <strong>4.8M+</strong>
                            </div>
                            <div className="zk-hero-stat">
                                <p className="mb-1">Active Users</p>
                                <strong>12.3M+</strong>
                            </div>
                            <div className="zk-hero-stat mb-0">
                                <p className="mb-1">Avg. Platform Uptime</p>
                                <strong>99.98%</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;