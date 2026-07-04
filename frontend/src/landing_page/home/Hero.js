import React, { useState } from "react";
import { Link } from "react-router-dom";


function Hero() {
    return (
        <div>
            <h1>Welcome to Our Financial Services</h1>
            <p>We provide a range of financial solutions to help you achieve your goals.</p>
            <Link to="/support">Get Support</Link>
        </div>
    );
}

export default Hero;