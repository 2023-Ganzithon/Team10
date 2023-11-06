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
  href,
  toggle,
}: {
  text: string;
  href: string;
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
      <Link href={href} className=" w-full border-solid  text-[#101010]">
        {text}
      </Link>
    </motion.li>
  );
};
