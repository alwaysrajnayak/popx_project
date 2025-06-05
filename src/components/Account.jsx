import React from "react";
import { FaCamera } from "react-icons/fa";

const Account = () => {
  const fullName = localStorage.getItem("fullName") || "Marry Doe";
  const email = localStorage.getItem("email") || "Marry@gmail.com";

  return (
    <div className="m-5 p-5 min-h-screen shadow-md">
      {/* Heading */}
      <div className="shadow-md p-5">
        <h1 className="text-2xl font-semibold">Account Settings</h1>
      </div>

      {/* Profile Container */}
      <div className="flex items-center gap-5 p-5 w-full max-w-md">
        <div className="relative">
          <img
            src="https://randomuser.me/api/portraits/women/70.jpg"
            alt="profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <p className="absolute top-[70px] left-[75px] w-8 h-8 bg-purple-700 text-white rounded-full flex items-center justify-center cursor-pointer">
            <FaCamera size={16} />
          </p>
        </div>
        <div>
          <h1 className="text-xl font-bold">{fullName}</h1>
          <p className="text-gray-500">{email}</p>
        </div>
      </div>

      {/* Account Info */}
      <div className="max-w-md p-5 border-b-2 border-dashed border-gray-400">
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam.
        </p>
      </div>
    </div>
  );
};

export default Account;
