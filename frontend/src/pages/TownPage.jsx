import { useEffect, useState } from "react";
import { getVillages, getSeniors } from "../api/api"; // Combined imports
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Link } from "react-router-dom";
import Header from "../layout/Header";
import Bracket from "./../components/Bracket";
import { FaStar } from "react-icons/fa";
import { FaBridgeWater } from "react-icons/fa6";
import { PiMountainsFill } from "react-icons/pi";
import { PiFarmBold } from "react-icons/pi";
import { BsWater } from "react-icons/bs";
import { PiIslandFill } from "react-icons/pi";

const GoodVillageData = ["대황강마을", "벽골제마을", "우전리마을"];

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
  "산에 둘러 쌓인",
  "광활한 평야",
  "시원한 바다",
  "바다에 둘러쌓인",
];

const icons = [
  <FaStar key="FaStar" size={35} />,
  <FaBridgeWater key="FaBridgeWater" size={35} />,
  <PiMountainsFill key="PiMountainsFill" size={35} />,
  <PiFarmBold key="PiFarmBold" size={35} />,
  <BsWater key="BsWater" size={35} />,
  <PiIslandFill key="PiIslandFill" size={35} />,
];

function TownPage() {
  const [selectedCategory, setSelectedCategory] = useState("추천받는");
  const [selectedVillage, setSelectedVillage] = useState(null);
  const [villages, setVillages] = useState([]); // State for villages
  const [seniors, setSeniors] = useState([]); // State for seniors
  const [filteredSeniors, setFilteredSeniors] = useState([]); // State for filtered seniors

  useEffect(() => {
    const fetchVillages = async () => {
      try {
        const villageData = await getVillages();
        setVillages(villageData);
      } catch (error) {
        console.error("Failed to fetch villages:", error);
      }
    };
    fetchVillages();
  }, []);

  useEffect(() => {
    const fetchSeniors = async () => {
      try {
        const seniorData = await getSeniors();
        setSeniors(seniorData);
      } catch (error) {
        console.error("Failed to fetch seniors:", error);
      }
    };
    fetchSeniors();
  }, []);

  const filteredVillageData =
    selectedCategory === "추천받는"
      ? villages.filter((village) =>
          GoodVillageData.includes(village.village_name)
        )
      : villages.filter(
          (village) => village.place_category === selectedCategory
        );

  useEffect(() => {
    let filtered = [];
    if (selectedVillage) {
      filtered = seniors.filter(
        (senior) => senior.town.village_id === selectedVillage.village_id
      );
    } else {
      filtered = seniors.filter((senior) =>
        filteredVillageData.some(
          (village) => village.village_id === senior.town.village_id
        )
      );
    }

    if (JSON.stringify(filtered) !== JSON.stringify(filteredSeniors)) {
      setFilteredSeniors(filtered);
    }
  }, [selectedVillage, filteredVillageData, seniors, filteredSeniors]);

  return (
    <div>
      <Header search />
      <ul className="w-[45rem] flex items-center justify-between mx-auto h-20">
        {categories.map((category, index) => (
          <li
            key={category}
            className={`cursor-pointer flex items-center justify-between flex-col mb-4 ${
              selectedCategory === category ? "font-bold" : ""
            }`}
            onClick={() => {
              setSelectedCategory(category);
              setSelectedVillage(null);
            }}
          >
            {icons[index]}
            {category}
          </li>
        ))}
      </ul>
      <div className="w-full flex items-center border-t border-gray-300">
        {/* Village List */}
        <div className="w-3/12 h-[40rem] overflow-hidden">
          <div className="text-center font-bold text-3xl flex items-center my-5 justify-center">
            <Bracket text={selectedCategory} />
            <h3 className="ml-2">호남</h3>
          </div>

          <div className="h-[36rem] overflow-y-auto custom-scrollbar pb-8">
            {filteredVillageData.map((village, i) => (
              <div
                className={`p-2 cursor-pointer ${
                  i < filteredVillageData.length - 1
                    ? "border-b border-gray-300"
                    : ""
                }`}
                key={village.village_id}
                onClick={() => setSelectedVillage(village)}
              >
                <div className="w-full h-32 rounded-lg overflow-hidden">
                  <img
                    src={village.village_image}
                    alt={`${village.village_name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl leading-[3rem]">
                  {village.village_name}
                </h3>
                <div className="text-[#6E6E6E] text-sm">
                  {village.village_details}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="w-9/12 h-[40rem] bg-yellow-50 overflow-hidden">
          <Map
            center={{ lat: 35.431408, lng: 126.732966 }}
            style={{ width: "100%", height: "100%" }}
            level={10}
            maxLevel={12}
            minLevel={5}
          >
            {filteredVillageData.map((village, i) => (
              <MapMarker
                key={village.village_id}
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

      {/* Senior List */}
      <div className="relative w-full mt-4 p-16 bg-gray-300 shadow-lg rounded-lg">
        {selectedVillage ? (
          // Show background image and overlay when a village is selected
          <div
            className="absolute w-full h-full inset-0"
            style={{
              backgroundImage: `url(${selectedVillage.village_image})`,
              backgroundColor: "lightgray",
              backgroundPosition: "50%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(169, 169, 169, 0.31)",
                zIndex: 10,
                position: "absolute",
                inset: 0,
              }}
            ></div>
          </div>
        ) : (
          <h2 className="text-2xl font-bold text-center mb-4">
            {selectedCategory} 카테고리의 어르신들
          </h2>
        )}

        <div className="flex flex-wrap justify-center relative z-10">
          {filteredSeniors.map((senior) => {
            let subCategories = Array.isArray(senior.sub_category)
              ? senior.sub_category
              : [];

            if (typeof senior.sub_category === "string") {
              try {
                const validSubCategory = senior.sub_category
                  .replace(/“/g, '"')
                  .replace(/”/g, '"');
                subCategories = JSON.parse(validSubCategory);
              } catch (error) {
                console.error("Error parsing sub_category:", error);
              }
            }

            return (
              <Link
                to={`/towndetail/${senior.senior_id}`}
                key={senior.senior_id}
                className="max-w-86 m-4 p-4 border border-gray-300 rounded-lg shadow-lg bg-white"
              >
                <div className="bg-gray-300 w-full">
                  <img
                    src={senior.senior_image}
                    alt={senior.senior_name}
                    className="w-full h-52 object-cover rounded-lg mb-4"
                  />
                </div>
                <h3 className="text-lg text-[#5F5F5F] mb-2 flex items-center font-bold">
                  <Bracket text={senior.main_category} isSmall />{" "}
                  <span className="font-medium ml-4">
                    {senior.senior_name}{" "}
                    {senior.gender === "남자" ? "할아버지 댁" : "할머니 댁"}
                  </span>
                </h3>
                <p className="text-gray-700 my-2 py-2 flex flex-wrap ">
                  {subCategories.map((category) => (
                    <span
                      key={category}
                      style={{ backgroundColor: categoryColors[category] }}
                      className="inline-block mr-2 px-2 py-1 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TownPage;
