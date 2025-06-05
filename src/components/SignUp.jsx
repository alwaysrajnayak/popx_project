import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onSubmit = () => {
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);

    if (!fullName || !email) {
      alert("Please fill in all required fields.");
      return;
    }

    navigate("/account");
  };

  return (
    <div className="p-5 flex justify-center items-center min-h-screen bg-gray-50">
      <div className="flex flex-col justify-between text-center p-8 w-full max-w-2xl bg-white shadow-lg rounded-lg">
        <div>
          <h1 className="text-3xl font-semibold mb-8">
            Create your <br />
            PopX account
          </h1>

          {/* Full Name */}
          <div className="relative mb-6">
            <input
              type="text"
              id="name"
              placeholder=" "
              className="peer w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-purple-600"
              onChange={(e) => setFullName(e.target.value)}
            />
            <label
              htmlFor="name"
              className="
                absolute left-4 top-[-2px] -translate-y-1/2
                bg-white px-1 text-purple-800 text-sm
              "
            >
              Full Name <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Phone Number */}
          <div className="relative mb-6">
            <input
              type="number"
              id="phone"
              placeholder=" "
              className="peer w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-purple-600"
            />
            <label
              htmlFor="phone"
              className="
                absolute left-4 top-[-2px] -translate-y-1/2
                bg-white px-1 text-purple-800 text-sm
              "
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Email Address */}
          <div className="relative mb-6">
            <input
              type="email"
              id="email"
              placeholder=" "
              className=" w-full p-4 border border-gray-300 rounded"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="email"
              className="
                absolute left-4 top-[-2px] -translate-y-1/2
                bg-white px-1 text-purple-800 text-sm
              "
            >
              Email Address <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Password */}
          <div className="relative mb-6">
            <input
              type="password"
              id="password"
              placeholder=" "
              className=" w-full p-4 border border-gray-300 rounded "
            />
            <label
              htmlFor="password"
              className="
                absolute left-4 top-[-2px] -translate-y-1/2
                bg-white px-1 text-purple-800 text-sm
              "
            >
              Password <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Company Name */}
          <div className="relative mb-6">
            <input
              type="text"
              id="company-name"
              placeholder=" "
              className=" w-full p-4 border border-gray-300 rounded "
            />
            <label
              htmlFor="company-name"
              className="
                absolute left-4 top-[-2px] -translate-y-1/2
                bg-white px-1 text-purple-800 text-sm
              "
            >
              Company Name
            </label>
          </div>

          {/* Agency Question */}
          <div className="mb-6 text-left ml-12 sm:ml-0">
            <p className="mb-2">
              Are you an Agency? <span className="text-red-500">*</span>
            </p>
            <div className="flex gap-12">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="yes"
                  name="agency"
                  className="transform scale-150"
                />
                <label htmlFor="yes">Yes</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="no"
                  name="agency"
                  className="transform scale-150"
                />
                <label htmlFor="no">No</label>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            onClick={onSubmit}
            className="w-3/4 sm:w-full py-3 px-4 rounded-lg bg-purple-700 text-white text-lg font-semibold hover:bg-purple-800 transition cursor-pointer"
          >
            Create your account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
