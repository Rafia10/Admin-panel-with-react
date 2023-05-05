import { useState } from "react";
import "../CSS/Form/_form.css";
import { useDispatch } from "react-redux";
import { login, login_failure } from "../Actions/AuthActions";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/axios";
import { toast } from "react-toastify";
import { ParticlesAnimation } from "./Particles";
import axios from "axios";

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await api
      .post("/login", { email, password })
      .then((response) => {
        const user = response.data;
        dispatch(login(user));

        // eslint-disable-next-line no-unsafe-optional-chaining
        const token = user.data.accessToken;
        const actualToken = user.data.accessToken.token;
        localStorage.setItem("userData", JSON.stringify(token));

        if (token) {
          api.defaults.headers.common["X-Access-Token"] = actualToken;
          // Store the access token in localStorage
        }
        toast.success(response.data.msg);
      })
      .catch((error) => {
        const errorMessage = error.response.data.msg;
        dispatch(login_failure(errorMessage));
        toast.error(errorMessage);
      });

    navigate("/dashboard");
  };

  return (
    <div className="flex justify-start ml-60 mr-28 items-center min-h-screen">
      {/* <div
        className="image-container"
        style={{
          marginLeft: "600px",
          marginRight: "500px",
          marginTop: "50px",
        }}
      > */}
      {/* <img src="public/logo.png" alt="admin-logo" /> */}
      {/* </div> */}

      <ParticlesAnimation />

      <form className="bg-white shadow-2xl rounded-lg p-10 w-96">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleLogin}
          >
            Login
          </button>
          {/* <Link
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            to="/change-password"
          >
            Change Password?
          </Link> */}
        </div>
      </form>
    </div>
  );
};
