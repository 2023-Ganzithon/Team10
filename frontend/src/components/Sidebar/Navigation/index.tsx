import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./Item";
import { NavigationItems } from "@/constants/sidebar";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggle }: { toggle: React.MouseEventHandler }) => (
  <motion.ul
    variants={variants}
    className={`absolute flex flex-col w-full text-[16px] top-24 gap-4 items-center `}
  >
    {NavigationItems.map(({ title, href }) => (
      <MenuItem text={title} key={title} href={href} toggle={toggle} />
    ))}
  </motion.ul>
);
