import axios from "axios";
import React, { useRef, useState } from "react";

const Product = (props) => {
  const enteredUsername = useRef();
  const enteredProduct = useRef();
  const enteredSmall = useRef();
  const enteredLong = useRef();
  const [data, setData] = useState({
    username: "",
    productName: "",
    smallDesc: "",
    longDesc: "",
  });

  const { username, productName, smallDesc, longDesc } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setData({ ...data, error: null });
      await axios.post(
        "api/product/product",
        { productName, smallDesc, longDesc },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // props.history.push("/Product");
    } catch (err) {
      setData({ ...data, error: err.response.data.error });
    }
    enteredUsername.current.value = ""; //just rarly you can do that but you shouldnt do it
    enteredProduct.current.value = "";
    enteredSmall.current.value = "";
    enteredLong.current.value = "";
  };

  return (
    <div>
      <form action="" className="mt-10">
        <div className="w-3/4 mx-auto">
          <label
            htmlFor="website-admin"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
          >
            Username
          </label>
          <div class="flex">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-200 dark:text-gray-400 dark:border-gray-600">
              @
            </span>
            <input
              type="name"
              name="username"
              value={username}
              class="rounded-none rounded-r-lg bg-gray-50 border  text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Adam"
              onChange={handleChange}
              ref={enteredUsername}
            />
          </div>
        </div>
        <div className="w-3/4 mx-auto mt-3">
          <label
            htmlFor="productName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Product Name
          </label>
          <input
            type="text"
            name="productName"
            value={productName}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=" "
            required
            onChange={handleChange}
            ref={enteredProduct}
          />
        </div>
        <div className="w-3/4 mx-auto mt-3">
          <label
            htmlFor="shortMessage"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
          >
            Short Description
          </label>
          <textarea
            name="smallDesc"
            value={smallDesc}
            onChange={handleChange}
            rows="2"
            ref={enteredSmall}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <div className="w-3/4 mx-auto mt-3">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
          >
            Long Description
          </label>
          <textarea
            onChange={handleChange}
            name="longDesc"
            type="longDesc"
            value={longDesc}
            ref={enteredLong}
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <div className="w-3/4 mx-auto mt-3">
          <button
            onClick={submitHandler}
            className="text-white  bg-blue-500 px-3 hover:bg-blue-700 py-2 transform transition delay-100 text-semibold rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Product;

// import React, { useState } from "react";

// import AddUser from "./Users/AddUser";
// import UsersList from "./Users/UsersList";
// // import './App.css';

// function Products() {
//   const [usersList, setUsersList] = useState([]);

//   const addUserHandler = (newUser) => {
//     setUsersList((prevUsersList) => {
//       return [newUser, ...prevUsersList];
//     });
//   };

//   return (
//     <div className="App">
//       <AddUser onAddUser={addUserHandler} />
//       <UsersList users={usersList} />
//     </div>
//   );
// }

// export default Products;
