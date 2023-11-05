import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    display: "block",

    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    transitionEnd: { display: "none" },
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({
  text,
  toggle,
}: {
  text: string;
  toggle: React.MouseEventHandler;
}) => {
  return (
    <motion.li
      className="m-2 flex list-none"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
    >
      <Link
        href={`/${text.toLowerCase()}`}
        className=" z-300 w-26 border-2 border-solid font-poorStory text-2xl font-extrabold  text-[#101010]"
      >
        {text}
      </Link>
    </motion.li>
  );
};
