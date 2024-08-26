import React, { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Link } from "react-router-dom";
import Header from "../layout/Header";
import Bracket from "./../components/Bracket";

// 추천받는 카테고리
const GoodVillageData = ["추천마을1", "추천마을2", "천동마을"];

// 모든 마을 데이터
const allVillageData = [
  {
    village_id: "1",
    village_name: "추천마을1",
    village_image: "/images/banner1.png",
    place_x: 35.43,
    place_y: 126.73,
    village_details: "추천받는 마을 1",
    village_category: "물이 흐르는",
  },
  {
    village_id: "2",
    village_name: "추천마을2",
    village_image: "/images/banner2.png",
    place_x: 35.435,
    place_y: 126.735,
    village_details: "추천받는 마을 2",
    village_category: "물이 흐르는",
  },
  {
    village_id: "3",
    village_name: "천동마을",
    village_image: "/images/banner3.png",
    place_x: 35.445823,
    place_y: 126.755512,
    village_details: "물이 풍부한 지역의 마을",
    village_category: "물이 흐르는",
  },
  {
    village_id: "4",
    village_name: "금동마을",
    village_image: "/images/banner4.png",
    place_x: 35.450913,
    place_y: 126.760529,
    village_details: "수자원이 풍부한 마을",
    village_category: "물이 흐르는",
  },
  {
    village_id: "5",
    village_name: "산골마을",
    village_image: "/images/banner5.png",
    place_x: 35.460123,
    place_y: 126.770321,
    village_details: "산으로 둘러싸인 마을",
    village_category: "산이 둘러 쌓인",
  },
  {
    village_id: "6",
    village_name: "천황마을",
    village_image: "/images/banner6.png",
    place_x: 35.465678,
    place_y: 126.775432,
    village_details: "산의 경치가 아름다운 마을",
    village_category: "산이 둘러 쌓인",
  },
  {
    village_id: "7",
    village_name: "평야마을",
    village_image: "/images/banner7.png",
    place_x: 35.470234,
    place_y: 126.780123,
    village_details: "광활한 평야가 있는 마을",
    village_category: "광활한 평야",
  },
  {
    village_id: "8",
    village_name: "넓은들마을",
    village_image: "/images/banner8.png",
    place_x: 35.475678,
    place_y: 126.785432,
    village_details: "넓은 들판이 있는 마을",
    village_category: "광활한 평야",
  },
  {
    village_id: "9",
    village_name: "해안마을",
    village_image: "/images/banner9.png",
    place_x: 35.480123,
    place_y: 126.790567,
    village_details: "시원한 바다가 있는 마을",
    village_category: "시원한 바다",
  },
  {
    village_id: "10",
    village_name: "바다마을",
    village_image: "/images/banner10.png",
    place_x: 35.485678,
    place_y: 126.795678,
    village_details: "해변가의 마을",
    village_category: "시원한 바다",
  },
  {
    village_id: "11",
    village_name: "섬마을",
    village_image: "/images/banner11.png",
    place_x: 35.490123,
    place_y: 126.800789,
    village_details: "바다에 둘러싸인 섬마을",
    village_category: "바다에 둘러쌓인",
  },
  {
    village_id: "12",
    village_name: "해양마을",
    village_image: "/images/banner12.png",
    place_x: 35.495678,
    place_y: 126.80589,
    village_details: "해양경관이 뛰어난 마을",
    village_category: "바다에 둘러쌓인",
  },
];

// 어르신 데이터
const seniorData = [
  {
    senior_id: "s1",
    townId: "1",
    senior_name: "김철수",
    gender: "남성",
    main_category: "그림 그리기를 좋아하는",
    sub_category: ["세심한", "진중한"],
    occupation: "화가",
    intro_image: "/images/kim1.png",
    intro_text: "평생을 그림과 함께한 화가입니다.",
    house_image: "/images/house1.png",
    senior_image: "/images/senior1.png",
    price: 10000,
    create_at: "2024-08-25T00:00:00Z",
  },
  {
    senior_id: "s2",
    townId: "2",
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
  },
  {
    senior_id: "s3",
    townId: "3",
    senior_name: "박민수",
    gender: "남성",
    main_category: "독서를 좋아하는",
    sub_category: ["감성적인", "정이 많은"],
    occupation: "작가",
    intro_image: "/images/park1.png",
    intro_text: "많은 사람들에게 감동을 준 작가입니다.",
    house_image: "/images/house3.png",
    senior_image: "/images/senior3.png",
    price: 12000,
    create_at: "2024-08-27T00:00:00Z",
  },
  {
    senior_id: "s4",
    townId: "4",
    senior_name: "최영자",
    gender: "여성",
    main_category: "음식 솜씨가 좋은",
    sub_category: ["세심한", "대화를 좋아하는"],
    occupation: "요리사",
    intro_image: "/images/choi1.png",
    intro_text: "전통 요리의 대가입니다.",
    house_image: "/images/house4.png",
    senior_image: "/images/senior4.png",
    price: 20000,
    create_at: "2024-08-28T00:00:00Z",
  },
  {
    senior_id: "s5",
    townId: "5",
    senior_name: "오진희",
    gender: "여성",
    main_category: "음악을 좋아하는",
    sub_category: ["감성적인", "차분한"],
    occupation: "음악가",
    intro_image: "/images/oh1.png",
    intro_text: "평생을 음악과 함께한 삶을 살았습니다.",
    house_image: "/images/house5.png",
    senior_image: "/images/senior5.png",
    price: 18000,
    create_at: "2024-08-29T00:00:00Z",
  },
  {
    senior_id: "s6",
    townId: "6",
    senior_name: "한상민",
    gender: "남성",
    main_category: "진중한",
    sub_category: ["인생 경험이 풍부한", "정이 많은"],
    occupation: "사업가",
    intro_image: "/images/han1.png",
    intro_text: "성공적인 사업을 이끌어 온 인물입니다.",
    house_image: "/images/house6.png",
    senior_image: "/images/senior6.png",
    price: 25000,
    create_at: "2024-08-30T00:00:00Z",
  },
];

