"use client";

import { FC, useState } from "react";
import Button from "./gui/Button";
import { addFriendValidator } from "@/lib/validations/add-friend";
import axios, { AxiosError } from "axios";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { error } from "console";

interface AddFriendButtonProps {}

//infer the validation schema type to FormData so if i change the schema i don't have to update everything
type FormData = z.infer<typeof addFriendValidator>;

const AddFriendButton: FC<AddFriendButtonProps> = ({}) => {
  const [showSuccesState, setShowSuccessState] = useState<boolean>(false);

  //register inputs for validation, resolver use a custom validation (Zod),
  //setError fires custom errors and they can be instance of other error class (Zod, Axios),
  //formstate subscribes to errors so we can display them.

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(addFriendValidator),
  });

  const addFrined = async (email: string) => {
    console.log("add friend");
    try {
      const validatedEmail = addFriendValidator.parse({ email });
      console.log("asd");
      await axios.post("/api/friends/add", {
        email: validatedEmail,
      });
      setShowSuccessState(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError("email", { message: error.message });
        return;
      }
      if (error instanceof AxiosError) {
        setError("email", { message: error.response?.data });

        return;
      }
      setError("email", { message: "Something went wrong" });
    }
  };

  const onSubmit = (data: FormData) => {
    console.log("submit");
    addFrined(data.email);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm">
      <label
        htmlFor="email"
        className="ont-medium block text-sm leading-6 text-gray-900"
      >
        Add friend by E-Mail
      </label>
      <div className="mt-2 flex gap-4">
        <input
          {...register("email")}
          type="text"
          className="w-ull block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="you@example.com"
        />
        <Button>Add</Button>
      </div>
      <p className="mt-1 text-sm text-red-600">{errors.email?.message}</p>
      {showSuccesState ? (
        <p className="mt-1 text-sm text-green-600">Friend request sent!</p>
      ) : null}
    </form>
  );
};

export default AddFriendButton;
