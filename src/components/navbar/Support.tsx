"use client";

import { IoMdMail } from "react-icons/io";

const Support = () => {
  return (
    <div className="flex items-center">
      <button className="sm:block lg:text-sm z-10 rounded-full border-[1.6px] border-primary bg-bg-dark px-4 py-1 text-xs outline-none">
        SUPPORT
      </button>
      <span
        className="lg:w-14 relative   h-1 w-4 bg-primary before:absolute before:-left-[5px] before:-top-[2px] before:h-2 before:w-2 before:rotate-45 before:bg-primary
       after:absolute after:-right-[5px] after:-top-[2px] after:h-2 after:w-2 after:rotate-45 after:bg-primary"
      ></span>
      <span className="lg:p-2 rounded-full bg-primary p-1">
        <IoMdMail size={18} color="black" />
      </span>
    </div>
  );
};

export default Support;
