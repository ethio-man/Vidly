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
    <div className=" flex flex-col min-h-screen items-center justify-between text-sky-400 bg-[url('../../poster/poser.jpg')] bg-cover bg-center">
      <div className="p-4 flex flex-col items-center">
        <img
          src="../poster/hanos.png"
          alt="Hanos logo"
          className="w-40 h-40 sm:w-72 sm:h-72 object-contain mix-blend-lighten"
        />
        <h1 className="text-3xl sm:text-6xl hover:text-green-300 text-center leading-tight">
          Welcome to Hanos Cinema
        </h1>
        <div className="p-4 text-gray-200 flex flex-col sm:flex-row gap-3 items-center">
          <button
            className="signup-btn bg-gray-600/50 rounded-full shadow px-4 sm:px-6 py-2 hover:bg-gray-500/50 hover:scale-105 w-full sm:w-auto text-center "
            onClick={() => setDisplay1(true)}
          >
            Sign up
          </button>
          <button
            className="signin-btn bg-gray-600/50 rounded-full shadow px-4 sm:px-6 py-2 hover:bg-gray-500/50 hover:scale-105 w-full sm:w-auto text-center "
            onClick={() => setDisplay2(true)}
          >
            Sign in
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-end text-blue-500 gap-1 text-sm sm:text-base">
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
        className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 z-50 "
      />
      {permission && <Navigate to="/home" replace />}
    </div>
  );
}
export default Login;
