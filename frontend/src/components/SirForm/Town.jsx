import React, { useState } from "react";
import Bracket from "./../Bracket";

function Town() {
  const [selectedTown, setSelectedTown] = useState(null);

  const towns = [
    { id: 1, name: "보읍마을", location: "전라북도 고창 성송면" },
    { id: 2, name: "다른마을", location: "전라북도 익산시" },
    { id: 3, name: "세번째마을", location: "전라북도 정읍시" },
    { id: 4, name: "네번째마을", location: "전라북도 김제시" },
    { id: 5, name: "다섯번째마을", location: "전라북도 완주군" },
    { id: 6, name: "여섯번째마을", location: "전라북도 남원시" },
    { id: 7, name: "일곱번째마을", location: "전라북도 무주군" },
    { id: 8, name: "여덟번째마을", location: "전라북도 장수군" },
  ];

  const handleSelectTown = (town) => {
    setSelectedTown(town);
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-center h-24 mb-4">
        <Bracket />
        <h3 className="text-3xl font-bold">
          님이 살고 있는 곳은 어떤 마을인가요?
        </h3>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {towns.map((town) => (
          <div
            key={town.id}
            onClick={() => handleSelectTown(town)}
            className={`p-2 pb-4 rounded-xl cursor-pointer ${
              selectedTown?.id === town.id ? "bg-primary-input " : "bg-white"
            }`}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <div className="h-32 w-full bg-gray-300 rounded-xl overflow-hidden mb-2">
              <img className="w-full h-full object-cover" src="" alt="" />
            </div>
            <h3 className="text-xl font-semibold">{town.name}</h3>
            <p className="text-base font-normal">{town.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Town;
