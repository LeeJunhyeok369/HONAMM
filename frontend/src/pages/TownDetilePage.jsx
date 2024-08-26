import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useParams } from "react-router-dom";
import ReviewBoard from "../components/ReviewBoard";
import Header from "../layout/Header";
import Bracket from "./../components/Bracket";

// Category and description data
const categories = [
  {
    text: "그림 그리기를 좋아하는",
    color: "#8FEEFF",
    description:
      "어르신께서는 그림 그리는 것에 관심이 많고 취미로 하고 계십니다.",
  },
  {
    text: "진중한",
    color: "#D3D3D3",
    description:
      "말씀이 적으시지만, 항상 깊은 생각을 가진 진중하신 분이십니다.",
  },
  {
    text: "활발한",
    color: "#87CDFF",
    description:
      "어르신께서는 늘 활기차셔서 동네 모임에서 분위기를 띄우십니다.",
  },
  {
    text: "세심한",
    color: "#D3EE79",
    description:
      "작은 디테일도 놓치지 않으셔서, 주변 사람들에게 세심하게 배려하십니다.",
  },
  {
    text: "낚시를 좋아하는",
    color: "#69D170",
    description:
      "어르신께서는 물가에 앉아 낚시를 즐기시며 낚시 이야기를 들려주실지도 모릅니다.",
  },
  {
    text: "대화를 좋아하는",
    color: "#FFBBA3",
    description: "말수가 많으셔서 대화를 나누는 걸 매우 즐기십니다.",
  },
  {
    text: "감성적인",
    color: "#FF8BC3",
    description:
      "어르신은 작은 것에서도 감동을 받으시고, 그 감정을 깊이 느끼십니다.",
  },
  {
    text: "독서를 좋아하는",
    color: "#E5C2FF",
    description:
      "어르신께서는 늘 책을 손에서 놓지 않으시며, 새로운 지식을 쌓아가십니다.",
  },
  {
    text: "인생 경험이 풍부한",
    color: "#DCC6B8",
    description: "젊은이들에게 인생의 지혜를 나누어 주시는 것을 좋아하십니다.",
  },
  {
    text: "차분한",
    color: "#FFED89",
    description:
      "다양한 상황에서도 평정심을 잃지 않으시고, 침착하게 대처하십니다.",
  },
  {
    text: "음식 솜씨가 좋은",
    color: "#C96BFF",
    description:
      "어르신의 손맛은 일품이시며, 맛을 보면 깜짝 놀랄지도 모릅니다.",
  },
  {
    text: "음악을 좋아하는",
    color: "#FECD94",
    description: "어르신께서는 음악을 들으며 하루를 보내시는 것을 즐기십니다.",
  },
  {
    text: "정이 많은",
    color: "#B5F0F2",
    description:
      "어르신께서는 정이 많아, 주변 사람들을 늘 챙기시는 따뜻한 마음을 가지셨습니다.",
  },
];

