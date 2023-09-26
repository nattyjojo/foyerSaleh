"use client";
import Header from "../components/header";
import MainFooter from "../components/Footer";
import { useState } from "react";

const Registeration = () => {
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [subit, setSubmit] = useState(null);

  const [comfirmedPassword, setComfirmedPassword] = useState(null);
  const signUpData = {
    password: password,
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
  };

  return (
    <>
      <Header />

      <main className=" mb-[10rem] flex justify-center ">
        <section>
          <h1 className="font-bold text-big pt-[15rem]">Sign-Up :</h1>

          <form
            onSubmit={(event) => {
              event.preventDefault();

              console.log(signUpData);
            }}
            className=" border  rounded p-small"
          >
            <h1 className="font-bold">Name</h1>

            <p className={`text-[green] ${subit ? "block" : "hidden"} `}>
              sign Up succesfull!
            </p>
            <div className="flex gap-smallest">
              <input
                className=" w-[100%] rounded py-3 px-2"
                placeholder="Enter First Name"
                required
                onChange={(event) => setFirstName(event.target.value)}
              ></input>
              <input
                className="w-[100%] rounded py-3 px-2"
                placeholder="Enter Last Name"
                required
                onChange={(event) => setLastName(event.target.value)}
              ></input>
            </div>
            <br></br>
            <h1 className="font-bold">Contact</h1>
            <div className="flex gap-smallest">
              <input
                className=" w-[100%] rounded py-3 px-2"
                placeholder="Enter Phone Number"
                onChange={(event) => setPhoneNumber(event.target.value)}
                required
              ></input>
              <input
                className="w-[100%] rounded py-3 px-2"
                placeholder="Enter Email"
                required
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            </div>
            <br></br>
            <h1 className="font-bold">Password</h1>
            <div className="flex gap-smallest">
              <input
                type="password"
                className={`w-[100%] rounded  py-3 px-2 ${
                  comfirmedPassword ? "bg-green-600" : ""
                }`}
                placeholder="Enter Password"
                required
                onChange={(event) => setPassword(event.target.value)}
              ></input>
              <input
                type="password"
                className={`w-[100%] rounded  py-3 px-2 ${
                  comfirmedPassword ? "bg-green-600" : ""
                }`}
                placeholder="Comfirm Password"
                required
                onChange={(event) => {
                  [
                    event.target.value === password
                      ? setComfirmedPassword(!comfirmedPassword)
                      : setComfirmedPassword(null),
                  ];
                }}
              ></input>
            </div>

            <br></br>
            <div className="flex justify-around ">
              <button
                type="reset"
                onClick={() => setSubmit(!subit)}
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
export default Registeration;
