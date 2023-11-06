import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-Pretendard-Regular m-0 p-0`}>
        <div className=" top-0 bottom-0 right-0 left-0 fixed bg-outerBackgroundColor">
          <div className=" h-full w-full max-h-full flex justify-center">
            <div className="  bg-backGroundColor  max-w-[450px] w-full h-full overflow-y-auto overflow-x-hidden text-[26px] ">
              <Header />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
