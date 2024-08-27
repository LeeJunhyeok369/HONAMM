import { AiOutlineHome } from "react-icons/ai";
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
  const [townSelection, setTownSelection] = useState(null);
  const [introContent, setIntroContent] = useState({ image: null, text: "" }); // Combined state
  const [homeImage, setHomeImage] = useState(null);
  const [info, setInfo] = useState({
    faceImage: null,
    phoneNumber: "",
    homePhone: "",
    guardianPhone: "",
    details: "",
  });

  const navigate = useNavigate();

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
    <Town
      key="Town"
      selectedTown={townSelection}
      setSelectedTown={setTownSelection}
    />,
    <Work key="Work" initialWork={workSelection} onSelect={setWorkSelection} />,
    // <Check
    //   key="Check"
    //   name={name}
    //   gender={gender}
    //   personalitySelections={personalitySelections}
    //   traitSelection={traitSelection}
    //   workSelection={workSelection}
    // />,
    <Intrduce
      key="Intrduce"
      introContent={introContent}
      setIntroContent={setIntroContent}
    />,
    <Home
      key="Home"
      selectedImage={homeImage}
      setSelectedImage={setHomeImage}
    />,
    <Info key="Info" info={info} setInfo={setInfo} />, // Pass props here
    <Last key="Last" />,
  ];

  const validateCurrentPage = () => {
    switch (currentPage) {
      case 0: // Name Page
        if (!name) {
          Swal.fire({
            icon: "info",
            title: "이름을 입력해 주세요.",
            text: "빈 칸을 채워주세요.",
          });
          return false;
        }
        break;
      case 1: // Gender Page
        if (!gender) {
          Swal.fire({
            icon: "info",
            title: "성별을 선택해 주세요.",
            text: "빈 칸을 채워주세요.",
          });
          return false;
        }
        break;
      case 2: // Personality Page
        if (personalitySelections.length === 0) {
          Swal.fire({
            icon: "info",
            title: "성격을 선택해 주세요.",
            text: "빈 칸을 채워주세요.",
          });
          return false;
        }
        break;
      case 3: // Trait Page
        if (!traitSelection) {
          Swal.fire({
            icon: "info",
            title: "특징을 선택해 주세요.",
            text: "빈 칸을 채워주세요.",
          });
          return false;
        }
        break;
      case 4: // Town Page
        if (!townSelection) {
          Swal.fire({
            icon: "info",
            title: "마을을 선택해 주세요.",
            text: "빈 칸을 채워주세요.",
          });
          return false;
        }
        break;
      case 5: // Work Page
        if (!workSelection) {
          Swal.fire({
            icon: "info",
            title: "작업을 선택해 주세요.",
            text: "빈 칸을 채워주세요.",
          });
          return false;
        }
        break;
      case 6: // Introductory Content Page
        if (!introContent.image && !introContent.text) {
          Swal.fire({
            icon: "info",
            title: "사진이나 글을 입력해 주세요.",
            text: "빈 칸을 채워주세요.",
          });
          return false;
        }
        break;
      case 7: // Home Image Page
        if (!homeImage) {
          Swal.fire({
            icon: "info",
            title: "집 사진을 업로드해 주세요.",
            text: "빈 칸을 채워주세요.",
          });
          return false;
        }
        break;
      case 8: // Info Page
        if (
          !info.faceImage ||
          !info.phoneNumber ||
          !info.homePhone ||
          !info.guardianPhone ||
          !info.details
        ) {
          Swal.fire({
            icon: "info",
            title: "모든 정보를 입력해 주세요.",
            text: "빈 칸을 채워주세요.",
          });
          return false;
        }
        break;
      default:
        break;
    }
    return true;
  };

  const handleNext = () => {
    if (validateCurrentPage()) {
      if (currentPage === forms.length - 1) {
        Swal.fire({
          icon: "success",
          title: "제출이 완료되었습니다.",
          text: "신청 해주셔서 감사합니다.",
          confirmButtonText: "확인",
          preConfirm: () => {
            navigate("/");
          },
        });
      } else {
        setCurrentPage((prev) => Math.min(prev + 1, forms.length - 1));
      }
    }
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative w-screen h-screen flex flex-col">
      {/* Top navigation bar */}
      <div className="w-[1140px] h-24 mx-auto flex items-center justify-between px-4">
        <a
          href="/"
          className="flex flex-col items-center text-lg justify-center"
        >
          <AiOutlineHome size={48} className="mr-2" />
        </a>
        <button
          onClick={() =>
            Swal.fire({
              icon: "info",
              title: "010-0000-0000로 전화주세요.",
              text: "상담원이 상세하게 안내드리겠습니다.",
            })
          }
          className="text-sm"
        >
          <img
            className="w-12 h-12 mx-auto"
            src="/images/help.png"
            alt="help"
          />
          도움요청
        </button>
      </div>

      {/* Form content */}
      <form action="" className="flex-grow overflow-auto">
        <div className="flex-grow bg-white h-full flex flex-col items-center justify-center text-3xl font-bold">
          {forms[currentPage]}
        </div>
      </form>

      {/* Progress bar */}
      <div className="w-full flex items-center justify-center gap-2.5 mt-2">
        {forms.map((_, index) => (
          <div
            key={index}
            className={`flex-grow h-2 ${
              index <= currentPage ? "bg-primary-lightLime" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      {/* Navigation buttons */}
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
