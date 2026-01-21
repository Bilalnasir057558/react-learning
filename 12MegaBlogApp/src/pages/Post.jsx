import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container } from "../components";
import { Link } from "react-router-dom";
import postService from "../appwrite/postService";
import fileService from "../appwrite/fileService";
import { useSelector } from "react-redux";
import parse from "html-react-parser"

export default function Post() {
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const { slug } = useParams();
  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? userData.$id === post.userId : false;

  useEffect(() => {
    if(slug) {
        postService.getPost(slug).then((post) => {
        if(post) setPost(post);
        else navigate("/");
    })
    } else {
        navigate("/");
    }
    
  }, [slug, navigate, postService])

  const deletePost = () => {
    postService.deletePost(post.slug).then((status) => {
        if(status) {
            fileService.deleteFile(post.featuredImage);
            navigate("/");
        }
    });
  };

  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img
            src={fileService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl"
          />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.slug}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                    Delete
                </Button>
            </div>
          )}
        </div>

        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>

        <div>
            {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : (
    null
  );
}
