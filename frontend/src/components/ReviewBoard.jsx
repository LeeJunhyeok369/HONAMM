import React from "react";
import Review from "./Review";

function ReviewBoard() {
  const sectionStyle = {
    position: "relative",
    background: `
      linear-gradient(to bottom, transparent 18px, #ddd 18px) 0 0 / 100vw 20px repeat-y,
      linear-gradient(to right, transparent 18px, #ddd 18px) 0 0 / 20px 1200px repeat-x
      white
    `,
    width: "100%",
    height: "1200px",
    padding: "10px 20px",
    boxSizing: "border-box",
    overflow: "hidden",
  };

  const reviewPositions = [
    {
      top: "25%",
      left: "25%",
      name: "배선우",
      image: "review1.jpg",
      text: "이틀동안 너무 행복했습니다^^",
      date: "2024. 08. 27",
    },
    {
      top: "20%",
      left: "78%",
      name: "김민종",
      image: "review2.jpg",
      text: "할머니 사랑합니다!",
      date: "2024. 03. 18",
    },
    {
      top: "72%",
      left: "18%",
      name: "김아름",
      image: "review3.jpg",
      text: "2번째 엄마가 생겼네요 호호",
      date: "2024. 08. 27",
    },
    {
      top: "58%",
      left: "52%",
      name: "안희서",
      image: "review4.jpg",
      text: "할머니 벌써 보고싶어요 ㅠㅠ",
      date: "2024. 02. 22",
    },
    {
      top: "75%",
      left: "90%",
      name: "최수연",
      image: "review5.jpg",
      text: "어르신 감사합니다. 건강하세요",
      date: "2024. 06. 09",
    },
  ];

  return (
    <div style={sectionStyle}>
      <div className="w-[1140px] h-full relative mx-auto">
        {reviewPositions.map((pos, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: pos.top,
              left: pos.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Review
              name={pos.name}
              image={pos.image}
              text={pos.text}
              date={pos.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewBoard;
