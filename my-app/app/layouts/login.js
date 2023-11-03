"use client";
import Header from "../components/header";
import MainFooter from "../components/Footer";
import { useState } from "react";
import handleLogin from "../lib/handleLogin";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import validateCookie from "../lib/validateCookie";

const Login = () => {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const loginData = {
    email: email,
    password: password,
  };
  const [showResult, setShowResult] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const validateCookieResult = await validateCookie();
        if (validateCookieResult) {
          router.push("/profile");
        } else {
          setShowLogin(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  if (!showLogin) {
    // remember to add animation
    return <h1>LOADING....</h1>;
  }

  if (showLogin) {
    return (
      <>
        <Header />
        <main className="flex justify-center mb-[10rem]">
          <section>
            <h1 className="font-bold text-big pt-[15rem] w-full">Login :</h1>

            <form
              onSubmit={async (event) => {
                event.preventDefault();
                const handleLoginResult = await handleLogin(loginData);
                if (handleLoginResult.data) {
                  setShowResult(true);
                  router.push("/profile");
                } else {
                  setShowResult(false);
                }
              }}
              className="border p-small rounded"
            >
              <div className="flex justify-between">
                <label className="block font-bold">Email</label>

                <i
                  className={`${
                    showResult
                      ? "block text-[green]"
                      : "" || showResult === false
                      ? "block text-[red]"
                      : "" || showResult === null
                      ? "hidden"
                      : ""
                  }`}
                >
                  {showResult ? "Success: logging in..." : "Error: Try Again"}
                </i>
              </div>
              <input
                className="block rounded py-3 px-2"
                placeholder="Enter Email"
                onChange={(event) => setEmail(event.target.value)}
                type="email"
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
                  type="submit"
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
  }
};
export default Login;
