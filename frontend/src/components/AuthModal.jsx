import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "../redux/modalSlice";
import Bracket from "./Bracket";

function AuthModal() {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[100]">
      <div
        className="absolute left-0 top-0 w-full h-full bg-black opacity-60"
        onClick={handleClose}
      ></div>
      <div className="absolute left-1/2 top-1/2 w-96 p-2.5 flex flex-col items-center justify-center bg-white transform -translate-x-1/2 -translate-y-1/2 text-xs rounded-lg">
        <MdClose
          size={32}
          className="mr-auto cursor-pointer"
          color="#898989"
          onClick={handleClose}
        />
        <div className="flex items-center text-3xl font-bold">
          <Bracket text="로그인" /> <h3 className="ml-2">호남</h3>
        </div>
        <label className="w-full font-bold mt-6 mb-1" htmlFor="아이디">
          아이디
        </label>
        <input
          className="w-full border border-gray-300 h-9 px-3 rounded-md"
          type="text"
          placeholder="영어 소문자 및 숫자로만, 4~16자리"
        />
        <label className="w-full font-bold mt-6 mb-1" htmlFor="비밀번호">
          비밀번호
        </label>
        <input
          className="w-full border border-gray-300 h-9 px-3 rounded-md"
          type="password"
          placeholder="영어 소문자 및 숫자로만, 4~16자리"
        />
        <button className="w-full h-12 bg-primary-limeGreen text-white text-center text-base rounded-md mt-5">
          로그인
        </button>
        <span>
          아직 회원이 아닌가요?{" "}
          <button
            className="text-primary-limeGreen"
            onClick={() => {
              dispatch(closeModal());
              dispatch(openModal("signup"));
            }}
          >
            회원가입
          </button>
        </span>
      </div>
    </div>
  );
}

export default AuthModal;
