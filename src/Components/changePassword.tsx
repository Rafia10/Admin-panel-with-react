import { useState } from "react";
import "../CSS/Form/_form.css";
import { useDispatch } from "react-redux";
import { changePass, login, login_failure } from "../Actions/AuthActions";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/axios";
import { toast } from "react-toastify";
import { ParticlesAnimation } from "./Particles";

export const ChangePassword = () => {
  const dispatch = useDispatch();
  const [newPass, setNewPass] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    await api
      .patch("/change-password", { password, newPass })
      .then((response) => {
        const user = response.data;
        console.log(user);
        dispatch(changePass(user));

        if (confirmPass !== newPass) {
          alert("confirm password does not match");
          return;
        }

        toast.success(response.data.msg);

        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.response.data.msg;
        dispatch(login_failure(errorMessage));
        toast.error(errorMessage);
      });
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
            Old Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="old-password"
            type="password"
            placeholder="Enter your old Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="new-password"
            type="password"
            placeholder="Enter your new password"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
          />
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirm-password"
            type="password"
            placeholder="Re-Enter your new password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleLogin}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
