import React from "react";
import Swal from "sweetalert2";
import ReviewBoard from "../components/ReviewBoard";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaHand } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";

function SirViewPage() {
  return (
    <div>
      <div className="w-[1140px] h-24 mx-auto flex items-center justify-between px-4">
        <a
          href="/"
          className="flex flex-col items-center text-lg justify-center"
        >
          <AiOutlineHome size={48} className="mr-2" />
        </a>
        <button
          onClick={() =>
            Swal.fire({
              icon: "info",
              title: "010-0000-0000로 전화주세요.",
              text: "상담원이 상세하게 안내드리겠습니다.",
            })
          }
          className="text-lg"
        >
          <img
            className="w-12 h-12 mx-auto"
            src="/images/help.png"
            alt="help"
          />
          도움요청
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-bold text-center mt-28 text-2xl">
          안녕하세요 호남 힐링 플랫폼
        </h3>
        <h3 className="font-bold flex items-center justify-center text-2xl">
          HONAMM입니다.
        </h3>
        <a
          href="/sirform"
          className="inline-block px-8 py-3 bg-primary-limeGreen font-bold text-2xl mx-auto mt-4 mb-16 rounded-lg"
        >
          호스팅 시작하기
        </a>
        <ul className="flex items-center justify-cente w-[1140px] pb-16">
          <li className="w-1/3 flex items-center justify-center flex-col">
            <HiMiniUserGroup size={110} />
            <h3 className="text-lg font-bold">새로운 가족</h3>
            <p>일주일 이상 함께하며</p>
            <p>행복을 찾을 수 있는 기회</p>
          </li>
          <li className="w-1/3 flex items-center justify-center flex-col">
            <FaHand size={110} />
            <h3 className="text-lg font-bold">일손 부족 해결 </h3>
            <p>당신의 집에 머무는 동안 </p>
            <p>함께 일하는 일손 가능 </p>
          </li>
          <li className="w-1/3 flex items-center justify-center flex-col">
            <GiReceiveMoney size={110} />
            <h3 className="text-lg font-bold">금전적인 가치</h3>
            <p>호남에서의 새로운 경험을 </p>
            <p>제공하고 수익 창출 가능</p>
          </li>
        </ul>
        <ReviewBoard />
      </div>
    </div>
  );
}

export default SirViewPage;
