"use client";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useRouter } from "next/navigation";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, addUser, isLoggedIn } = useContext(UserContext);
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const router = useRouter();

  const handleLogin = (e: any) => {
    e.preventDefault();
    addUser({ username: username, password: password });
    login();
    router.push("/");
  };
  useEffect(() => {
    if (!isLoggedIn) {
      setShowLoginMessage(true);
      const timer = setTimeout(() => {
        setShowLoginMessage(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);
  return (
    <div className="flex flex-col xl:min-h-screen">
      <div className="flex-grow w-[90%] mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-semibold text-start mt-6">
          Login to your account
        </h1>
        {showLoginMessage && (
          <p className="text-lg font-bold text-red-700">Login First</p>
        )}
        <p className="mt-2">
          In order to use the editing and rating capabilities of TMDB, as well
          as get personal recommendations you will need to login to your
          account. If you do not have an account, registering for an account is
          free and simple. <span className="text-[#43B4E4]">Click here</span> to
          get started.
        </p>
        <p className="mt-6">
          If you signed up but didn't get your verification email,{" "}
          <span className="text-[#43B4E4]">click here</span> to have it resent.
        </p>
        <form onSubmit={handleLogin} className="flex flex-col gap-4 mt-6">
          <label className="ml-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-1 border-black rounded-lg p-2 outline-[#43B4E4]"
          />
          <label className="ml-1 mt-4">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-1 border-black rounded-lg p-2 outline-[#43B4E4]"
          />
          <div className="flex flex-row mt-4 gap-6">
            <button
              type="submit"
              className="bg-[#43B4E4] p-2 rounded-lg w-[100px] font-bold text-white cursor-pointer hover:bg-black transition-all"
            >
              Login
            </button>
            <button type="button" className="text-[#43B4E4] hover:underline">
              Reset Password
            </button>
          </div>
        </form>
      </div>
      {/* Footer */}
    </div>
  );
}

export default Login;
