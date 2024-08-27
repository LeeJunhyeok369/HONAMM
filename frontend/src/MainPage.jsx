import Banner from "./components/Main/Banner";
import Review from "./components/Review";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaHandHoldingWater } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { MdNaturePeople } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaHand } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
function MainPage() {
  const sectionStyle = {
    position: "relative",
    background: `
      linear-gradient(to bottom, transparent 18px, #ddd 18px) 0 0 / 100vw 20px repeat-y,
      linear-gradient(to right, transparent 18px, #ddd 18px) 0 0 / 20px 1200px repeat-x
      white
    `,
    width: "100%",
    height: "600px",
    padding: "10px 20px",
    boxSizing: "border-box",
    overflow: "hidden",
  };

  return (
    <div>
      <Banner />
      <div className="flex items-center justify-center max-w-[1140px] mx-auto h-96">
        <div className="w-1/2 text-lg">
          <h3 className="text-4xl mb-4 font-bold flex items-center">
            "<img className="mx-2 h-6" src="./images/logo.svg" alt="" />" 이란?
          </h3>
          <p>"HONAM"과 "M"을 결합으로, 호남에서의</p>
          <p>힐링, 새로운 만남의 "Moment(순간)"를 창조를 뜻합니다.</p>
          <br />
          <p>Honamm은 호남의 자연과 문화를 통해 게스트에게는 힐링,</p>
          <p>호스트에게는 새로운 관계와 수익을 제공해줍니다.</p>
        </div>
        <div className="w-1/2">
          <img className="h-72 mx-auto" src="./images/mainMap.png" alt="" />
        </div>
      </div>
      <div className="w-full h-96 bg-[#253808] text-white text-centerr">
        <div className="max-w-[1140px] mx-auto">
          <div className="py-8 text-2xl font-bold">
            {" "}
            <h3 className="text-center">HONAM 으로 떠나는 것을 통해</h3>
            <h3 className="text-center">당신이 얻게 될 가치</h3>
          </div>
          <ul className="flex items-center justify-cente">
            <li className="w-1/4 flex items-center justify-center flex-col">
              <MdConnectWithoutContact size={110} />
              <h3 className="text-lg font-bold">지역 주민과의 교류</h3>
              <p>호남의 어르신들과 함께하는 </p>
              <p>경험의 공유, 새로운 관계 형성</p>
            </li>
            <li className="w-1/4 flex items-center justify-center flex-col">
              <FaHandHoldingWater size={110} />
              <h3 className="text-lg font-bold">다양한 이색 체험 </h3>
              <p>전통 음식 만들기, </p>
              <p>농작물 수확, 물고기 잡기 등</p>
            </li>
            <li className="w-1/4 flex items-center justify-center flex-col">
              <MdFoodBank size={110} />
              <h3 className="text-lg font-bold">현지 음식과 숙박 제공 </h3>
              <p>지역 특산물로 만든 식사를</p>
              <p>경험할 수 있음 </p>
            </li>
            <li className="w-1/4 flex items-center justify-center flex-col">
              <MdNaturePeople size={110} />
              <h3 className="text-lg font-bold">자연 속에서의 휴식</h3>
              <p>자연을 느끼며 재충전할 수 있는 </p>
              <p>휴식의 기회를 제공</p>
            </li>
          </ul>
        </div>
      </div>
      <div style={sectionStyle}>
        <div className="flex items-center justify-between w-[1140px] h-full mx-auto">
          <Review
            date="2024. 08. 27"
            text="이틀동안 
너무 행복했습니다^^"
            name="배선우"
            image="review1.jpg"
          />
          <Review
            date="2024. 03. 18"
            text="할머니 사랑합니다!"
            name="김종민"
            image="review2.jpg"
          />
          <Review
            date="2024. 08. 27"
            text="2번째 엄마가 생겼네요 
호호"
            name="최수연"
            image="review3.jpg"
          />
        </div>
      </div>

      <div className="w-full h-96 bg-[#253808] text-white text-centerr">
        <div className="max-w-[1140px] mx-auto">
          <div className="py-8 text-2xl font-bold">
            <h3 className="text-center">
              호스팅(다른사람을 집에 초대하는 것)을 통해
            </h3>
            <h3 className="text-center">당신이 얻게 될 가치</h3>
          </div>
          <ul className="flex items-center justify-cente">
            <li className="w-1/3 flex items-center justify-center flex-col">
              <HiMiniUserGroup size={110} />
              <h3 className="text-lg font-bold">새로운 가족</h3>
              <p>일주일 이상 함께하며</p>
              <p>행복을 찾을 수 있는 기회</p>
            </li>
            <li className="w-1/3 flex items-center justify-center flex-col">
              <FaHand size={110} />
              <h3 className="text-lg font-bold">일손 부족 해결 </h3>
              <p>당신의 집에 머무는 동안 </p>
              <p>함께 일하는 일손 가능 </p>
            </li>
            <li className="w-1/3 flex items-center justify-center flex-col">
              <GiReceiveMoney size={110} />
              <h3 className="text-lg font-bold">금전적인 가치</h3>
              <p>호남에서의 새로운 경험을 </p>
              <p>제공하고 수익 창출 가능</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[500px]">
        <img
          className="w-full h-full object-cover"
          src="./images/reviews.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default MainPage;
