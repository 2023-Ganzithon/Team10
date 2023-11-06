import * as React from "react";
import { motion } from "framer-motion";

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    transition={{ duration: 0.2 }}
    {...props}
  />
);
export const SidebarToggle = ({
  toggle,
}: {
  toggle: React.MouseEventHandler;
}) => {
  return (
    <button
      onClick={toggle}
      className="absolute right-4 top-8 flex items-center justify-center rounded-full bg-transparent"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: {
              d: "M2 2H24.6338",
              stroke: "#B1B8C0",
            },
            open: { d: "M 3 16.5 L 17 2.5", stroke: "#101010" },
          }}
        />
        <Path
          d="M2.00024 10.0769H24.634"
          variants={{
            closed: { opacity: 1, stroke: "#B1B8C0" },
            open: { opacity: 0 },
          }}
        />
        <Path
          variants={{
            closed: { d: "M2.00024 19.0509H24.634", stroke: "#B1B8C0" },
            open: { d: "M 3 2.5 L 17 16.346", stroke: "#101010" },
          }}
        />
      </svg>
    </button>
  );
};
