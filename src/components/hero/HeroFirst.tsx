"use client";

import Image from "next/image";
import { IoArrowForwardCircle } from "react-icons/io5";
import { motion } from "framer-motion";
import { heroVariants } from "@/utils/motion";

const HeroFirst = () => {
  return (
    <section className="flex h-[50vh] w-full gap-6">
      <motion.div
        variants={heroVariants("left", "50%", "-10%", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 flex w-[85%] items-center justify-center gap-32 rounded-3xl bg-text-primary text-bg-dark
      "
      >
        <div className="relative flex flex-col gap-5 text-center">
          <h1 className="relative z-10 font-gems text-[5rem] leading-[70px] tracking-wide">
            DIGITAL <br /> BOOM
            <span className="absolute bottom-6 right-[-60px] flex font-uncut text-xs font-semibold">
              <p className="absolute bottom-[7px] right-[65px] h-[1px] w-7 bg-bg-dark after:absolute after:-right-[2px] after:-top-[1.4px] after:h-[5px] after:w-[5px] after:rotate-45 after:bg-bg-light"></p>
              FUTURE
            </span>
          </h1>
          <p className="text-md relative z-10 font-semibold text-bg-light">
            Physical Asset-Based NFTs
          </p>
          <Image
            src={"/images/man4.png"}
            width={70}
            height={100}
            alt="image"
            className="absolute -left-0 top-[66px] z-0 -rotate-[10deg]"
          />
        </div>
        <div className="relative min-w-[200px]">
          <div className="absolute -left-[50px] top-12 z-20 h-40 w-40 rounded-full bg-primary mix-blend-multiply blur-2xl"></div>
          <div className="absolute -right-[30px] top-10 z-20 h-40 w-40 rounded-full bg-blue-300 mix-blend-multiply blur-2xl"></div>
          <Image
            alt="hero_image"
            src={"/images/man2.jpg"}
            width={250}
            height={100}
            priority
            className="relative z-10  h-full rounded-full p-3 brightness-105"
          />
        </div>
      </motion.div>
      <motion.div
        variants={heroVariants("right", "50%", "-10%", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative flex w-[14%] flex-col items-center justify-between rounded-3xl bg-secondary p-3"
      >
        <IoArrowForwardCircle
          fontSize={70}
          className="absolute top-3 cursor-pointer"
        />
        <h1 className="absolute bottom-32 -rotate-90 whitespace-nowrap font-gems text-[1.2rem]">
          JOIN COMMUNITY
        </h1>
      </motion.div>
    </section>
  );
};

export default HeroFirst;
