import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login logic
        if (email === "" || password === "") {
            setError("Please fill in all fields");
        } else {
            setError("");
            // Redirect to dashboard or perform login action
            console.log("Logging in with", email, password);
        }   
};

    return (    
        <div className="hero"></div>
    );
}   

export default Hero;