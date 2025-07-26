"use client";

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
    // <div className="flex min-h-screen !bg-red-900 !mt-7">
    //   <div className="w-full max-w-3xl bg-yellow-600 mx-auto p-6  rounded-lg shadow-md flex flex-col lg:flex-row ">
    //     <div
    //       onClick={() => router.push("/")}
    //       className="mb-8 lg:mb-12 cursor-pointer "
    //     >
    //       <ChevronLeft className="w-6 h-6 text-gray-500 border rounded-full border-gray-300" />
    //     </div>
    //   </div>
    // </div>
    <div className="!bg-green-500 h-[300px]">hi</div>
  );
}
