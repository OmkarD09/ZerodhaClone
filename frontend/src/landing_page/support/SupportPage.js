import React, { useState } from "react";
import { Link } from "react-router-dom";

function SupportPage() {
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
            console.log("Logging in with    ", email, password);
        }
    };

    return (    
        <div>
            <h2>Support Page</h2>   
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /> 
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit">Login</button>
            </form>
            <Link to="/create-ticket">Create a Ticket</Link>
        </div>
    );
}

export default SupportPage;
