import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg zk-navbar sticky-top">
      <div className="container py-2">
        <a className="navbar-brand fw-bold" href="/">Zerodha Clone</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#zkMainNav"
          aria-controls="zkMainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="zkMainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="/pricing">Pricing</a></li>
            <li className="nav-item"><a className="nav-link" href="/support">Support</a></li>
            <li className="nav-item mt-2 mt-lg-0">
              <a className="btn zk-btn-primary px-3" href="/open-account">Open Account</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;