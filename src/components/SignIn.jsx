import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in all required fields.");
      return;
    }
    // Here you would typically handle the login logic, e.g., API call
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    navigate("/account");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-5">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-xl p-8 text-center">
        <div className="mb-8 text-left sm:text-center">
          <h1 className="text-3xl font-semibold mb-2">
            Sign In to your <br />
            PopX account
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit,
          </p>
        </div>

        {/* Email */}
        <div className="relative mb-6">
          <input
            type="email"
            id="email"
            placeholder="Enter Eamil "
            onChange={(e) => setEmail(e.target.value)}
            className="peer w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-purple-600"
          />
          <label
            htmlFor="email"
            className="
                absolute left-4 top-[-2px] -translate-y-1/2
                bg-white px-1 text-purple-800 text-sm
              "
          >
            Email Address
          </label>
        </div>

        {/* Password */}
        <div className="relative mb-6">
          <input
            type="password"
            id="password"
            placeholder=" Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            className="peer w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-purple-600"
          />
          <label
            htmlFor="password"
            className="
                absolute left-4 top-[-2px] -translate-y-1/2
                bg-white px-1 text-purple-800 text-sm
              "
          >
            Password
          </label>
        </div>

        {/* Login Button */}
        <div className="mt-6">
          <button
            onClick={handleLogin}
            className="w-3/4 sm:w-full py-3 px-4 rounded-lg bg-purple-700 text-white text-lg font-semibold hover:bg-purple-800 transition cursor-pointer
            "
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
