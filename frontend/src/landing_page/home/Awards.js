import React, { useState } from "react";
import { Link } from "react-router-dom";

function Awards() {
    return (
        <div>
            <h1>Awards</h1>
            <p>We are proud to have received numerous awards for our outstanding services and customer satisfaction.</p>
            <ul>
                <li>Best Customer Service Award 2023</li>
                <li>Outstanding Performance Award 2022</li>
                {/* Add more awards as needed */}
            </ul>
        </div>
    );
}

export default Awards;