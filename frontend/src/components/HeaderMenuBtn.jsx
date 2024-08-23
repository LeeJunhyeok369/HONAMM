import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";

function HeaderMenuBtn(isLogin = false) {
  const handleMenuClick = () => {
    let menuList;
    if (isLogin) {
      menuList = [{ text: "로그아웃", url: "/logout" }];
    } else {
      menuList = [
        { text: "로그인", url: "/login" },
        { text: "회원가입", url: "/join" },
      ];
    }
    console.log(menuList);
  };

  return (
    <div
      className={
        "px-4 py-2 flex border-[2px] border-primary-lightGray rounded-2xl cursor-pointer"
      }
      onClick={handleMenuClick}
    >
      <FaRegCircleUser className="text-xl text-primary-lightGray" />
      <IoMdMenu className="text-xl text-primary-lightGray ml-2" />
    </div>
  );
}

export default HeaderMenuBtn;
