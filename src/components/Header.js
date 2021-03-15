import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/nike">Nike</Link>
                <Link to="/adidas">Adidas</Link>
            </nav>
        </div>
    );
}