"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthPostsType } from "../types/AuthPosts";
import EditPost from "./EditPost";

type Props = {};

const fetchAuthPosts = async () => {
    const response = await axios.get("/api/posts/authPosts");
    return response.data;
};

const MyPosts = (props: Props) => {
    const { data, isLoading } = useQuery<AuthPostsType>({
        queryFn: fetchAuthPosts,
        queryKey: ["auth-posts"],
    });

    if (isLoading) return <h1>Loading...</h1>;
    console.log(data);
    return (
        <div>
            {data?.posts?.map((post) => (
                <EditPost
                    id={post.id}
                    key={post.id}
                    avatar={data.image}
                    name={data.name}
                    title={post.title}
                    comments={post.comments}
                />
            ))}
        </div>
    );
};

export default MyPosts;
