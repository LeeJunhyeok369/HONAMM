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
    { top: "25%", left: "25%" },
    { top: "20%", left: "78%" },
    { top: "72%", left: "18%" },
    { top: "58%", left: "52%" },
    { top: "75%", left: "90%" },
  ];

  return (
    <div style={sectionStyle}>
      <div className="w-[1280px] h-full relative mx-auto">
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
            <Review />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewBoard;
