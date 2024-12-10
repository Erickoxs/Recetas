import React from "react";

interface UserCardProps {
    username: string;
    email: string;
}


const UserCard: React.FC<UserCardProps> = ({ username, email }) => {

    return ( 
        <div className="user-card">
            <h3>{username}</h3>
            <p>{email}</p>
        </div>
    )
}

export default UserCard;