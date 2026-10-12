"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { FormEvent } from "react";

const SingUpPage = () => {
  const onsubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    // console.log(user)

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      redirect("/");
      console.log(data);
    }

    if (error) {
      console.log(error);
    }
  };

  const handleGoogleSignUP = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    console.log(data);
  };

  const handleGithubSignUP = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });

    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="text-2xl font-bold text-red-700">সাইন আপ</h2>

      <form onSubmit={onsubmit}>
        <fieldset className="fieldset rounded-box w-md">
          <label className="label">নাম</label>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Name"
          />

          <label className="label">ImageURL</label>
          <input
            name="image"
            type="url"
            className="input"
            placeholder="Image"
          />

          <label className="label">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
          />

          <button
            type="submit"
            className="btn text-white bg-red-600 mt-4"
          >
            সাইন আপ করুন
          </button>
        </fieldset>
      </form>

      <button
        onClick={handleGoogleSignUP}
        className="btn mt-3"
      >
        Sign Up with Google
      </button>

      <button
        onClick={handleGithubSignUP}
        className="btn mt-3"
      >
        Sign Up with GitHub
      </button>
    </div>
  );
};

export default SingUpPage;