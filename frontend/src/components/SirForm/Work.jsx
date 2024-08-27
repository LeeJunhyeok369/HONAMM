import React, { useEffect, useState } from "react";
import Bracket from "./../Bracket";

const workCategories = [
  { text: "감자농사", color: "#8FEEFF" },
  { text: "콩농사", color: "#D3D3D3" },
  { text: "홍어잡이", color: "#87CDFF" },
  { text: "전복양식", color: "#D3EE79" },
  { text: "벼농사", color: "#69D170" },
  { text: "양파농사", color: "#FFBBA3" },
  { text: "옥수수농사", color: "#FF8BC3" },
  { text: "고구마농사", color: "#E5C2FF" },
  { text: "기타", color: "#DCC6B8" },
];

function Work({ onSelect, initialWork }) {
  const [selectedWork, setSelectedWork] = useState(initialWork || null);

  useEffect(() => {
    onSelect(selectedWork);
  }, [selectedWork, onSelect]);

  const handleSelect = (work) => {
    setSelectedWork(work);
  };

  return (
    <div className="p-4">
      <h3 className="font-bold mb-2 flex items-center justify-center">
        어떤 일을 하고 계신가요?
      </h3>
      <div className="flex flex-wrap gap-2 w-[39rem] m-auto text-lg mt-8">
        {workCategories.map((work, index) => (
          <div
            key={index}
            onClick={() => handleSelect(work)}
            className="flex-grow py-2 px-12 rounded-2xl cursor-pointer text-black text-center"
            style={{
              backgroundColor:
                selectedWork?.text === work.text ? work.color : "#E6E6E6",
            }}
          >
            {work.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
