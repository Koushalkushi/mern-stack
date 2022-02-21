import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
  });

  const { email, password, error } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setData({ ...data, error: null });
      const res = await axios.post(
        "/api/auth/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("token", res.data.token);
      props.history.push("/");
    } catch (err) {
      setData({ ...data, error: err.response.data.error });
    }
  };

  return (
    <div className="">
      <div className="flex justify-center" />
      <div className="sm:w-3/4 mx-auto">
        <h4 className="text-gray-600 font-semibold text-center mt-5 text-2xl mb-4">
          Log into your account
        </h4>
        <div className="bg-white p-5 drop-shadow-2xl ">
          <form>
            <div className="mb-3">
              <label htmlFor="email">
                Email
                <span className="text-red-700 text-semibold pl-0.5">*</span>
              </label>
              <input
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className=" mb-4">
              <label htmlFor="password">
                Password
                <span className="text-red-700 text-semibold pl-0.5">*</span>
              </label>
              <input
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            {error ? <p className="text-danger">{error}</p> : null}
            <div className="text-center">
              <button
                className="text-white bg-blue-500 px-3 hover:bg-blue-700 py-2 transform transition delay-100 text-semibold rounded-md"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </form>
      <div className=" text-center mt-2">
        new here?
        <Link href="/Register" className="pl-1 text-red-600 underline">register</Link>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
