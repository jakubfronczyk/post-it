// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import prisma from "../../../prisma/client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const session = await getServerSession(req, res, authOptions);
        if (!session)
            return res
                .status(401)
                .json({ message: "Pleas sing in to make a post." });

        const title: string = req.body.title;
        console.log(title);

        //Get user
        const prismaUser = await prisma.user.findUnique({
            where: { email: session?.user?.email || undefined },
        });

        //Chceck title
        if (title.length > 300) {
            return res
                .status(403)
                .json({ message: "Sorry, your post is too long." });
        }
        if (!title.length) {
            return res
                .status(403)
                .json({ message: "Sorry, you cannot sent empty post." });
        }

        //Create Post
        try {
            const result = await prisma.post.create({
                data: {
                    title,
                    userId: prismaUser?.id,
                } as any,
            });
            res.status(200).json(result);
        } catch (err) {
            res.status(403).json({
                err: "Error has occured while making a post.",
            });
        }
    }
}
