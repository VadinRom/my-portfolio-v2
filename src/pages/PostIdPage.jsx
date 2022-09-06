import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import MyButton from '../components/UI/button/MyButton';

const PostIdPage = () => {
    const router = useNavigate()
    const params = useParams();

    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })

    const [fetchComments, isComLoading] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1>You have opened a post page with ID = {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{post.id}. {post.title}</div>
            }
            <h1>
                Comments
            </h1>
            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map(comm =>
                        <div keu={comm.id} style={{ marginTop: 15 }}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }

            <MyButton style={{ marginTop: 20 }} onClick={() => router('/posts')}>
                Back to posts
            </MyButton>

        </div>
    );
};

export default PostIdPage;