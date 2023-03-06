export type PostsType = {
    title: string;
    id: string;
    createdAt?: string;
    comments?: {
        createdAt?: string;
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
    user: {
        name: string;
        image: string;
    };
};
