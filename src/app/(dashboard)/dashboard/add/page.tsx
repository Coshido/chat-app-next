import AddFriendButton from "@/components/AddFriendButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";

const page = async ({}) => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <main className="pt-8">
      <h1 className="mb-8 text-5xl font-bold">Add a friend</h1>
      <AddFriendButton />
    </main>
  );
};
export default page;
