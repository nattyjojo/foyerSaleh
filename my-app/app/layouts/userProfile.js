"use client";

import ListLink from "./dropDownMenu";

import Image from "next/image";

const UserProfileLayout = (children) => {
  return (
    <main className="my-[6rem] flex gap-smallest justify-between px-smallest">
      <section className="border rounded text-center p-smallest w-[30%]">
        {/* <Image
          className="rounded-full bg-white border mb-smallest ml-[40%]"
          width={100}
          height={100}
          src={children.picture}
          alt={children.name}
        ></Image> */}

        <ul>
          <li className="font-bold">
            <span className="font-light">Name: </span>
            {children.name}
          </li>
          <li className="font-bold ">
            <span className="font-light">Email: </span>
            {children.email}
          </li>
        </ul>

        <p className="text-red-500 ">
          Orange Card Expires in 20 days from today
        </p>
        <input type="datetime-local"></input>
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
