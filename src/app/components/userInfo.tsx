
"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const UserInfo = () => {
  const session = authClient.useSession();

  const user = session.data?.user;

  const handlesignout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="absolute right-4 top-4 flex items-center gap-3 text-sm">
      {user ? (
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              {user.image ? (
                <img
                  alt="User Avatar"
                  src={user.image}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-red-600 text-white">
                  {user.name?.charAt(0)}
                </div>
              )}
            </div>
          </div>

          <h2>{user.name}</h2>

          <button
            onClick={handlesignout}
            className="btn btn-error btn-xs"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <Link
            href="/signIn"
            className="btn btn-ghost text-neutral-700 transition-colors hover:text-red-700"
          >
            সাইন ইন
          </Link>

          <Link
            href="/signup"
            className="btn bg-red-700 px-3 py-1.5 font-semibold text-white transition-colors hover:text-red-700"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
