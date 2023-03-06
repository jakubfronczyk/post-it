"use client";
import Image from "next/image";
import Link from "next/link";
import { PostType } from "../types/Post";

const Post = ({ avatar, name, title, id, comments }: PostType) => {
    console.log("Comments: ", comments);
    return (
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
                <Link href={`/post/${id}`}>
                    <p className="text-sm font-bold text-gray-700">
                        {comments?.length ?? 0} Comments
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default Post;
