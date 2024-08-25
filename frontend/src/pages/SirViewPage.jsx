import React from "react";

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
      <h3>안녕하세요 호남 힐링 플랫폼</h3>
    </div>
  );
}

export default SirViewPage;
