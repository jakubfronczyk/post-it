// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        try {
            console.log(req.query);
            const id = Array.isArray(req.query.details)
                ? req.query.details[0]
                : req.query.details || "";
            const data = await prisma.post.findUnique({
                where: {
                    id,
                },
                include: {
                    user: true,
                    comments: {
                        orderBy: {
                            createdAt: "desc",
                        },
                        include: {
                            user: true,
                        },
                    },
                },
            });
            return res.status(200).json(data);
        } catch (err) {
            res.status(403).json({
                err: "Error has occured while making a post.",
            });
        }
    }
}
