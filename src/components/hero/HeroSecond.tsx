"use client";

import Image from "next/image";
import { PiCodesandboxLogoBold } from "react-icons/pi";
import { motion } from "framer-motion";
import { heroVariants, shapesVariants } from "@/utils/motion";

const HeroSecond = () => {
  return (
    <section className="flex gap-20">
      <div className="flex w-[45%] flex-col items-center justify-between">
        <div className="relative flex w-full items-center justify-center bg-bg-dark">
          <motion.div
            variants={heroVariants("right", "-30%", "50%", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Image
              src={"/images/bg2.png"}
              width={200}
              height={100}
              alt="model_pic"
              className="relative z-10 brightness-110"
            />
          </motion.div>
          <motion.div
            variants={heroVariants("right", "-10%", "50%", 0, 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="absolute left-0 top-5 flex flex-col gap-1 text-lg tracking-wide"
          >
            <span>Physical items</span>
            <span className="font-bold">paired with NFTs</span>
          </motion.div>
          <span className="absolute -bottom-12 z-0 h-40 w-40 rounded-full bg-bg-dark mix-blend-saturation blur-2xl"></span>
        </div>
        <motion.div
          variants={heroVariants("right", "-10%", "50%", 0, 0.9)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="z-20 flex w-full justify-between rounded-2xl bg-primary px-6 py-6 text-bg-dark"
        >
          <div className="flex flex-col justify-between gap-10 font-bold">
            <h1 className="flex items-center gap-2 text-sm font-black">
              <PiCodesandboxLogoBold
                size={40}
                fill="white"
                className="rounded-xl bg-bg-dark p-2"
              />
              FASHION HOUSE
            </h1>
            <h1 className="text-2xl font-black tracking-tight">
              Unique Products
            </h1>
          </div>
          <div className="flex items-end">
            <p className="text-md font-medium leading-6 text-bg-light">
              We represent the <br /> confluence of the digital <br /> and
              physical worlds in the <br /> fashion world
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex w-[53%] flex-col justify-between gap-7">
        <motion.span
          variants={shapesVariants}
          initial="hidden"
          animate="show"
          className="absolute top-[49vh] z-0 ml-40 h-14 w-10 bg-text-primary before:absolute before:-left-[37px] before:top-[3px] before:h-12 before:w-12 before:rounded-full before:bg-bg-dark after:absolute after:left-[25px] after:top-[2px] after:h-12 after:w-12 after:rounded-full after:bg-bg-dark"
        ></motion.span>
        <motion.div
          variants={heroVariants("left", "-10%", "50%", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 flex h-[35vh] w-full justify-between gap-6 rounded-3xl bg-text-primary px-10 pb-10 pt-10 text-bg-dark"
        >
          <div className="flex w-[40%] flex-col justify-between">
            <div>
              <button className="rounded-full border-[2px] border-bg-dark px-4 py-2 text-sm font-bold">
                NEW GEN WORLD
              </button>
            </div>
            <h1 className="text-[5rem] font-bold leading-10 tracking-wider">
              01
            </h1>
          </div>
          <div className="flex w-[55%] flex-col justify-between">
            <div>
              <p className="text-xl font-medium text-bg-light">
                New standard by attaching physical products
                <span className="font-extrabold">
                  {" "}
                  to unique digital assets
                </span>
              </p>
            </div>
            <div className="relative flex items-end gap-3">
              <div className="flex flex-row-reverse -space-x-4 space-x-reverse">
                <Image
                  src={"/images/user1.jpg"}
                  width={50}
                  height={40}
                  alt="user_picture"
                  className="rounded-[50%] object-cover object-center"
                />
                <Image
                  src={"/images/user2.jpg"}
                  width={50}
                  height={40}
                  alt="user_picture"
                  className="rounded-[50%] object-cover object-center"
                />
                <Image
                  src={"/images/user3.jpg"}
                  width={50}
                  height={40}
                  alt="user_picture"
                  className="rounded-[50%] object-cover object-center"
                />
              </div>
              <div className="font-semibold">
                <p className="text-sm">
                  LET'S JOIN <br />
                  OUR COMMUNITY
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-5">
          <motion.div
            variants={heroVariants("left", "-10%", "50%", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center justify-between rounded-3xl border-[1px] border-text-primary px-10 py-3"
          >
            <div className="flex items-center gap-3">
              <span className="block h-3 w-3 rounded-full bg-text-primary"></span>
              <p>
                We create the fashion <br /> of the future
              </p>
            </div>
            <div>
              <p>23.09.2022</p>
            </div>
            <div className="flex gap-[5px]">
              <PiCodesandboxLogoBold
                size={50}
                className="rounded-full border-[1px] border-primary bg-primary fill-bg-dark p-2"
              />
              <span className="flex items-center rounded-full border-[1px] border-text-primary px-4">
                {"->"}
              </span>
            </div>
          </motion.div>
          <motion.div
            variants={heroVariants("left", "-10%", "50%", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative flex items-center justify-between rounded-3xl border-[2px] border-primary px-10 py-3 before:absolute before:-left-[85px] before:h-[3px] before:w-[5.2rem] before:bg-primary"
          >
            <div className="flex items-center gap-3">
              <span className="block h-3 w-3 rounded-full bg-text-secondary"></span>
              <p>
                Collab with IRL artists <br /> & digital creators.
              </p>
            </div>
            <div>
              <p>17.09.2022</p>
            </div>
            <div>
              <button className="rounded-3xl bg-ternary px-7 py-1 font-bold text-bg-dark">
                DETAILS
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSecond;
