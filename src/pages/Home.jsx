import React from "react";
import { Link } from "react-router";
import '../App.css';

export const Home = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                minHeight: '100vh',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <h1 style={{ fontSize: 50 }}>Hi, Welcome!</h1>
            <p>La app #1 para la gestión de usuarios</p>
            <div 
                style={{display:'flex', gap:30}}>
                <Link to="/users" className="button-primary">Users</Link>
                <Link to="/create " className="button-success">Register</Link>
            </div>
        </div>
    )
}