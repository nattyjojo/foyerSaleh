"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import ListLink from "../layouts/dropDownMenu";
import { CgClose } from "react-icons/cg";

import { useState } from "react";
import { redirect, usePathname } from "next/navigation";

const HamburgerButton = (children) => {
  const currentPath = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const dropDownMenustyle =
    " bg-[#292626] bg-[rgba(0,0,0,1)]  border font-bold flex flex-col justify-center  text-center text-big left-0 absolute w-[100vw] h-[100vh] top-20 rounded px-smallest";
  const normalMenuStyle = "flex justify-between ";
  const handleButton = () => {
    setIsVisible(!isVisible);
  };

  // Call the login function to initiate the login process
  // onClick={() => handleButton()}
  return (
    <div className="z-10  font-bold">
      <button className="text-small sm:hidden">
        {isVisible ? <GiHamburgerMenu /> : <CgClose />}
      </button>

      <ul className={isVisible ? "hidden" : dropDownMenustyle}>
        <ListLink
          href={"/blog"}
          content={"BLOG"}
          border={currentPath === "/blog" ? "border-b text-blue-500 " : " "}
        />

        <ListLink
          href={"/contact"}
          content={"Contact"}
          border={currentPath === "/contact" ? "border-b text-blue-500 " : " "}
        />

        <ListLink
          href={"/about"}
          content={"About"}
          border={currentPath === "/about" ? "border-b text-blue-500 " : ""}
        />
        <ListLink
          href={"/login"}
          content={"Login"}
          border={currentPath === "/login" ? "border-b text-blue-500 " : " "}
        />
        <ListLink
          href={"/register"}
          content={"Register"}
          border={currentPath === "/register" ? "border-b text-blue-500 " : " "}
        />
      </ul>
      <ul className="hidden sm:flex ">
        <ListLink
          href={"/blog"}
          content={"BLOG"}
          border={currentPath === "/blog" ? "border-b text-blue-500 " : " "}
        />
        <ListLink
          href={"/contact"}
          content={"Contact"}
          border={currentPath === "/contact" ? "border-b text-blue-500 " : " "}
        />
        <ListLink
          href={"/about"}
          content={"About"}
          border={currentPath === "/about" ? "border-b text-blue-500 " : " "}
        />
        <ListLink
          href={"/login"}
          content={"Login"}
          border={currentPath === "/login" ? "border-b text-blue-500 " : ""}
        />

        <ListLink
          href={"/register"}
          content={"Register"}
          border={currentPath === "/register" ? "border-b text-blue-500 " : ""}
        />
      </ul>
    </div>
  );
};
export default HamburgerButton;
