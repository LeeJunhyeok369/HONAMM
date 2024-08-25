import React from "react";

function Gender({ selectedGender, setSelectedGender }) {
  const handleSelect = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <>
      <h3>성별이 어떻게 되시나요?</h3>
      <div className="flex items-center gap-x-3 mt-5">
        <button
          type="button"
          className={`w-32 rounded-md ${
            selectedGender === "male" ? "bg-[#007FE8]" : "bg-primary-input"
          } text-white`}
          onClick={() => handleSelect("male")}
        >
          남성
        </button>
        <button
          type="button"
          className={`w-32 rounded-md ${
            selectedGender === "female" ? "bg-[#FF54C0]" : "bg-primary-input"
          } text-white`}
          onClick={() => handleSelect("female")}
        >
          여성
        </button>
      </div>
    </>
  );
}

export default Gender;
