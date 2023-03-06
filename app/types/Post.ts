export type PostType = {
    id: string;
    title: string;
    updatedAt?: string;
    avatar: string;
    name: string;
    user: {
        email: string;
        id: string;
        image: string;
        name: string;
    };
    comments?: {
        createdAt?: string | undefined;
        id: string;
        postId: string;
        title: string;
        userId: string;
        user: {
            email: string;
            id: string;
            image: string;
            name: string;
        };
    }[];
};
