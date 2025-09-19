import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import RegistrationForm from "../Components/RegistrationForm.jsx";
import LoginForm from "../Components/LoginForm.jsx";
function Login({ setAuth }) {
  const [isdisplay1, setDisplay1] = useState(false);
  const [isdisplay2, setDisplay2] = useState(false);
  const [permission, setPermission] = useState(false);

  useEffect(() => {
    if (permission) setAuth(permission);
  }, [permission, setAuth]);

  return (
    <div className=" flex flex-col min-h-screen items-center justify-between text-sky-400 bg-[url('../../poster/poser.jpg')]">
      <div className="p-4 flex flex-col items-center">
        <img
          src="../poster/hanos.png"
          alt="Hanos logo"
          className="w-72 h-72 mix-blend-lighten"
        />
        <h1 className="text-6xl hover:text-green-300">
          Welcome to Hanos Cinema
        </h1>
        <div className="p-4 text-gray-200">
          <button
            className="signup-btn bg-gray-600/50 rounded-full shadow px-6 py-2 mx-4 hover:bg-gray-500/50 hover:scale-105  "
            onClick={() => setDisplay1(true)}
          >
            Sign up
          </button>
          <button
            className="signin-btn bg-gray-600/50 rounded-full shadow px-6 py-2 hover:bg-gray-500/50 hover:scale-105 "
            onClick={() => setDisplay2(true)}
          >
            Sign in
          </button>
        </div>
      </div>
      <div className="flex justify-end  text-blue-500">
        <p className="m-2"> contact: natymiskir@gmail.com</p>
        <p className="m-2"> &copy;Dagmawi Antehun </p>
      </div>
      <RegistrationForm
        isdisplay={isdisplay1}
        setDisplay={setDisplay1}
        className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 
              text-white p-6    bg-center backdrop-blur-sm  rounded "
      />
      <LoginForm
        isdisplay={isdisplay2}
        setDisplay={setDisplay2}
        setPermission={setPermission}
        className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 
              text-white p-6    bg-center backdrop-blur-sm  rounded "
      />
      {permission && <Navigate to="/home" replace />}
    </div>
  );
}
export default Login;
