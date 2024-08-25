import React from "react";
import Bracket from "./../Bracket";

function Name({ name, setName }) {
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <Bracket text="안녕하세요" />
      <h3 className="text-black font-bold ">이름을 알려주세요.</h3>
      <input
        type="text"
        className="w-80 h-12 p-2.5 outline-none mt-3 text-3xl bg-primary-input text-primary-inputText text-center"
        placeholder="이름"
        value={name}
        onChange={handleChange}
        name="name"
      />
    </>
  );
}

export default Name;
