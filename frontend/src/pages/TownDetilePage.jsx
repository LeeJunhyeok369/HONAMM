import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useParams } from "react-router-dom";
import ReviewBoard from "../components/ReviewBoard";
import Header from "../layout/Header";
import Bracket from "./../components/Bracket";
import { getSeniorById } from "../api/api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);
  const [senior, setSenior] = useState(null);

  useEffect(() => {
    async function fetchSenior() {
      try {
        const data = await getSeniorById(id);

        // Handling the JSON parsing for sub_category
        if (typeof data.sub_category === "string") {
          try {
            const validSubCategory = data.sub_category
              .replace(/“/g, '"')
              .replace(/”/g, '"');
            data.sub_category = JSON.parse(validSubCategory);
          } catch (error) {
            console.error("Error parsing sub_category:", error);
            data.sub_category = []; // Default to an empty array in case of error
          }
        }

        // Handling the JSON parsing for village_category
        if (typeof data.town.village_category === "string") {
          try {
            const validVillageCategory = data.town.village_category
              .replace(/“/g, '"')
              .replace(/”/g, '"');
            data.town.village_category = JSON.parse(validVillageCategory);
          } catch (error) {
            console.error("Error parsing village_category:", error);
            data.town.village_category = []; // Default to an empty array in case of error
          }
        }

        setSenior(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch senior details:", error);
      }
    }
    fetchSenior();
  }, [id]);

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
        <div className="max-w-[1140px] mx-auto mb-40">
          <div className="flex items-center font-bold text-3xl justify-center w-full mb-8">
            <Bracket text={senior?.town.place_category} />
            <h3 className="mr-4 ml-1">호남에서</h3>
            <Bracket text={senior?.main_category} />
            <h3 className="ml-2">시니어</h3>
          </div>
          <div className="w-full h-96 rounded-xl flex items-center justify-between gap-x-4 overflow-hidden">
            <div className="w-4/6 h-full bg-slate-300">
              <img
                className="w-full h-full object-cover"
                src={senior?.town.village_image}
                alt=""
              />
            </div>
            <div className="w-2/6 h-full bg-slate-300">
              <img
                className="w-full h-full object-cover"
                src={senior?.house_image}
                alt=""
              />
            </div>
          </div>
          <div className="w-full flex gap-x-4 mt-11">
            <div className="w-4/6">
              <div className="border-b pb-2">
                <h3 className="text-3xl font-semibold">
                  {senior?.town.village_name}
                </h3>
                <p className="leading-8"> {senior?.town.village_details}</p>
              </div>
              <div className="border-b py-5">
                <h3 className="font-semibold">
                  여기서는 이런 경험을 할 수 있어요
                </h3>
                <ul className="text-primary-lightGray flex flex-col gap-y-4 mt-3">
                  {senior?.town.village_category.map((experience, index) => (
                    <li key={index} className="ml-2">
                      {experience}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-b py-5 ">
                <div className="h-auto flex items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={senior?.senior_image}
                      alt={senior?.senior_name}
                    />
                  </div>
                  <h3 className="font-bold text-xl ml-2">
                    {senior?.senior_name}{" "}
                    {senior?.gender === "남자" ? "할아버지 댁" : "할머니 댁"}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center mt-4">
                  {senior?.sub_category.map((category, index) => {
                    const matchedCategory = categories.find(
                      (c) => c.text === category
                    );
                    return (
                      <span
                        key={index}
                        className="inline-block px-3 py-1 rounded-full border mr-2 text-sm"
                        style={{
                          backgroundColor: matchedCategory?.color,
                        }}
                      >
                        {category}
                      </span>
                    );
                  })}
                  <span
                    className="inline-block px-3 py-1 rounded-full border mr-2 text-sm"
                    style={{
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    {senior?.occupation}
                  </span>
                </div>
              </div>
              <div className="border-b py-5 ">
                <h3 className="font-semibold">할머니는 이러한 분이세요!</h3>
                <ul className="text-primary-lightGray flex flex-col gap-y-4 mt-3">
                  {senior?.sub_category.map((category, index) => {
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
              <div className="py-5">
                <h3 className="font-semibold">자기소개 글</h3>
                <div className="w-full h-auto bg-gray-300 rounded-lg">
                  {senior?.intro_image ? (
                    <img
                      className="w-full h-full object-cover"
                      src={senior?.intro_image}
                      alt={senior?.senior_name + " 이미지"}
                    />
                  ) : (
                    <p className="p-3">{senior?.intro_text}</p>
                  )}
                </div>
              </div>
            </div>
            <div
              className="w-2/6 max-h-72 py-6 px-9 rounded-md mt-4"
              style={{ boxShadow: "0px 4px 37.5px 0px #00000040" }}
            >
              <h3 className="text-3xl text-gray-300 py-4">
                <span className="text-black">₩{senior?.price}</span> / 박
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
              <button
                onClick={() => {
                  if (checkInDate && checkOutDate) {
                    Swal.fire({
                      icon: "success",
                      title: "예약이 완료되었습니다.",
                      text: "예약 해주셔서 감사합니다.",
                      confirmButtonText: "확인",
                      preConfirm: () => {
                        navigate("/");
                      },
                    });
                  } else {
                    Swal.fire({
                      icon: "error",
                      title: "날짜를 정해주세요!",
                    });
                  }
                }}
                className="w-full h-14 bg-[#8B8C78] flex items-center justify-center text-xl font-bold mt-auto rounded-md"
              >
                <p className="text-white">예약하기</p>
              </button>
            </div>
          </div>
        </div>
        <ReviewBoard />
      </div>
    </>
  );
}

export default TownDetilePage;
