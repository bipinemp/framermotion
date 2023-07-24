"use client";

import { NavContext } from "@/context/NavContext";
import { useContext } from "react";

interface LinkType {
  id: string;
  label: string;
}

const NavMenu = () => {
  const { navMenu } = useContext(NavContext);

  const links: LinkType[] = [
    { id: "about", label: "ABOUT" },
    { id: "collections", label: "COLLECTIONS" },
    { id: "products", label: "PRODUCTS" },
    { id: "blog", label: "BLOG" },
  ];

  return (
    <div
      className={`${
        navMenu ? "h-[20vh]" : "h-0"
      } absolute inset-x-0 z-20 bg-bg-light p-2 transition-all duration-300 ease-in`}
    >
      <hr className="mb-3 border-white/20" />
      <div
        className={`${
          navMenu ? "h-[20vh]" : "h-0"
        } mb-7 flex flex-col  transition-all duration-300 ease-in`}
      >
        {links.map((link) => (
          <span key={link.id}>{link.label}</span>
        ))}
      </div>
    </div>
  );
};

export default NavMenu;
