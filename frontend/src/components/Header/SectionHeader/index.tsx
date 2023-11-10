import MoreArrowButton from "@/components/ui/button/MoreArrowButton";
import Title from "@/components/ui/text/Title";
import React from "react";

export default function SectionHeader({
  title,
  linkHref,
}: {
  title: string;
  linkHref?: string;
}) {
  return (
    <div className="flex w-full justify-between mb-6">
      <Title title={title} />
      <MoreArrowButton linkHref={linkHref} />
    </div>
  );
}
