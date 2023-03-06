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
            return res.status(401).json({ message: "Please sing in." });
        //Get user
        const prismaUser = await prisma.user.findUnique({
            where: { email: session?.user?.email ?? undefined },
        });

        try {
            const { title, postId } = req.body.data;
            //Chceck title
            if (!title.length) {
                return res
                    .status(403)
                    .json({ message: "Sorry, you cannot add empty comment." });
            }

            const result = await prisma.comment.create({
                data: {
                    message: title,
                    userId: prismaUser?.id,
                    postId,
                },
            });
            res.status(201).json(result);
        } catch (err) {
            res.status(403).json({
                err: "Error has occured while making a post.",
            });
        }
    }
}
