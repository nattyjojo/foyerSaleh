"use client";
import Header from "../components/header";
import MainFooter from "../components/Footer";
import ListLink from "./dropDownMenu";

import Image from "next/image";
const UserProfileLayout = (children) => {
  return (
    <main className="pt-[15rem] flex gap-smallest justify-between px-smallest">
      <section className="border w-[30%]">
        <div className="p-big rounded-full bg-white">
          {/* <Image width={100} height={100} src={children.src} alt="img"></Image> */}
        </div>
        <h1 className="font-bold">Mike James</h1>
        <p>Orange Card Expires in 20 days from today</p>

        <div className="flex justify-around ">
          <button
            type="reset"
            // onClick={() => setSubmit(!subit)}
            className="border mt-small w-[40%] font-bold rounded px-smallest py-2 text-blue-500 hover:text-inherit hover:bg-blue-900"
          >
            Edit Profile
          </button>
        </div>
      </section>
      <section className="w-[70%]">
        <ul className="font-bold bg-slate-600 py-smallest px-2 rounded text-[green] flex justify-between">
          <ListLink href={"/anouncement"} content={"Anouncement"} />
          <ListLink href={"/anouncement"} content={"Message"} />
          <ListLink href={"/anouncement"} content={"Exit"} />
        </ul>
      </section>
    </main>
  );
};
export default UserProfileLayout;
