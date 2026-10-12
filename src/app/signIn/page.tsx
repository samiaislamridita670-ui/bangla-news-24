
"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SignInPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onsubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    const email = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/",
      });

      if (error) {
        setErrorMessage(
          error.message || "ইমেইল অথবা পাসওয়ার্ড সঠিক নয়।"
        );
        return;
      }

      if (data) {
        router.push("/");
        router.refresh();
      }
    } catch {
      setErrorMessage(
        "লগইন করা যাচ্ছে না। অনুগ্রহ করে আবার চেষ্টা করুন।"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setErrorMessage("");

    try {
      const { error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      if (error) {
        setErrorMessage(error.message || "Google দিয়ে লগইন করা যায়নি।");
      }
    } catch {
      setErrorMessage("Google Login-এ সমস্যা হয়েছে।");
    }
  };

  const handleGithubSignIn = async () => {
    setErrorMessage("");

    try {
      const { error } = await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
      });

      if (error) {
        setErrorMessage(error.message || "GitHub দিয়ে লগইন করা যায়নি।");
      }
    } catch {
      setErrorMessage("GitHub Login-এ সমস্যা হয়েছে।");
    }
  };

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-6 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-red-700">
          সাইন ইন
        </h2>

        {errorMessage && (
          <p
            role="alert"
            className="mb-4 rounded-lg bg-red-100 p-3 text-sm text-red-700"
          >
            {errorMessage}
          </p>
        )}

        <form onSubmit={onsubmit}>
          <fieldset className="fieldset w-full">
            <label className="label" htmlFor="email">
              ইমেইল
            </label>

            <input
              id="email"
              name="email"
              type="email"
              className="input w-full"
              placeholder="আপনার ইমেইল লিখুন"
              autoComplete="email"
              required
            />

            <label className="label mt-3" htmlFor="password">
              পাসওয়ার্ড
            </label>

            <input
              id="password"
              name="password"
              type="password"
              className="input w-full"
              placeholder="আপনার পাসওয়ার্ড লিখুন"
              autoComplete="current-password"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="btn mt-5 w-full border-0 bg-red-600 text-white hover:bg-red-700"
            >
              {loading ? "লগইন হচ্ছে..." : "সাইন ইন করুন"}
            </button>
          </fieldset>
        </form>

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-300" />
          <span className="text-sm text-gray-500">অথবা</span>
          <div className="h-px flex-1 bg-gray-300" />
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="btn w-full"
        >
          Sign In with Google
        </button>

        <button
          type="button"
          onClick={handleGithubSignIn}
          className="btn mt-3 w-full"
        >
          Sign In with GitHub
        </button>
      </div>
    </main>
  );
};

export default SignInPage;
