import { useEffect, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { logout } from "../api/api";
import { logout as logoutAction } from "../redux/authSlice";
import { openModal } from "../redux/modalSlice";

function HeaderMenuBtn() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const isLogin = useSelector((state) => state.auth.isAuthenticated);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleModalOpen = (type) => {
    setIsMenuOpen(false);
    dispatch(openModal(type));
  };

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(logoutAction());
      Swal.fire({
        icon: "success",
        title: "로그아웃되었습니다.",
        text: "다음에 또 만나요!",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "로그아웃 실패",
        text: "다시 시도해주세요.",
      });
      console.error("Logout failed:", error);
    }
  };

  const getMenuList = () => {
    let menuList;
    if (isLogin) {
      menuList = [
        { text: "마이페이지", url: "/mypage" },
        // { text: "내 사진첩 보기", url: "/photos" },
        { text: "호스팅 신청하기", url: "/sirview" },
        { text: "로그아웃", url: handleLogout }, // 로그아웃 함수 연결
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
        { text: "로그인", url: () => handleModalOpen("login") },
        { text: "회원가입", url: () => handleModalOpen("signup") },
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
