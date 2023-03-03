export type EditPostType = {
    id: string;
    avatar: string;
    name: string;
    title: string;
    comments?: {
        id: string;
        postId: string;
        userId: string;
    }[];
};
