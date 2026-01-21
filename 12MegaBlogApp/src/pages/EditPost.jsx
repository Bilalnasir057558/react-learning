import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import postService from "../appwrite/postService";

export default function EditPost() {

    const [post, setPost] = useState(null);
    const navigate = useNavigate();
    const {slug} = useParams(); 

    useEffect(() => {
        if(slug) {
            postService.getPost(slug).then((post) => {
                if(post) {
                    setPost(post);
                }
            })
        } else {
            navigate("/");
        }
    }, [slug, navigate])

    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : <div className="text-center py-8">Loading...</div>
}