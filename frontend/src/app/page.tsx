import MainLogo from "@/components/ui/MainLogo";
import SectionContainer from "../components/ui/SectionContainer";
import LeafIcon from "../components/ui/icon/LeafIcon";
import { Sidebar } from "@/components/Sidebar";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <SectionContainer className=" p-4">안녕하세요</SectionContainer>
      <LeafIcon />
      <MainLogo />
    </div>
  );
}
