"use client";
import Image from "next/image";
import { useState } from "react";
const Card = () => {
  const [displayContent, setDisplayContent] = useState(false);
  const dropDownMenustyle =
    " bg-[#292626] bg-[rgba(0,0,0,1)]   font-bold flex flex-col justify-center  text-center text-big left-0 absolute w-[100vw] h-[100vh] top-20 rounded px-smallest";
  const normalMenuStyle =
    "border p-smallest block text-center rounded shadow-md";
  const handleDisplay = () => {};
  return (
    <main
      onClick={() => setDisplayContent(!displayContent)}
      className={`${normalMenuStyle} ${
        displayContent ? dropDownMenustyle : ""
      } mb-4 md:mb-0`}
    >
      <div>
        <h1 className="font-bold">Title</h1>
        {/* <Image src={""} alt="im" width={100} height={100} /> */}
      </div>
      <div className="flex justify-between font-bold text-[.70rem]">
        <p>time posted</p>
        <p>Posted By </p>
      </div>
      <p>Resident new Post </p>
    </main>
  );
};
export default Card;
