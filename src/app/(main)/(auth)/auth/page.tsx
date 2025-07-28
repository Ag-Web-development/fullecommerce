"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  let router = useRouter();
  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div className="flex justify-center items-center min-h-screen  !mt-7">
      <div className="w-full max-w-3xl min-h-[50vh] mx-auto p-6  rounded-lg shadow-md flex flex-col  ">
        <div
          onClick={() => router.push("/")}
          className="mb-8 lg:mb-12 cursor-pointer "
        >
          <ChevronLeft className="w-6 h-6 text-gray-500 border rounded-full border-gray-500" />
        </div>

        {/* Form Header  */}
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-3xl lg:text-5xl p-2 font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h1>

          <p className="text-gray-600 mt-2">
            {isSignUp
              ? "Create a new account to get started shopping journey."
              : "Welcome back ! sign in to continue your shopping journey."}
          </p>
        </div>

        <div className="mt-4 flex   justify-center items-center">
          <p className="text-base  sm:text-lg text-gray-600">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              onClick={toggleAuthMode}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent  bg-clip-text cursor-pointer hover:underline"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
