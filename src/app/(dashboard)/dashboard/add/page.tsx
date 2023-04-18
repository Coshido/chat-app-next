import AddFriendButton from "@/components/AddFriendButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";

const page = async ({}) => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <main className="pt-8">
      <h1 className="font-bold text-5xl mb-8">Add a friend</h1>
      <AddFriendButton />
      <Link href="/dashboard">Back</Link>
    </main>
  );
};
export default page;
