import { useState, useEffect } from "react";
import Bracket from "./../Bracket";
import { getVillages } from "../../api/api"; // API 함수 가져오기

function Town({ selectedTown, setSelectedTown }) {
  const [towns, setTowns] = useState([]); // API에서 받은 마을 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태

  useEffect(() => {
    const fetchVillages = async () => {
      try {
        const data = await getVillages(); // API 호출
        setTowns(data); // 가져온 데이터를 상태에 저장
      } catch (error) {
        console.error("Failed to fetch villages:", error);
      } finally {
        setLoading(false); // 로딩 종료
      }
    };

    fetchVillages();
  }, []);

  const handleSelectTown = (town) => {
    setSelectedTown(town);
  };

  if (loading) {
    return <div>Loading...</div>; // 로딩 중 표시
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-center h-24 py-6 mt-6">
        <Bracket text="최금자" />
        <h3 className="text-3xl font-bold">
          님이 살고 있는 곳은 어떤 마을인가요?
        </h3>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {towns.map((town) => (
          <div
            key={town.village_id}
            onClick={() => handleSelectTown(town)}
            className={`p-2 pb-4 rounded-xl cursor-pointer ${
              selectedTown?.village_id === town.village_id
                ? "bg-primary-input"
                : "bg-white"
            }`}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <div className="h-32 w-full bg-gray-300 rounded-xl overflow-hidden mb-2">
              <img
                className="w-full h-full object-cover"
                src={town.village_image}
                alt={town.village_name}
              />
            </div>
            <h3 className="text-xl font-semibold">{town.village_name}</h3>
            <p className="text-base font-normal">{town.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Town;
