"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface LinkType {
  id: string;
  label: string;
}

const NavLinks = () => {
  const links: LinkType[] = [
    { id: "about", label: "ABOUT" },
    { id: "collections", label: "COLLECTIONS" },
    { id: "products", label: "PRODUCTS" },
    { id: "blog", label: "BLOG" },
  ];

  const [activeLink, setActiveLink] = useState(links[0].id);

  return (
    <ul className="lg:gap-8 flex text-text-primary">
      {links.map((link) => (
        <li
          key={link.id}
          onClick={() => setActiveLink(link.id)}
          className={`${
            activeLink === link.id ? "" : "hover:text-text-primary/50"
          } lg:text-sm relative cursor-pointer p-2 px-3 text-xs text-text-primary transition`}
        >
          {activeLink === link.id && (
            <motion.div
              layoutId="active-link"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="absolute inset-0 bg-text-primary"
            />
          )}
          <span className="relative z-10 mix-blend-exclusion ">
            {link.label}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
