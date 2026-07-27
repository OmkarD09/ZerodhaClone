import React from "react";

function Awards() {
    return (
        <section className="zk-section">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Why millions trust us</h2>
                    <p className="text-secondary mb-0">A platform recognized for reliability, pricing, and customer-first service.</p>
                </div>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="zk-info-card h-100">
                            <i className="fas fa-trophy" />
                            <h5 className="mt-3">Best Brokerage Experience 2025</h5>
                            <p className="mb-0 text-secondary">Awarded for seamless onboarding and intuitive investing workflows.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="zk-info-card h-100">
                            <i className="fas fa-lock" />
                            <h5 className="mt-3">Top Security Platform</h5>
                            <p className="mb-0 text-secondary">Enterprise-grade security and strict compliance standards.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="zk-info-card h-100">
                            <i className="fas fa-smile" />
                            <h5 className="mt-3">Highest Customer Satisfaction</h5>
                            <p className="mb-0 text-secondary">Consistently rated highly by new and experienced investors.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Awards;