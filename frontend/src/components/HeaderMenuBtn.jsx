import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { openModal } from "../redux/modalSlice";

function HeaderMenuBtn({ isLogin = false }) {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open state
  };

  const getMenuList = () => {
    let menuList;
    if (isLogin) {
      menuList = [
        { text: "내 예약 목록", url: "/reservations" },
        { text: "내 사진첩 보기", url: "/photos" },
        { text: "호스팅 신청하기", url: "/sirform" },
        { text: "로그아웃", url: "/logout" },
        {
          text: "어르신 도움",
          url: () =>
            Swal.fire({
              icon: "info",
              title: "010-0000-0000로 전화주세요.",
              text: "상담원이 상세하게 안내드리겠습니다.",
            }),
        },
      ];
    } else {
      menuList = [
        { text: "로그인", url: () => dispatch(openModal("login")) },
        { text: "회원가입", url: () => dispatch(openModal("signup")) },
        { text: "호스팅 신청하기", url: "/sirform" },
        {
          text: "어르신 도움",
          url: () =>
            Swal.fire({
              icon: "info",
              title: "010-0000-0000로 전화주세요.",
              text: "상담원이 상세하게 안내드리겠습니다.",
            }),
        },
      ];
    }

    return menuList.map((item, index) => (
      <li
        key={index}
        className={`${
          index !== menuList.length - 1 ? "border-b border-gray-300" : ""
        }`}
      >
        {typeof item.url === "string" ? (
          <a href={item.url} className="block py-2 text-center text-gray-700">
            {item.text}
          </a>
        ) : (
          <button
            onClick={item.url}
            className="block py-2 text-center w-full text-gray-700"
          >
            {item.text}
          </button>
        )}
      </li>
    ));
  };

  return (
    <div className="relative">
      <div
        className="px-4 py-2 flex border-[2px] border-primary-lightGray rounded-2xl cursor-pointer"
        onClick={handleMenuClick}
      >
        <FaRegCircleUser className="text-xl text-primary-lightGray" />
        <IoMdMenu className="text-xl text-primary-lightGray ml-2" />
      </div>

      {isMenuOpen && (
        <ul
          className="absolute right-0 top-10 w-40 h-auto bg-white rounded-lg shadow-md px-3"
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        >
          {getMenuList()}
        </ul>
      )}
    </div>
  );
}

export default HeaderMenuBtn;
