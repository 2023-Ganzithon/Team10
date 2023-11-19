import MoreArrowButton from "@/components/ui/button/MoreArrowButton";
import Title from "@/components/ui/text/Title";
import React from "react";

export default function SectionHeader({
  title,
  linkHref,
  isMore = true,
}: {
  title: string;
  linkHref?: string;
  isMore?: boolean;
}) {
  return (
    <div className="flex w-full justify-between mb-6">
      <Title title={title} />
      {isMore && <MoreArrowButton linkHref={linkHref} />}
    </div>
  );
}
