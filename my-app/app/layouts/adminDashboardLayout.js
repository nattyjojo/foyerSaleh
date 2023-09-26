"use client";
import Header from "../components/header";
import MainFooter from "../components/Footer";
import ListLink from "./dropDownMenu";
import Image from "next/image";
import { useRef } from "react";
import { useState } from "react";

import { FaBold, FaLink, FaImages, FaHeading } from "react-icons/fa6";
import { GrBlockQuote } from "react-icons/gr";
import { MdFormatListNumbered, MdFormatListBulleted } from "react-icons/md";
import { RiEmphasis } from "react-icons/ri";

const AddminDashBoardLayout = (children) => {
  const [currentTask, setCurrentTask] = useState();
  const [tittle, setTittle] = useState();
  const textAreaValue = useRef();
  const handleTextFormat = (event) => {
    const target = event.target.id;
    const heading = event.target.value;
    if (heading) {
      switch (heading) {
        case "h1":
          textAreaValue.current.value += "<h1></h1>";
          break;
        case "h2":
          textAreaValue.current.value += "<h2></h2>";
          break;
        case "h3":
          textAreaValue.current.value += "<h3></h3>";
          break;
        case "h4":
          textAreaValue.current.value += "<h4></h4>";
          break;
        case "h5":
          textAreaValue.current.value += "<h5></h5>";
          break;
        case "h6":
          textAreaValue.current.value += "<h6></h6>";
          break;
        default:
          return;
      }
    } else {
      switch (target) {
        case "bold":
          textAreaValue.current.value += '<i className="font-bold></i>';
          break;
        case "emphasis":
          textAreaValue.current.value += '<i className="font-bold></i>';
          break;
        case "link":
          textAreaValue.current.value += '<a href=""></a>';
          break;
        case "blockquote":
          textAreaValue.current.value += "<blockquote></blockquote>";
          break;
        ////   need attention
        case "imageUpload":
          textAreaValue.current.value += "<blockquote></blockquote>";
          break;
        case "numberedList":
          textAreaValue.current.value += "<ul><ol></ol></ul>";
          break;
        case "bulletedList":
          textAreaValue.current.value += "<ul><li></li></ul>";
          break;
        case "paragraph":
          textAreaValue.current.value += "<p></p>";
          break;

        default:
          return;
      }
    }
  };
  const buttonStyle =
    "border mt-small w-[20%] font-bold rounded px-smallest py-2 text-blue-500 hover:text-inherit hover:bg-blue-900";
  return (
    <main className="pt-[15rem] flex gap-smallest justify-between px-smallest">
      <section className="border w-[30%]">
        <div className="p-big rounded-full bg-white">
          {/* <Image width={100} height={100} src={children.src} alt="img"></Image> */}
        </div>
        <h1 className="font-bold">Mike James</h1>
        <p>Orange Card Expires in 20 days from today</p>
      </section>
      <section className="w-[70%]">
        <ul
          onClick={(event) => setCurrentTask(event.target.id)}
          className="font-bold bg-slate-600 py-smallest px-2 rounded text-[green] flex justify-between"
        >
          <button
            id={"post"}
            className={
              buttonStyle +
              ` ${
                currentTask === "post"
                  ? "underline bg-blue-900 text-[green]"
                  : ""
              }`
            }
          >
            Create Post
          </button>
          <button
            id={"aunousment"}
            className={
              buttonStyle +
              ` ${currentTask === "aunousment" ? "underline bg-blue-900" : ""}`
            }
          >
            Create Aunousment
          </button>
          <button
            id={"residents"}
            className={
              buttonStyle +
              ` ${currentTask === "residents" ? "underline bg-blue-900" : ""}`
            }
          >
            View Residents
          </button>
          <button
            id={"listPosts"}
            className={
              buttonStyle +
              ` ${currentTask === "listPosts" ? "underline bg-blue-900" : ""}`
            }
          >
            View Posts
          </button>
          <button
            id={"viewAnouncements"}
            className={
              buttonStyle +
              ` ${
                currentTask === "viewAnouncements"
                  ? "underline bg-blue-900"
                  : ""
              }`
            }
          >
            View Aunousment
          </button>
        </ul>

        <section
          className={` ${
            currentTask === "post" || currentTask === "aunousment"
              ? "block"
              : "hidden"
          }`}
        >
          <input
            onChange={(event) => setTittle(event.target.value)}
            className="flex justify-around text-center py-2 px-3 font-bold"
            type="text"
            placeholder="Enter Tittle"
          ></input>
          <ul
            className="flex mt-small"
            onClick={(event) => handleTextFormat(event)}
          >
            <li title="Bold">
              <button id="bold" className="border py-2 bold  px-smallest">
                <FaBold id={"bold"} />
              </button>
            </li>
            <li title="Emphasis">
              <button className=" border py-2 bold  px-smallest">
                <RiEmphasis id={"emphasis"} />
              </button>
            </li>
            <li title="Link">
              <button className=" border py-2 bold  px-smallest">
                <FaLink id={"link"} />
              </button>
            </li>
            <li title="BlockQuote">
              <button className=" border py-2 bold  px-smallest">
                <GrBlockQuote id={"blockquote"} />
              </button>
            </li>

            <li title="Numbered List">
              <button className=" border py-2 bold  px-smallest">
                <MdFormatListNumbered id={"numberedList"} />
              </button>
            </li>
            <li title="Bulleted List">
              <button className=" border py-2 bold  px-smallest">
                <MdFormatListBulleted id={"bulletedList"} />
              </button>
            </li>
            <li title="Heading">
              <select id="heading" className=" p-1 bg-black ">
                <option id={"h1"} value={"h1"}>
                  H1
                </option>
                <option id={"h2"} value={"h2"}>
                  H2
                </option>
                <option value={"h3"}>H3</option>
                <option value={"h4"}>H4</option>
                <option value={"h5"}>H5</option>
                <option value={"h6"}>H6</option>
              </select>
            </li>
            <li title="Bulleted List">
              <button className=" border py-2 bold  px-smallest">
                <MdFormatListBulleted id={"paragraph"} />
              </button>
            </li>
            <li className="border  font-bold rounded px-6 py-1 text-blue-500 hover:text-inherit hover:bg-blue-900">
              <button>Publish</button>
            </li>
          </ul>
          <div>
            <textarea
              ref={textAreaValue}
              className="w-[100%] border h-[50vh]"
            ></textarea>
            <li title="Upload Image" className="border-l border-b border-r ">
              <input type="file" id="img" name="img" accept="image/*"></input>
            </li>
          </div>
        </section>
      </section>
    </main>
  );
};
export default AddminDashBoardLayout;
