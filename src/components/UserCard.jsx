import React from "react";
import { Link } from "react-router";

export const UserCard = () => {
    return (
        <div>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
        </div>
    )
}