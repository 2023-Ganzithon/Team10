import React from "react";
import SocialIcon from "@/components/ui/icon/SocialIcon";
import EnvironmentIcon from "@/components/ui/icon/EnvironmentIcon";
import StructureIcon from "@/components/ui/icon/structureIcon";
import EsgIcon from "@/components/ui/icon/EsgIcon";

export default function Emotion({ number }: { number: number }) {

  const iconSection = () => {
    if (number <= 2) {
      return <SocialIcon />;
    } else if (number <= 5) {
      return <EnvironmentIcon />;
    } else if (number <= 8) {
      return <StructureIcon />;
    } else {
      return <EsgIcon />;
    }
  };

  return (
    <div className=" rounded-full flex justify-center items-center w-[184px] h-[184px] bg-buttonBackgroundColor my-4">
      {iconSection()}
    </div>
  );
}
