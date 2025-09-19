import { useState } from "react";

import LoginUser from "../api/auth.js";
export default function registrationForm({
  isdisplay,
  setDisplay,
  setPermission,
  className,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function Login() {
    if (email && password) {
      try {
        const response = await LoginUser({ email, password });
        const token = response.data;
        if (token) {
          setPermission(true);
        }
      } catch (err) {
        if (err.response && err.status === 400)
          alert("Invalid email or password", err.response.data);
        else alert("Something failed please try again");
      }
    }
  }
  return (
    <>
      {isdisplay && (
        <div className={className}>
          <div className="flex flex-col justify-between text-center w-72 h-80 bg-gradient-to-b from-sky-600/30 to-indigo-500/30 via-purple-400/30 text-blue-600 p-8 m-32 rounded-lg">
            <p className="font-bold text-sky-50 text-xl "> Sign in</p>
            <div className="shadow-xl  bg-white rounded-full py-2 items-center">
              <label>📩</label>
              <input
                type="email"
                placeholder="email.."
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>

            <div className="shadow-xl  bg-white rounded-full py-2 items-center">
              <label>🔏</label>
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <button
                className="bg-blue-500 text-blue-200 px-6 py-2 rounded-full  hover:bg-blue-600"
                onClick={() => {
                  setDisplay(false);
                  Login();
                }}
              >
                Log in
              </button>
              <p className="text-sky-100">..if..error</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
