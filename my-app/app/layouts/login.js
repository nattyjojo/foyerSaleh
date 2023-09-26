"use client";
import Header from "../components/header";
import MainFooter from "../components/Footer";
import { useState } from "react";
const Login = () => {
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const loginData = {
    name: name,
    password: password,
  };

  return (
    <>
      <Header />
      <main className="flex justify-center mb-[10rem]">
        <section className="">
          <h1 className="font-bold text-big pt-[15rem] w-full">Login :</h1>
          <form className="border p-small rounded">
            <label className="block font-bold">Name</label>
            <input
              className="block rounded py-3 px-2"
              placeholder="Enter Name"
              onChange={(event) => setName(event.target.value)}
              required
            ></input>
            <label className="block font-bold mt-smallest">Password</label>
            <input
              className="block rounded py-3 px-2"
              placeholder="Enter Password"
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password"
            ></input>
            <div className="flex justify-around ">
              <button
                type="reset"
                // onClick={() => setSubmit(!subit)}
                className="border mt-small w-[40%] font-bold rounded px-smallest py-2 text-blue-500 hover:text-inherit hover:bg-blue-900"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </main>
      <MainFooter />
    </>
  );
};
export default Login;
