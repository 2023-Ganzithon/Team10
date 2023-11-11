"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useGetSurveyResult from "@/hooks/queries/useGetSurveyResult";

export default function SubmitButton() {
  const router = useRouter();
  // const [social_total, setSocialTotal] = useState(0);
  // const [env_total, setEnvTotal] = useState(0);
  // const [gov_total, setGovTotal] = useState(0);
  // const [total, setTotal] = useState(0);
  // useEffect(() => {
  //   const one = parseInt(localStorage.getItem("0") || "4");
  //   const two = parseInt(localStorage.getItem("1") || "4");
  //   const three = parseInt(localStorage.getItem("2") || "4");
  //   setSocialTotal(one + two + three);
  //   const four = parseInt(localStorage.getItem("3") || "4");
  //   const five = parseInt(localStorage.getItem("4") || "4");
  //   const six = parseInt(localStorage.getItem("5") || "4");
  //   setEnvTotal(four + five + six);
  //   const seven = parseInt(localStorage.getItem("6") || "4");
  //   const eight = parseInt(localStorage.getItem("7") || "4");
  //   const nine = parseInt(localStorage.getItem("8") || "4");
  //   setGovTotal(seven + eight + nine);
  //   const ten = parseInt(localStorage.getItem("9") || "4");
  //   const eleven = parseInt(localStorage.getItem("10") || "4");
  //   const twelve = parseInt(localStorage.getItem("11") || "4");
  //   const thirteen = parseInt(localStorage.getItem("12") || "4");
  //   const fourteen = parseInt(localStorage.getItem("13") || "4");
  //   setTotal(ten + eleven + twelve + thirteen + fourteen);
  // }, []);
  const { data, mutate } = useGetSurveyResult();
  const handleOnClick = () => {
    const one = parseInt(localStorage.getItem("0") || "4");
    const two = parseInt(localStorage.getItem("1") || "4");
    const three = parseInt(localStorage.getItem("2") || "4");
    // setSocialTotal(one + two + three);
    const social_total = one + two + three;
    localStorage.setItem("사회", social_total.toString());
    const four = parseInt(localStorage.getItem("3") || "4");
    const five = parseInt(localStorage.getItem("4") || "4");
    const six = parseInt(localStorage.getItem("5") || "4");
    // setEnvTotal(four + five + six);
    const env_total = four + five + six;
    localStorage.setItem("환경", env_total.toString());
    const seven = parseInt(localStorage.getItem("6") || "4");
    const eight = parseInt(localStorage.getItem("7") || "4");
    const nine = parseInt(localStorage.getItem("8") || "4");
    // setGovTotal(seven + eight + nine);
    const gov_total = seven + eight + nine;
    localStorage.setItem("지배구조", gov_total.toString());
    const ten = parseInt(localStorage.getItem("9") || "4");
    const eleven = parseInt(localStorage.getItem("10") || "4");
    const twelve = parseInt(localStorage.getItem("11") || "4");
    const thirteen = parseInt(localStorage.getItem("12") || "4");
    const fourteen = parseInt(localStorage.getItem("13") || "4");

    const total = ten + eleven + twelve + thirteen + fourteen;
    localStorage.setItem("종합", total.toString());
    router.push("/result");
  };
  return (
    <>
      <button
        onClick={handleOnClick}
        className="mt-4 h-8 w-full text-[17px] font-medium  text-white rounded-[7px] bg-brandColor "
      >
        유형 분석하기
      </button>
    </>
  );
}
