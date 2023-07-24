"use client";

import { navVariants } from "@/utils/motion";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Support from "./Support";
import { motion } from "framer-motion";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-50 flex flex-row items-center justify-between bg-bg-dark py-6"
      >
        <Logo />
        <NavLinks />
        <Support />
      </motion.nav>
    </>
  );
};

export default Navbar;
