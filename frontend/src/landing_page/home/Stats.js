import React from "react";

function Stats() {
  return (
    <section className="zk-section zk-stats-wrap">
      <div className="container py-5">
        <div className="row g-4 align-items-center">
          <div className="col-lg-4">
            <h2 className="fw-bold mb-3">Numbers that speak for performance</h2>
            <p className="mb-0 text-secondary">
              We focus on transparency, execution speed, and a product experience that helps you make confident decisions.
            </p>
          </div>
          <div className="col-lg-8">
            <div className="row g-3">
              <div className="col-sm-6">
                <div className="zk-metric-card">
                  <h3>12.3M+</h3>
                  <p className="mb-0">Users</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="zk-metric-card">
                  <h3>₹2.1L Cr+</h3>
                  <p className="mb-0">Assets Managed</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="zk-metric-card">
                  <h3>4.8M+</h3>
                  <p className="mb-0">Daily Orders</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="zk-metric-card">
                  <h3>99.98%</h3>
                  <p className="mb-0">Platform Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}   

export default Stats;