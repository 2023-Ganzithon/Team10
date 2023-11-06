import React from "react";

export default function SectionContainer({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${className} bg-white mx-[17px] rounded-[29px]`}>
      {children}
    </div>
  );
}
