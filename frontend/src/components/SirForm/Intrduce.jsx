import React, { useState } from "react";
import Bracket from "./../Bracket";

function Intrduce({ introContent, setIntroContent }) {
  const { image, text } = introContent; // Destructure the intro content
  const [isWritingMode, setIsWritingMode] = useState(Boolean(text)); // Determines mode based on initial text value

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setIntroContent({ ...introContent, image: e.target.result, text: "" });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTextChange = (e) => {
    setIntroContent({ ...introContent, text: e.target.value, image: null });
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-center mb-4 mt-10">
        <Bracket text="최금자"/>
        <h3 className="text-2xl font-bold ml-3 ">
          님 집에 방문할 사람들에게 자기소개 해주세요!
        </h3>
      </div>

      {!isWritingMode ? (
        <>
          <label htmlFor="IntrduceImg">
            <div className="mt-4 w-[40rem] h-96 bg-primary-input flex items-center justify-center cursor-pointer rounded-lg shadow-inner">
              {image ? (
                <img
                  src={image}
                  alt="Selected Preview"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              ) : (
                <h4 className="text-xl font-semibold text-gray-500">
                  자필로 쓴 자기소개 글 사진 올리기
                </h4>
              )}
            </div>
          </label>
          <input
            id="IntrduceImg"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            hidden
            name="IntrduceImg"
          />
          <button
            onClick={() => setIsWritingMode(true)}
            className="mt-4 mx-auto text-lg border-b border-black"
            type="button"
          >
            컴퓨터로 작성하기
          </button>
        </>
      ) : (
        <>
          <div className="mt-4 p-4 border rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2">자기소개 글 작성하기</h4>
            <textarea
              placeholder="자기소개를 작성해 주세요."
              rows="6"
              className="w-full border rounded-lg p-2"
              value={text}
              onChange={handleTextChange}
            ></textarea>
          </div>
          <button
            onClick={() => setIsWritingMode(false)}
            className="mt-4 mx-auto text-lg border-b border-black"
            type="button"
          >
            사진으로 올리기
          </button>
        </>
      )}
    </div>
  );
}

export default Intrduce;
