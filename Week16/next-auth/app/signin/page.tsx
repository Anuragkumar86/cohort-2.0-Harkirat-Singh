"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthButtons() {
  const router = useRouter();

  const handleSignIn = async (provider : any, options = {}) => {
    const res = await signIn(provider, options);
    if (provider === "credentials" && res?.ok) {
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-gray-100 rounded-xl shadow-lg w-80 mx-auto">
      <button
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        onClick={() => handleSignIn("google")}
      >
        Login with Google
      </button>
      
      <button
        className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
        onClick={() => handleSignIn("github")}
      >
        Login with GitHub
      </button>
      
      <button
        className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        onClick={() => handleSignIn("credentials", { username: "", password: "", redirect: false })}
      >
        Login with Email
      </button>
    </div>
  );
}
