"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { EditPostType } from "../types/EditPost";
import Toggle from "./Toggle";
import toast from "react-hot-toast";

const EditPost = ({ avatar, name, title, comments, id }: EditPostType) => {
    //Toggle
    const [toggle, setToggle] = useState(false);
    let deleteToastID: string;
    const queryClient = useQueryClient();
    //Delete post
    const { mutate } = useMutation(
        async (id: string) =>
            await axios.delete("/api/posts/deletePost", { data: id }),
        {
            onError: (error) => {
                console.log(error);
                toast.error(
                    "We are sorry, problem occurd. You cannot delete this post",
                    { id: deleteToastID }
                );
            },
            onSuccess: (data) => {
                toast.success("Post has been deleted.", { id: deleteToastID });
                queryClient.invalidateQueries(["auth-posts"]);
            },
        }
    );

    const deletePost = () => {
        deleteToastID = toast.loading("Deleting your post....", {
            id: deleteToastID,
        });
        mutate(id);
    };

    return (
        <>
            <div className="bg-white my-8 p-8 rounded-lg">
                <div className="flex items-center gap-2">
                    <Image
                        className="w-12 rounded-full"
                        width={60}
                        height={60}
                        src={avatar}
                        alt="avatar-photo"
                    />
                    <h3 className="font-bold text-gray-700">{name}</h3>
                </div>
                <div className="my-8">
                    <p className="break-all">{title}</p>
                </div>
                <div className="flex gap-4 cursor-pointer items-center">
                    <p className="text-sm font-bold text-gray-700">
                        {comments?.length} Comments
                    </p>
                    <button
                        className="text-sm font-bold text-red-500"
                        onClick={(e) => setToggle(true)}
                    >
                        Delete
                    </button>
                </div>
            </div>
            {toggle && (
                <Toggle
                    deletePost={deletePost}
                    setToggle={setToggle}
                />
            )}
        </>
    );
};

export default EditPost;