function TownDetilePage() {
  const { id } = useParams();

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);

  const senior = {
    senior_id: "s2",
    townId: {
      village_id: "2",
      village_name: "추천마을2",
      village_image: "/images/banner2.png",
      place_x: 35.435,
      place_y: 126.735,
      village_details: "추천받는 마을 2",
      village_category: "물이 흐르는",
    },
    senior_name: "이영희",
    gender: "여성",
    main_category: "낚시를 좋아하는",
    sub_category: ["활발한", "차분한"],
    occupation: "낚시 전문가",
    intro_image: "/images/lee1.png",
    intro_text: "바다와 함께한 낚시 전문가입니다.",
    house_image: "/images/house2.png",
    senior_image: "/images/senior2.png",
    price: 15000,
    create_at: "2024-08-26T00:00:00Z",
  };

  const handleCheckInClick = () => {
    setShowCheckInCalendar(!showCheckInCalendar);
    setShowCheckOutCalendar(false); // 다른 캘린더 닫기
  };

  const handleCheckOutClick = () => {
    setShowCheckOutCalendar(!showCheckOutCalendar);
    setShowCheckInCalendar(false); // 다른 캘린더 닫기
  };

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
    setShowCheckInCalendar(false);
  };

  const handleCheckOutChange = (date) => {
    setCheckOutDate(date);
    setShowCheckOutCalendar(false);
  };

  return (
    <>
      <Header search />
      <div className="mx-auto mt-5 pt-5 border-t">
        <div className="max-w-[1280px] mx-auto mb-40">
          <div className="flex items-center font-bold text-3xl justify-center w-full mb-8">
            <Bracket text={senior.townId.village_category} />
            <h3 className="mr-4 ml-1">호남에서</h3>
            <Bracket text={senior.main_category} />
            <h3 className="ml-2">시니어</h3>
          </div>
          <div className="w-full h-96 rounded-xl flex items-center justify-between gap-x-4 overflow-hidden">
            <div className="w-4/6 h-full bg-slate-300">
              <img src={senior.townId.village_image} alt="" />
            </div>
            <div className="w-2/6 h-full bg-slate-300">
              <img src={senior.house_image} alt="" />
            </div>
          </div>
          <div className="w-full flex justify-between gap-x-4 mt-11">
            <div className="w-4/6">
              <div className="border-b pb-2">
                <h3 className="text-3xl font-semibold">
                  {senior.townId.village_name}
                </h3>
                <p className="leading-8">마을 설명 설명 설명</p>
              </div>
              <div className="border-b py-3">
                <h3 className="font-semibold">
                  여기서는 이런 경험을 할 수 있어요
                </h3>
                <ul className="text-primary-lightGray flex flex-col gap-y-4 mt-3">
                  <li className="ml-4">
                    가을 수확철이라 할머니와 함께 농촌을 체험 할 수 있어요.
                  </li>
                  <li className="ml-4">
                    가을 수확철이라 할머니와 함께 농촌을 체험 할 수 있어요.
                  </li>
                  <li className="ml-4">
                    가을 수확철이라 할머니와 함께 농촌을 체험 할 수 있어요.
                  </li>
                  <li className="ml-4">
                    가을 수확철이라 할머니와 함께 농촌을 체험 할 수 있어요.
                  </li>
                </ul>
              </div>

              <div className="border-b py-3 ">
                <div className="h-auto flex items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full"
                      src={senior.senior_image}
                      alt={senior.senior_name}
                    />
                  </div>
                  <h3 className="font-bold text-xl ml-4">
                    {senior.senior_name}{" "}
                    {senior.gender === "남성" ? "할아버지 댁" : "할머니 댁"}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center mt-4">
                  {senior.sub_category.map((category, index) => {
                    const matchedCategory = categories.find(
                      (c) => c.text === category
                    );
                    return (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 rounded-full border mr-2 text-sm"
                        style={{
                          backgroundColor: matchedCategory?.color,
                        }}
                      >
                        {category}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="border-b py-3 ">
                <h3 className="font-semibold">할머니는 이러한 분이세요!</h3>
                <ul className="text-primary-lightGray flex flex-col gap-y-4 mt-3">
                  {senior.sub_category.map((category, index) => {
                    const matchedCategory = categories.find(
                      (c) => c.text === category
                    );
                    return (
                      <li key={index} className="ml-4">
                        {matchedCategory?.description}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="py-3">
                <h3 className="font-semibold">자기소개 글</h3>
                <div className="w-full h-auto bg-gray-300 rounded-lg">
                  {senior.intro_image ? (
                    <>
                      <img
                        src={senior.intro_image}
                        alt={senior.senior_name + " 이미지"}
                      />
                    </>
                  ) : (
                    <p className="p-3">{senior.intro_text}</p>
                  )}
                </div>
              </div>
            </div>
            <div
              className="w-2/6 h-auto py-6 px-9 rounded-md mt-4"
              style={{ boxShadow: "0px 4px 37.5px 0px #00000040" }}
            >
              <h3 className="text-3xl text-gray-300 py-4">
                <span className="text-black">₩{senior.price}</span> / 박
              </h3>
              <div className="border border-black rounded-md w-full h-14 flex mb-10 relative">
                <div
                  className="w-1/2 h-full border-r border-black py-2 px-5 cursor-pointer"
                  onClick={handleCheckInClick}
                >
                  <p className="text-sm">체크인</p>
                  <p className="text-gray-300">
                    {checkInDate
                      ? checkInDate.toLocaleDateString()
                      : "0000. 00. 00"}
                  </p>
                </div>
                <div
                  className="w-1/2 h-full py-2 px-5 cursor-pointer"
                  onClick={handleCheckOutClick}
                >
                  <p className="text-sm">체크아웃</p>
                  <p className="text-gray-300">
                    {checkOutDate
                      ? checkOutDate.toLocaleDateString()
                      : "0000. 00. 00"}
                  </p>
                </div>
                {showCheckInCalendar && (
                  <div className="absolute top-14 left-0 z-10">
                    <Calendar
                      onChange={handleCheckInChange}
                      value={checkInDate}
                    />
                  </div>
                )}
                {showCheckOutCalendar && (
                  <div className="absolute top-14 right-0 z-10">
                    <Calendar
                      onChange={handleCheckOutChange}
                      value={checkOutDate}
                    />
                  </div>
                )}
              </div>
              <div className="w-full h-14 bg-[#8B8C78] flex items-center justify-center text-xl font-bold mt-auto rounded-md">
                <p className="text-white">예약하기</p>
              </div>
            </div>
          </div>
          <p>Details for town with id: {id}</p>
        </div>
        <ReviewBoard />
      </div>
    </>
  );
}

export default TownDetilePage;
