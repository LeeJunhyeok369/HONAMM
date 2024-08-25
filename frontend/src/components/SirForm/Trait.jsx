import React, { useEffect, useState } from "react";

function Trait({ selections, onSelect, initialTrait }) {
  const [selectedTrait, setSelectedTrait] = useState(initialTrait || null);

  useEffect(() => {
    onSelect(selectedTrait);
  }, [selectedTrait, onSelect]);

  const handleSelect = (trait) => {
    setSelectedTrait(trait);
  };

  return (
    <div className="p-4">
      <h3 className="font-bold mb-2 flex items-center justify-center">
        선택한 특성 중 하나를 선택해주세요
      </h3>
      <div className="flex flex-wrap gap-2 w-[39rem] m-auto text-lg mt-8">
        {selections.map((trait, index) => (
          <div
            key={index}
            onClick={() => handleSelect(trait)}
            className="flex-grow py-2 px-12 rounded-2xl cursor-pointer text-black text-center"
            style={{
              backgroundColor:
                selectedTrait === trait ? trait.color : "#CFCFCF",
            }}
          >
            {trait.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trait;
