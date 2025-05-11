import React from "react";
import { Link } from "react-router";
import '../App.css';

export const Nav = () => {
    return (
        <div className="nav"
            style={{ display: 'flex', gap: 30 }}>
            <Link to="/users" className="button-link">Users</Link>
            <Link to="/create" className="button-link">Register</Link>
        </div>
    )
}