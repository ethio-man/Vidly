import { useState } from "react";
import User from "../api/user.js";
export default function registrationForm({ isdisplay, setDisplay, className }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function Registor() {
    if (name && email && password) {
      try {
        const response = await User.createUser({ name, email, password });
        const token = response.headers["x-auth-token"];
        localStorage.setItem("authToken", token);
      } catch (err) {
        if (err.response && err.response.status === 400)
          alert("validation error:" + err.response.data);
        else alert("Something went wrong please try again");
        console.error("User not created:", err);
      }
    }
  }

  return (
    <>
      {isdisplay && (
        <div className={className}>
          <div className="flex flex-col justify-between text-center w-72 h-80 bg-gradient-to-b from-sky-600/30 to-indigo-500/30 via-purple-400/30 text-blue-600 p-8 m-32 rounded-lg">
            <p className="font-bold text-sky-50 text-xl "> Sign Up</p>
            <div className="shadow-xl bg-white rounded-full py-2 items-center">
              <label>👤</label>
              <input
                type="text"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="shadow-xl  bg-white rounded-full py-2 items-center">
              <label>📩</label>
              <input
                type="email"
                placeholder="email.."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="shadow-xl  bg-white rounded-full py-2 items-center">
              <label>🔏</label>
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                className="bg-blue-500 text-blue-200 px-6 py-2 rounded-full hover:bg-blue-600"
                onClick={() => {
                  Registor();
                  setDisplay(false);
                }}
              >
                Create Account
              </button>
              <p className="text-sky-100">Already account?sign in</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
