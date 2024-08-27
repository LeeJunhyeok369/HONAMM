import { IoSearchSharp } from "react-icons/io5";
import HeaderMenuBtn from "./../components/HeaderMenuBtn";

function Header({ search = false }) {
  return (
    <div className="h-32 w-full">
      <div className="w-[1140px] h-full m-auto flex items-center justify-between">
        <a href="/">
          <img src="/images/logo.svg" alt="logo" />
        </a>
        {search && (
          <div className="flex items-center w-[45rem] p-2 pl-5 border border-primary-limeGreen rounded-full cursor-pointer">
            <div className="flex-grow border-r border-gray-300 text-gray-300">
              호남
            </div>
            <div className="pl-3 flex-grow text-gray-300">호스트</div>
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary-limeGreen">
              <IoSearchSharp color="#ffffff" size={20} />
            </div>
          </div>
        )}
        <HeaderMenuBtn />
      </div>
    </div>
  );
}

export default Header;
