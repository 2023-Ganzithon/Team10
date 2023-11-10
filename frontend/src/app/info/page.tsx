import React from 'react';
import Logo from "../info/Logo.png";
import SectionContainer from "../../components/ui/SectionContainer";

import ResearchIcon from "@/components/ui/icon/ResearchIcon";

export default function page() {
  return (
    <>

      <SectionContainer className='p-8'>
        {/* <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 px-4 py-10 bg-white rounded-[29px]"> */}


        < div className="flex relative w-full pt-4 pb-4">
          <div className="undefined flex px-4 w-[287px] h-[74px] 
            text-[23px] text-zinc font-semibold font-Pretendard">
            ESG란 무엇일까요?</div>
        </div>
        {/* text-zinc-900 */}
        <div className="flex justify-around
        text-zinc text-sm font-medium font-['Pretendard']">

          <div className="w-[90px] h-[90px] bg-gray rounded-full flex justify-center items-center">
            <p>환경</p>
          </div>

          <div className="w-[90px] h-[90px] bg-gray rounded-full flex justify-center items-center ">
            <p>사회</p>
          </div>

          <div className="w-[90px] h-[90px] bg-gray rounded-full flex justify-center items-center">
            <p>지배구조</p>
          </div>

        </div>

        <div className="flex w-full justify-center items-center pt-4 pb-4">
          <p className="undefined flex  w-[338px] 
           text-black text-sm font-light font-['Pretendard'] leading-[30.27px] text-justify">
            ESG는 Environmental(환경), Social(사회), Governance(지배구조)의 첫 글자를 조합한 단어로 기업의 친환경 경영, 사회적 책임, 투명한 지배구조 등을 의미합니다. 실질적인 ESG는 기업이 ‘지속가능한’ 비즈니스를 달성하기 위한 세 가지 핵심 요소로, 재무제표에는 직접적으로 보이지 않아도 기업의 중장기 기업가치에 막대한 영향을 주는 비재무적 지표로 정의할 수 있습니다. ESG의 숨은 핵심 키워드는 바로 기업의 지속가능성, 기업가치, 그리고 비재무적 성과지표입니다.
          </p>
        </div>

        <div className="w-[362px] h-[0px] border border-gray"></div>

        < div className="flex relative w-full items-end justify-between pt-4 pb-4">
          <div className="undefined flex px-4 w-full
          text-zinc text-[23px] font-semibold font-['Pretendard']">
            미쓱(Mesg)의 서비스 목적</div>
        </div>

        <div className='mx-auto max-w-7xl flex justify-center items-center sm:px-6 lg:px-8'>
          <div className="w-[122.90px] h-[122.90px] bg-gray rounded-full 
        flex justify-center items-center">
            <img src={Logo.src} alt="MeSSG_Logo" />
          </div>

        </div>


        <div className="flex w-full  justify-center items-center pt-4 pb-4">
          <p className="undefined flex w-[338px] 
           text-black text-sm font-light font-['Pretendard'] leading-[30.27px] text-justify">
            미쓱(Mesg)은 지속 가능한 미래를 위해 투자하는 똑똑한 투자자들을 위한 서비스를 제공합니다. 미래 투자자들의 성장에 대한 기대와 더불어 사회, 환경, 지배구조의 균형을 위한 기업의 방향성을 제시하기 위해 시작되었습니다.
          </p>
        </div>

      </SectionContainer>
    </>

  )
}
