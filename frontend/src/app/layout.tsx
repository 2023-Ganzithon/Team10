import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Provider from "./provider";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Mesg",
  description: "쓱-하고 보는 나의 ESG 정보",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/frontend/public/images/Logo.png" />
      </Head>
      <body className={`font-Pretendard-Regular m-0 p-0`}>
        <div className=" top-0 bottom-0 right-0 left-0 fixed bg-outerBackgroundColor">
          <div className=" h-full w-full max-h-full flex justify-center">
            <div className="  bg-backGroundColor  max-w-[450px] w-full h-full overflow-y-auto overflow-x-hidden text-[26px] ">
              <Header />
              <Provider>{children}</Provider>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
