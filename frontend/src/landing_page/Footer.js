import React from "react"

function Footer() {
  return (
    <footer className="zk-footer pt-5 pb-4">
      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-lg-5">
            <h5 className="fw-bold mb-3">Zerodha Clone</h5>
            <p className="mb-3">
              An investor-focused platform with transparent pricing, research-driven tools, and a smooth trading experience.
            </p>
            <div className="d-flex gap-3 fs-5">
              <a href="/" aria-label="Twitter"><i className="fab fa-x-twitter" /></a>
              <a href="/" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
              <a href="/" aria-label="Instagram"><i className="fab fa-instagram" /></a>
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <h6 className="fw-semibold">Company</h6>
            <ul className="list-unstyled m-0 zk-footer-links">
              <li><a href="/about">About</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/support">Support</a></li>
            </ul>
          </div>
          <div className="col-6 col-lg-2">
            <h6 className="fw-semibold">Products</h6>
            <ul className="list-unstyled m-0 zk-footer-links">
              <li><a href="/">Stocks</a></li>
              <li><a href="/">Mutual Funds</a></li>
              <li><a href="/">ETFs</a></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h6 className="fw-semibold">Contact</h6>
            <p className="mb-1">support@zerodhaclone.com</p>
            <p className="mb-0">+91 99999 11111</p>
          </div>
        </div>
        <div className="border-top pt-3 d-flex flex-wrap justify-content-between gap-2">
          <small>&copy; {new Date().getFullYear()} Zerodha Clone. All rights reserved.</small>
          <small>Built with React and Bootstrap</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer;