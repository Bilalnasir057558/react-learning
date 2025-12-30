import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const {userId} = useParams()
    return (
        <div className="bg-gray-400 p-3 text-white text-xl font-bold">User: {userId}</div>
    )
}
export default User