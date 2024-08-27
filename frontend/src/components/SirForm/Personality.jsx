import React, { useEffect, useState } from "react";
import Bracket from "./../Bracket";

const categories = [
  { text: "그림 그리기를 좋아하는", color: "#8FEEFF" },
  { text: "진중한", color: "#D3D3D3" },
  { text: "활발한", color: "#87CDFF" },
  { text: "세심한", color: "#D3EE79" },
  { text: "낚시를 좋아하는", color: "#69D170" },
  { text: "대화를 좋아하는", color: "#FFBBA3" },
  { text: "감성적인", color: "#FF8BC3" },
  { text: "독서를 좋아하는", color: "#E5C2FF" },
  { text: "인생 경험이 풍부한", color: "#DCC6B8" },
  { text: "차분한", color: "#FFED89" },
  { text: "음식 솜씨가 좋은", color: "#C96BFF" },
  { text: "음악을 좋아하는", color: "#FECD94" },
  { text: "정이 많은", color: "#B5F0F2" },
];

function Personality({ onSelect, initialSelections }) {
  const [selectedCategories, setSelectedCategories] = useState(
    initialSelections || []
  );

  useEffect(() => {
    onSelect(
      selectedCategories.map((text) =>
        categories.find((cat) => cat.text === text)
      )
    );
  }, [selectedCategories, onSelect]);

  const handleSelect = (category) => {
    setSelectedCategories((prev) => {
      const updated = prev.includes(category.text)
        ? prev.filter((item) => item !== category.text)
        : prev.length < 5
        ? [...prev, category.text]
        : prev;

      return updated;
    });
  };

  return (
    <div className="p-4">
      <h3 className="font-bold mb-2 flex items-center justify-center">
        <Bracket text="최금자" /> 님은 어떤 사람인가요? (중복선택 가능, 최대
        5개)
      </h3>
      <div className="flex flex-wrap gap-2 w-[39rem] m-auto text-lg mt-8">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleSelect(category)}
            className="flex-grow py-2 px-12 rounded-2xl cursor-pointer text-black text-center"
            style={{
              backgroundColor: selectedCategories.includes(category.text)
                ? category.color
                : "#E6E6E6",
            }}
          >
            {category.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Personality;
