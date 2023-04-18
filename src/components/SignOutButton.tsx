"use client";
import { signOut } from "next-auth/react";
import { ButtonHTMLAttributes, useState } from "react";
import Button from "./gui/Button";
import { authOptions } from "@/lib/auth";
import { toast } from "react-hot-toast";
import { Loader2, LogOut } from "lucide-react";

interface SignOutButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SignOutButton = ({ ...props }) => {
  const [isSigningOut, setIsSigningOut] = useState<boolean>(false);
  return (
    <Button
      {...props}
      variant="ghost"
      onClick={async () => {
        setIsSigningOut(true);
        try {
          await signOut();
        } catch (error) {
          toast.error("There was a problem signing out");
        } finally {
          setIsSigningOut(false);
        }
      }}
    >
      {isSigningOut ? (
        <Loader2 className="animate-spin h-4 w-4" />
      ) : (
        <LogOut className="w-4 h-4" />
      )}
    </Button>
  );
};

export default SignOutButton;
