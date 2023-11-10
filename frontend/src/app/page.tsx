import SectionContainer from "../components/ui/SectionContainer";


export default function Home() {
  return (
    <div>

      <SectionContainer className=" p-8">

        <div className="flex w-full justify-between mb-6" >
          <div className="text-zinc text-[23px] font-semibold font-['Pretendard']">ESG란?</div>

          <div className="flex justify-center items-center w-[2.125rem] h-[2.125rem] rounded-full bg-buttonBackgroundColor">
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M14.985 6.04071C15.2315 5.79413 15.2315 5.39435 14.985 5.14777L10.9668 1.12956C10.7202 0.882983 10.3204 0.882983 10.0738 1.12956C9.82725 1.37614 9.82725 1.77592 10.0738 2.0225L13.6456 5.59424L10.0738 9.16598C9.82725 9.41256 9.82725 9.81234 10.0738 10.0589C10.3204 10.3055 10.7202 10.3055 10.9668 10.0589L14.985 6.04071ZM0.425293 6.22564H14.5385V4.96284H0.425293V6.22564Z" fill="#191919"></path></svg>
          </div>

          {/* <a href="frontend\src\app\info\page.tsx"></a> */}

        </div>

        <div className="w-5 h-[0px] border-2 border-teal-500 bg-brandColor mt-10"></div>

        <div className="w-[333px] text-justify text-black text-[17px] font-normal font-['Pretendard'] leading-9">
          ESG는 환경, 사회, 재무구조 특면에서 중장기 기업가치에 직 · 간접적으로 영향을 미치는 비재무적 성과지표입니다.
        </div>


      </SectionContainer>


      <div className="grid grid-cols-2 grid-rows-2 gap-4 p-8 ">
        <div className="w-[200px] h-[206px] bg-white rounded-[29px]">

          <div className='text-zinc w-full text-23px text-base mt-4 font-Pretendard-SemiBold justify-center items-center'>
            나의 등급
            <div className="w-[53px] h-[53px] bg-gray rounded-full"></div>
          </div>

          <div className="w-[166.39px] h-[0px] border border-gray"></div>

          <div className=' justify-center items-center '>
            <div className="text-zinc text-[23px] font-semibold font-['Pretendard']">
              추천 기업</div>
            <div className="w-[53px] h-[53px] bg-gray rounded-full"></div>
          </div>


        </div>

        <div className="w-[200px] h-[206px] bg-white rounded-[29px]">
          <div className="text-zinc text-[23px] font-semibold font-['Pretendard']">유형 탐구</div>
          <div className="text-zinc-400 text-[9.45px] font-normal font-['Pretendard']">아직 유형 탐구를 시작하지 않으셨네요.<br />지금 시작해보세요!</div>
          <div className="w-[93px] h-[93px] bg-gray rounded-full">
            <img className="w-14 h-14" src="https://via.placeholder.com/56x56" />
          </div>
        </div>



      </div>
    </div >
  );
}
