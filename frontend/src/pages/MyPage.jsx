import React from "react";
import ReviewBoard from "../components/ReviewBoard";
import Bracket from "../components/Bracket";
import Header from "../layout/Header";

function MyPage() {
  return (
    <>
      <Header search />
      <div className="w-full border-t border-gray-300">
        <div className="max-w-[1180px] mx-auto mt-12">
          <div className="flex items-center font-bold text-4xl w-full mb-8">
            <Bracket text={"김유빈"} />
            <h3 className="mr-2 ml-1">의 예약 목록</h3>
          </div>
          <div className="flex mb-20">
            <img src="/images/my1.png" alt="" />
            <img src="/images/my2.png" alt="" />
            {/* <div
            className="p-5 w-80 h-80"
            style={{ boxShadow: "-5px 6px 21.4px 0px rgba(0, 0, 0, 0.25)" }}
          ></div> */}
          </div>
        </div>
        <ReviewBoard />
      </div>
    </>
  );
}

export default MyPage;
