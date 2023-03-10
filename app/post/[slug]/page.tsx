"use client";

import AddComment from "@/app/components/AddComment";
import Post from "@/app/components/Post";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

type URL = {
    params: {
        slug: string;
    };
};

type CommentType = {
    id: number;
    message: string;
    createdAt: string;
    user: {
        name: string;
        image: string;
    };
};

const fetchDetails = async (slug: string) => {
    const response = await axios.get(`/api/posts/${slug}`);
    return response.data;
};

const PostDetail = (url: URL) => {
    const { data, isLoading } = useQuery({
        queryFn: () => fetchDetails(url.params.slug),
        queryKey: ["detail-post"],
    });
    if (isLoading) return "Loading...";
    console.log(data);
    return (
        <div>
            <Post
                id={data.id}
                name={data.user.name}
                avatar={data.user.image}
                title={data.title}
                comments={data.comments}
                user={{
                    email: "",
                    id: "",
                    image: "",
                    name: "",
                }}
            />
            <AddComment id={data?.id} />
            {data?.comments.map((comment: CommentType) => (
                <div
                    className="my-6 bg-white p-8 rounded-md"
                    key={comment.id}
                >
                    <div className="flex items-center gap-2">
                        <Image
                            width={24}
                            height={24}
                            src={comment.user?.image}
                            alt="avatar"
                        />
                        <h3 className="font-bold">{comment?.user?.name}</h3>
                        <h2 className="text-sm">{comment.createdAt}</h2>
                    </div>
                    <div className="py-4">{comment.message}</div>
                </div>
            ))}
        </div>
    );
};

export default PostDetail;
