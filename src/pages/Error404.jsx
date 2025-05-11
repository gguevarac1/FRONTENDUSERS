import React from "react";
import { Link } from "react-router";

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
            <Link to='/' style={{ background: 'black', color: 'white', paddinq: '6px 12px', textDecoration:'none' }}>Back to homepage</Link>

        </div>
    )
}