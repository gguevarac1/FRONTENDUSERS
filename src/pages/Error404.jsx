import React from "react";
import { Link } from "react-router";
import '../App.css';


export const Error404 = () => {
    return (
        <div style={{
            minHeight: '100h',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10
        }}>
            <h1>Error 404</h1>
            <p>Sorry, we couldn't find this page.</p>
            <Link to="/" className="button-link">Back to Homepage</Link>
        </div>
    )
}