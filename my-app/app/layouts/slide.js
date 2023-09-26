import { FcNext, FcPrevious } from "react-icons/fc";
import Image from "next/image";
const Slide = (anuonsment) => {
  return (
    <div className=" relative text-white">
      <button className="z-1 p-smallest rounded-full border  absolute left-0 top-[45%]">
        <FcPrevious />
      </button>
      <section>
        {
          <h2>New Anounsments</h2>
          /* display annousment here */
        }
      </section>
      <button
        className=" p-smallest z-1 rounded-full border 
       absolute right-0 top-[45%]"
      >
        <FcNext />
      </button>
    </div>
  );
};
export default Slide;
