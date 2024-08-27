import React from "react";
import Bracket from "../Bracket";

function Home({ selectedImage, setSelectedImage }) {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result); // Update the image in the parent component
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 w-full">
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center justify-center mb-4">
          <Bracket text="최금자" />
          <h3 className="text-2xl font-bold ml-3">
            님이 살고 있는 자택의 사진을 넣어주세요!
          </h3>
        </div>
        <label htmlFor="homeImage" className="w-full">
          <div className="w-[40rem] mx-auto h-96 bg-primary-input flex items-center justify-center cursor-pointer rounded-lg shadow-inner">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected Preview"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            ) : (
              <h4 className="text-xl font-semibold text-gray-500">
                집 사진 올리기
              </h4>
            )}
          </div>
        </label>
        <input
          id="homeImage"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          hidden
        />
      </div>
    </div>
  );
}

export default Home;
