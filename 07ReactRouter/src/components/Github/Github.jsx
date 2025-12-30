import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData();

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Bilalnasir057558")
    //     .then(resp => resp.json())
    //     .then(data => setData(data));
    // }, [])

    return (
        <div className="text-center bg-gray-600 text-white p-4 text-2xl" >Github Name: {data.name}
            <img className="block-inline mx-auto mt-2 rounded-full" src={data.avatar_url} alt="Github profile picture" width={300} />
        </div>
    )
}
export default Github

export const githubInfoLoader = async () => {
    const resp = await fetch("https://api.github.com/users/Bilalnasir057558");
    return resp.json();
}