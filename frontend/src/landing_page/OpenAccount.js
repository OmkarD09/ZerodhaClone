import React from "react";

function OpenAccount() {
  return (
    <section className="zk-section">
      <div className="container py-5">
        <div className="zk-cta-panel text-center">
          <h2 className="fw-bold mb-3">Open your account in minutes</h2>
          <p className="mb-4">
            Get started with paperless onboarding, fast KYC, and instant access to your investment dashboard.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="/open-account" className="btn btn-lg zk-btn-primary">Create Free Account</a>
            <a href="/support" className="btn btn-lg zk-btn-outline">Need Help?</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpenAccount;