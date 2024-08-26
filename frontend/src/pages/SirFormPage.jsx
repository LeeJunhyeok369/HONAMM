import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Check from "../components/SirForm/Check";
import Gender from "../components/SirForm/Gender";
import Home from "../components/SirForm/Home";
import Info from "../components/SirForm/Info";
import Intrduce from "../components/SirForm/Intrduce";
import Last from "../components/SirForm/Last";
import Name from "../components/SirForm/Name";
import Personality from "../components/SirForm/Personality";
import Town from "../components/SirForm/Town";
import Trait from "../components/SirForm/Trait";
import Work from "../components/SirForm/Work";

function SirFormPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [name, setName] = useState("");
  const [gender, setGender] = useState(null);
  const [personalitySelections, setPersonalitySelections] = useState([]);
  const [traitSelection, setTraitSelection] = useState(null);
  const [workSelection, setWorkSelection] = useState(null);

  const navigate = useNavigate(); // Use useNavigate from react-router-dom v6

  const forms = [
    <Name key="Name" name={name} setName={setName} />,
    <Gender
      key="Gender"
      selectedGender={gender}
      setSelectedGender={setGender}
    />,
    <Personality
      key="Personality"
      initialSelections={personalitySelections.map((cat) => cat.text)}
      onSelect={setPersonalitySelections}
    />,
    <Trait
      key="Trait"
      selections={personalitySelections}
      initialTrait={traitSelection}
      onSelect={setTraitSelection}
    />,
    <Town key="Town" />,
    <Work key="Work" initialWork={workSelection} onSelect={setWorkSelection} />,
    <Check
      key="Check"
      name={name}
      gender={gender}
      personalitySelections={personalitySelections}
      traitSelection={traitSelection}
      workSelection={workSelection}
    />,
    <Intrduce key="Intrduce" />,
    <Home key="Home" />,
    <Info key="Info" />,
    <Last key="Last" />,
  ];

  const handleNext = () => {
    if (currentPage === forms.length - 1) {
      navigate("/sirprofile");
    } else {
      setCurrentPage((prev) => Math.min(prev + 1, forms.length - 1));
    }
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative w-screen h-screen flex flex-col">
      <div className="w-[1280px] h-14 mx-auto flex items-end justify-between">
        <a href="/">홈</a>
        <button
          onClick={() =>
            Swal.fire({
              icon: "info",
              title: "010-0000-0000로 전화주세요.",
              text: "상담원이 상세하게 안내드리겠습니다.",
            })
          }
        >
          도움
        </button>
      </div>

      <form action="" className="flex-grow overflow-auto">
        <div className="flex-grow bg-white h-full flex flex-col items-center justify-center text-3xl font-bold">
          {forms[currentPage]}
        </div>
      </form>

      <div className="w-full flex items-center justify-center gap-2.5 mt-2">
        {forms.map((_, index) => (
          <div
            key={index}
            className={`flex-grow h-2 ${
              index === currentPage ? "bg-primary-lightLime" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      <div className="w-full flex items-center justify-center mt-2">
        {currentPage > 0 && (
          <div
            className="flex-grow text-xl h-16 bg-primary-mediumGray font-bold text-center flex items-center justify-center cursor-pointer"
            onClick={handlePrevious}
          >
            이전
          </div>
        )}
        <div
          className={`flex-grow text-xl h-16 ${
            currentPage === forms.length - 1
              ? "bg-primary-lightLime"
              : "bg-primary-lightLime"
          } font-bold text-center flex items-center justify-center cursor-pointer`}
          onClick={handleNext}
        >
          {currentPage === forms.length - 1 ? "제출" : "다음"}
        </div>
      </div>
    </div>
  );
}

export default SirFormPage;