const categoryColors = {
  "그림 그리기를 좋아하는": "#8FEEFF",
  진중한: "#D3D3D3",
  활발한: "#87CDFF",
  세심한: "#D3EE79",
  "낚시를 좋아하는": "#69D170",
  "대화를 좋아하는": "#FFBBA3",
  감성적인: "#FF8BC3",
  "독서를 좋아하는": "#E5C2FF",
  "인생 경험이 풍부한": "#DCC6B8",
  차분한: "#FFED89",
  "음식 솜씨가 좋은": "#C96BFF",
  "음악을 좋아하는": "#FECD94",
  "정이 많은": "#B5F0F2",
};

const categories = [
  "추천받는",
  "물이 흐르는",
  "산이 둘러 쌓인",
  "광활한 평야",
  "시원한 바다",
  "바다에 둘러쌓인",
];

function TownPage() {
  const [selectedCategory, setSelectedCategory] = useState("추천받는");
  const [selectedVillage, setSelectedVillage] = useState(null);

  // 선택된 카테고리에 해당하는 마을 데이터 필터링
  const filteredVillageData =
    selectedCategory === "추천받는"
      ? allVillageData.filter((village) =>
          GoodVillageData.includes(village.village_name)
        )
      : allVillageData.filter(
          (village) => village.village_category === selectedCategory
        );

  // 선택된 마을에 속한 어르신 데이터 필터링
  const filteredSeniors = selectedVillage
    ? seniorData.filter(
        (senior) => senior.townId === selectedVillage.village_id
      )
    : [];

  return (
    <div>
      <Header search />
      <ul className="w-[45rem] flex items-center justify-between mx-auto h-14">
        {categories.map((category) => (
          <li
            key={category}
            className={`cursor-pointer ${
              selectedCategory === category ? "font-bold" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
      <div className="w-full flex items-center border-t border-gray-300 pb-5">
        <div className="w-3/12 h-[40rem]">
          <div className="text-center font-bold text-3xl flex items-center my-5 justify-center">
            <Bracket text={selectedCategory} />
            <h3 className="ml-2">호남</h3>
          </div>

          <div className="h-[36rem] overflow-y-auto custom-scrollbar">
            {filteredVillageData.map((village, i) => (
              <div
                className={`p-2 cursor-pointer ${
                  i < filteredVillageData.length - 1
                    ? "border-b border-gray-300"
                    : ""
                }`}
                key={i}
                onClick={() => setSelectedVillage(village)}
              >
                <div className="w-full h-32 rounded-lg overflow-hidden">
                  <img
                    src={village.village_image}
                    alt={`${village.village_name} ${i}`}
                  />
                </div>
                <h3 className="text-2xl">{village.village_name}</h3>
                <div className="text-[#6E6E6E] text-sm">
                  {village.village_details}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-9/12 h-[40rem] bg-yellow-50 overflow-hidden">
          <Map
            center={{ lat: 35.431408, lng: 126.732966 }}
            style={{ width: "100%", height: "100%" }}
            level={10}
            maxLevel={12} // 최대로 확대할 수 있는 레벨
            minLevel={5} // 최대로 축소할 수 있는 레벨
          >
            {filteredVillageData.map((village, i) => (
              <MapMarker
                key={i}
                position={{ lat: village.place_x, lng: village.place_y }}
              >
                <div style={{ padding: "5px", color: "#000" }}>
                  {village.village_name}
                </div>
              </MapMarker>
            ))}
          </Map>
        </div>
      </div>
      {selectedVillage && (
        <div
          className="relative w-full mt-4 p-16 bg-white shadow-lg rounded-lg"
          style={{
            backgroundImage: `url(${selectedVillage.village_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#a9a9a94e",
              zIndex: 10,
            }}
          ></div>

          <h2 className="text-xl font-bold text-center mb-4 text-white relative z-10">
            {selectedVillage.village_name}의 어르신들
          </h2>
          <div className="flex flex-wrap justify-center relative z-10">
            {filteredSeniors.map((senior) => (
              <Link
                to={`/towndetail/${senior.senior_id}`}
                key={senior.senior_id}
                className="w-94 m-4 p-4 border border-gray-300 rounded-lg shadow-lg bg-white"
              >
                <div className="bg-gray-300 w-full">
                  <img
                    src={senior.senior_image}
                    alt={senior.senior_name}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                </div>
                <h3 className="text-lg text-[#5F5F5F] mb-2">
                  <Bracket text={senior.main_category} /> {senior.senior_name}{" "}
                  {senior.gender === "남성" ? "할아버지 댁" : "할머니 댁"}
                </h3>
                <p className="text-gray-700 mb-2">
                  {senior.sub_category.map((category) => (
                    <span
                      key={category}
                      style={{ backgroundColor: categoryColors[category] }}
                      className="mr-2 px-2 py-1 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TownPage;
