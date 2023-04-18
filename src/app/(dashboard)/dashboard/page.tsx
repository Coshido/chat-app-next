import Button from "@/components/gui/Button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { FC } from "react";
import Link from "next/link";
import SignOutButton from "@/components/SignOutButton";

const page = async ({}) => {
  const session = await getServerSession(authOptions);

  return <div className="flex flex-col">Dashboard</div>;
};

export default page;
