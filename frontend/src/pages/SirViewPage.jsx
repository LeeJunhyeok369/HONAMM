import React from "react";
import Swal from "sweetalert2";
import ReviewBoard from "../components/ReviewBoard";

function SirViewPage() {
  return (
    <div>
      <div className="w-[1280px] h-14 mx-auto flex items-end justify-between">
        <a href="/">홈</a>
        <button
          onClick={() =>
            Swal.fire({
              icon: "info",
              title: "010-0000-0000로 전화주세요.",
              text: "상담원이 상세하게 안내드리겠습니다.",
            })
          }
        >
          도움
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
          href="#"
          className="inline-block px-8 py-3 bg-primary-limeGreen font-bold text-2xl mx-auto mt-4 mb-16 rounded-lg"
        >
          호스팅 시작하기
        </a>
        <ReviewBoard />
      </div>
    </div>
  );
}

export default SirViewPage;
