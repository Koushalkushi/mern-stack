import React, { useEffect, useState } from "react";
import axios from "axios";

// import {  Switch, Route } from "react-router-dom";
import Navbar from './Navbar';

const Home = (props) => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const res = await axios.get("/api/auth", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setUser(res.data);
  };
  useEffect(() => {
    getUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/login");
  };

  if (!localStorage.getItem("token")) {
    props.history.push("/login");
  }
  return (
    <div className=" ">
      <Navbar/>
      

      <div className="m-5">
        <p className=" text-4xl mb-2">Welcome {user && user.name}</p>
        <button
          className="text-white bg-blue-500 px-3 hover:bg-blue-700 py-2 transform transition delay-100 text-semibold rounded-md"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
