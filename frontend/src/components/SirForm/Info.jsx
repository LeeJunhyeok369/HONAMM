import React from "react";
import Bracket from "../Bracket";

function Info({ info, setInfo }) {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setInfo({ ...info, faceImage: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <>
      <div className="flex items-center justify-center mb-4 mt-6">
        <h3 className="text-2xl font-bold">마지막으로 상세정보 </h3>
        <h3 className="text-2xl font-bold">를 입력해주세요!</h3>
      </div>

      <div className="w-96 text-xl">
        <label htmlFor="faceImage">
          <div className="relative w-48 h-48 mx-auto bg-primary-input rounded-full overflow-hidden flex items-center justify-center cursor-pointer">
            {info.faceImage ? (
              <img
                src={info.faceImage}
                alt="Selected Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center">
                <h3 className="text-2xl text-primary-inputText font-semibold">
                  얼굴 사진
                </h3>
                <h3 className="text-2xl text-primary-inputText font-semibold">
                  올리기
                </h3>
              </div>
            )}
          </div>
        </label>
        <input
          id="faceImage"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          hidden
        />

        <input
          type="number"
          name="phoneNumber"
          value={info.phoneNumber}
          onChange={handleChange}
          className="text-center w-full h-10 outline-none bg-primary-input text-primary-inputText rounded-md mt-4 no-spinner"
          placeholder="휴대폰 번호(숫자만)"
        />
        <input
          type="number"
          name="homePhone"
          value={info.homePhone}
          onChange={handleChange}
          className="text-center w-full h-10 outline-none bg-primary-input text-primary-inputText rounded-md mt-4 no-spinner"
          placeholder="집 전화번호(숫자만)"
        />
        <input
          type="number"
          name="guardianPhone"
          value={info.guardianPhone}
          onChange={handleChange}
          className="text-center w-full h-10 outline-none bg-primary-input text-primary-inputText rounded-md mt-4 no-spinner"
          placeholder="(가족, 마을 이장등) 보호자 번호"
        />
        <input
          type="text"
          name="details"
          value={info.details}
          onChange={handleChange}
          className="text-center w-full h-10 outline-none bg-primary-input text-primary-inputText rounded-md mt-4"
          placeholder="상세정보"
        />
      </div>

      <style jsx>{`
        .no-spinner::-webkit-inner-spin-button,
        .no-spinner::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .no-spinner {
          -moz-appearance: textfield;
        }
      `}</style>
    </>
  );
}

export default Info;
