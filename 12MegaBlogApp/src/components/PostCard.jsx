import React from "react";
import { Link } from "react-router-dom"
import file from "../appwrite/fileService"
 
function PostCard({
    $id,
    slug,
    title,
    featuredImage
}) {

    return (

        <Link to={`/post/${slug}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img 
                    src={file.getFilePreview(featuredImage)} 
                    alt={title} className="rounded-xl object-cover"/>
                </div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard