import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import MyPosts from "./MyPosts";

type Props = {};

const Dashboard = async (props: Props) => {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/api/auth/signin");
    }

    return (
        <main>
            <h1 className="text-2xl font-bold">Hello {session?.user?.name}</h1>
            <MyPosts />
        </main>
    );
};

export default Dashboard;
