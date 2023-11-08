import MoreButton from "@/components/ui/button/MoreButton";
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
      <MoreButton linkHref={linkHref} />
    </div>
  );
}
