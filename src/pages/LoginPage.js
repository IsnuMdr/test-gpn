import useInput from "../hooks/useInput";
import { useState } from "react";

const LoginPage = ({ onLogin }) => {
  const [adminpetugasusername, onAdminpetugasusernameChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onLogin(adminpetugasusername, password)
      .then((res) => {})
      .catch((err) =>
        setErrorMessage(
          "Ada kesalahan saat Login, mungkin Email dan Password salah"
        )
      );
  };

  return (
    <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
      <div className="flex flex-col overflow-y-auto md:flex-row">
        <div className="h-32 md:h-auto md:w-1/2">
          <img
            className="object-cover w-full h-full dark:hidden"
            src="img/login-office.jpeg"
            alt="Office"
          />
          <img
            className="object-cover w-full h-full dark:block"
            src="img/login-office-dark.jpeg"
            alt="Office"
          />
        </div>
        <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
          <form className="w-full" onSubmit={handleSubmit}>
            <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
              Login
            </h1>
            <label className="block text-sm">
              <span className="text-gray-700 dark:text-gray-400">Email</span>
              <input
                type="email"
                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                placeholder="Email Address"
                value={adminpetugasusername}
                onChange={onAdminpetugasusernameChange}
              />
            </label>
            <label className="block mt-4 text-sm">
              <span className="text-gray-700 dark:text-gray-400">Password</span>
              <input
                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                placeholder="***************"
                type="password"
                value={password}
                onChange={onPasswordChange}
              />
            </label>
            <button
              type="submit"
              className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
