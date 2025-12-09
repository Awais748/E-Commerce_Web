import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
const Login = ({setToken}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });

      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }

      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-2xl border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8 tracking-tight">
          Admin Login
        </h1>

        <form onSubmit={onSubmitHandler} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-2">Email</label>
            <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-gray-800">
              <Mail className="w-5 h-5 text-gray-500 mr-2" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="admin@example.com"
                required
                className="w-full outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-2">Password</label>
            <div className="flex items-center border border-gray-300 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-gray-800">
              <Lock className="w-5 h-5 text-gray-500 mr-2" />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Enter your password"
                required
                className="w-full outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-xl text-lg font-medium hover:bg-gray-800 transition-all duration-200 shadow-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
