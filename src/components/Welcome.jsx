import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="px-5 py-10 min-h-screen flex flex-col justify-end lg:justify-center items-center text-left lg:text-center bg-gray-100">
      <div className="flex flex-col justify-center gap-5 p-5 w-full max-w-xl bg-white rounded-lg shadow-lg">
        <div>
          <h1 className="text-2xl  sm:text-4xl font-semibold text-gray-800 mb-4">
            Welcome to PopX
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <div className="flex flex-col w-full">
          <Link to="/signUp">
            <button className="w-full mb-3 py-3 bg-purple-600 text-white rounded hover:scale-105 hover:shadow-md transition cursor-pointer">
              Create Account
            </button>
          </Link>
          <Link to="/signIn">
            <button className="w-full py-3 bg-gray-300 text-black rounded hover:scale-105 hover:shadow-md transition cursor-pointer">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
