import React from 'react';

function Pricing() {
    return (
        <section className="zk-section">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Simple, transparent pricing</h2>
                    <p className="text-secondary mb-0">No hidden charges. Pay for what you use.</p>
                </div>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="zk-price-card h-100">
                            <h5>Starter</h5>
                            <h3>₹0<span>/month</span></h3>
                            <ul>
                                <li>Zero account opening fee</li>
                                <li>Free delivery investments</li>
                                <li>Basic charting tools</li>
                            </ul>
                            <a href="/open-account" className="btn zk-btn-outline w-100">Choose Starter</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="zk-price-card zk-featured h-100">
                            <div className="zk-badge">Most Popular</div>
                            <h5>Trader Pro</h5>
                            <h3>₹20<span>/order</span></h3>
                            <ul>
                                <li>Advanced order types</li>
                                <li>Priority execution routing</li>
                                <li>Real-time analytics dashboard</li>
                            </ul>
                            <a href="/open-account" className="btn zk-btn-primary w-100">Go Pro</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="zk-price-card h-100">
                            <h5>Wealth Plus</h5>
                            <h3>₹999<span>/month</span></h3>
                            <ul>
                                <li>Dedicated relationship manager</li>
                                <li>Goal-based portfolio planning</li>
                                <li>Exclusive research reports</li>
                            </ul>
                            <a href="/open-account" className="btn zk-btn-outline w-100">Talk to Advisor</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;