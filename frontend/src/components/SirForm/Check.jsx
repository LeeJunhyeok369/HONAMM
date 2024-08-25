import React from "react";
import Bracket from "./../Bracket";

function Check({
  name,
  gender,
  personalitySelections,
  traitSelection,
  workSelection,
}) {
  return (
    <div className="p-4">
      <h3 className="font-bold mb-2 flex items-center justify-center">
        <Bracket /> 확인 페이지
      </h3>

      <div className="mt-8">
        <h4 className="text-xl font-bold">이름</h4>
        <div className="flex-grow py-2 px-12 rounded-2xl text-black text-center">
          {name || "이름이 입력되지 않았습니다."}
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-xl font-bold">성별</h4>
        <div className="flex-grow py-2 px-12 rounded-2xl text-black text-center">
          {gender === "male"
            ? "남성"
            : gender === "female"
            ? "여성"
            : "성별이 선택되지 않았습니다."}
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-xl font-bold">선택한 성격</h4>
        <div className="flex flex-wrap gap-2 w-[39rem] m-auto text-lg mt-2">
          {personalitySelections.map((category, index) => (
            <div
              key={index}
              className="flex-grow py-2 px-12 rounded-2xl text-black text-center"
              style={{ backgroundColor: category.color }}
            >
              {category.text}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-xl font-bold">선택한 특성</h4>
        <div
          className="flex-grow py-2 px-12 rounded-2xl text-black text-center"
          style={{
            backgroundColor: traitSelection?.color || "#E6E6E6",
            border: traitSelection ? "2px solid #000" : "none",
          }}
        >
          {traitSelection ? traitSelection.text : "선택된 특성이 없습니다."}
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-xl font-bold">선택한 농사</h4>
        <div
          className="flex-grow py-2 px-12 rounded-2xl text-black text-center"
          style={{ backgroundColor: workSelection?.color || "#E6E6E6" }}
        >
          {workSelection ? workSelection.text : "선택된 농사가 없습니다."}
        </div>
      </div>
    </div>
  );
}

export default Check;
