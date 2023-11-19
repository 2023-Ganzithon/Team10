"use client";
import * as React from "react";
import { motion, useCycle } from "framer-motion";
import { Navigation } from "./Navigation";
import { SidebarToggle } from "./SidebarToggle";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 79% 6%)`,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0.1px at 79% 6%)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <motion.div
        className={`absolute z-40 bottom-0 left-0 top-0 hidden h-screen w-screen bg-black bg-opacity-70 backdrop-blur-[10px]`}
        animate={
          isOpen
            ? {
                display: "flex",
              }
            : {
                display: "none",
              }
        }
        onClick={() => toggleOpen()}
      />
      <motion.nav
        className={`flex items-center `}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div
          className="z-40 absolute bottom-0 right-0 top-0 h-screen w-[196px]  bg-white border-l-[25px] border-brandColor"
          variants={sidebar}
        >
          <Navigation toggle={() => toggleOpen()} />
        </motion.div>
        <SidebarToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  );
};
