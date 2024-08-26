import React from "react";
import Bracket from "./../Bracket";

function Last() {
  return (
    <>
      <div className="flex items-center justify-center">
        <Bracket text="OOO" />
        <h3 className="ml-2">님 수고하셨습니다.</h3>
      </div>
      <h3>3일이내 010-1234-5678 번호로 </h3>
      <h3>안내전화 드리겠습니다!</h3>
    </>
  );
}

export default Last;
