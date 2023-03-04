"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AddPost from "./components/AddPost";
import Post from "./components/Post";
import { PostsType } from "./types/Posts";

//Fetch all posts
const allPost = async () => {
    const response = await axios.get("api/posts/getPosts");
    return response.data;
};

export default function Home(): JSX.Element {
    const { data, error, isLoading } = useQuery<PostsType[]>({
        queryFn: allPost,
        queryKey: ["posts"],
    });
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <main className="">
            <AddPost />
            {data?.map((post: PostsType) => (
                <Post
                    key={post.id}
                    id={post.id}
                    name={post.user.name}
                    avatar={post.user.image}
                    title={post.title}
                    comments={post.comments}
                />
            ))}
        </main>
    );
}
