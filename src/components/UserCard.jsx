import React from "react";
import { Link } from "react-router";

export const UserCard = ({id, name, email}) => (
    <div
        style={{
            background: '#eee',
            borderRadius: 10,
            padding: '10px 10px',
            textAlign: 'center',
            verticalAlign: 'center'
        }}>
        <h2>{name}</h2>
        <h3>{email} </h3>
        <Link
            to={'/user/' + id}
            style={{
                background: '#000',
                color: 'white',
                padding: '6px 12px',
                textDecoration: 'none',
                borderRadius: 5
            }}
        >Ver detalle</Link>
    </div>
)