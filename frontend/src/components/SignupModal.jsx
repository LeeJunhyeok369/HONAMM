import { useMutation } from "@tanstack/react-query";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { register } from "../api/api";
import { closeModal, openModal } from "../redux/modalSlice";
import Bracket from "./Bracket";

function SignupModal() {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  // useMutation을 객체 형식으로 설정
  const mutation = useMutation({
    mutationFn: register,
    onSuccess: () => {
      Swal.fire({
        icon: "info",
        title: "회원가입이 완료되었습니다.",
        text: "로그인 후 이용해주세요.",
      });
      dispatch(closeModal());
      dispatch(openModal("login"));
    },
    onError: (error) => {
      Swal.fire({
        icon: "warning",
        title: "유효성 검사가 틀렸습니다.",
        text: "다시 한번 확인해주세요.",
      });
      console.error("Registration failed:", error);
    },
  });

  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const username = e.target.username.value;
    const password1 = e.target.password1.value;
    const password2 = e.target.password2.value;
    mutation.mutate({ username, email, password1, password2 });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[100]">
      <div
        className="absolute left-0 top-0 w-full h-full bg-black opacity-60"
        onClick={handleClose}
      ></div>
      <div className="absolute left-1/2 top-1/2 w-96 p-2.5 bg-white transform -translate-x-1/2 -translate-y-1/2 text-xs rounded-lg">
        <MdClose
          size={32}
          className="mr-auto cursor-pointer"
          color="#898989"
          onClick={handleClose}
        />
        <form
          onSubmit={handleSignup}
          className="flex flex-col items-center justify-center w-full"
        >
          <div className="flex items-center text-3xl font-bold">
            <Bracket text="회원가입" /> <h3 className="ml-2">호남</h3>
          </div>
          <label className="w-full font-bold mt-6 mb-1" htmlFor="email">
            이메일
          </label>
          <input
            className="w-full border border-gray-300 h-9 px-3 rounded-md"
            type="email"
            name="email"
            placeholder="example@domain.com"
          />
          <label className="w-full font-bold mt-6 mb-1" htmlFor="username">
            이름
          </label>
          <input
            className="w-full border border-gray-300 h-9 px-3 rounded-md"
            type="text"
            name="username"
            placeholder="이름을 작성해주세요."
          />
          <label className="w-full font-bold mt-6 mb-1" htmlFor="password1">
            비밀번호
          </label>
          <input
            className="w-full border border-gray-300 h-9 px-3 rounded-md"
            type="password"
            name="password1"
            placeholder="영어 소문자 및 숫자로만, 4~16자리"
          />
          <label className="w-full font-bold mt-6 mb-1" htmlFor="password2">
            비밀번호 확인
          </label>
          <input
            className="w-full border border-gray-300 h-9 px-3 rounded-md"
            type="password"
            name="password2"
            placeholder="영어 소문자 및 숫자로만, 4~16자리"
          />
          <button
            type="submit"
            className="w-full h-12 bg-primary-limeGreen text-white text-center text-base rounded-md mt-5"
          >
            회원가입
          </button>
          <span>
            이미 계정이 있으신가요?{" "}
            <button
              className="text-primary-limeGreen"
              onClick={() => {
                dispatch(closeModal());
                dispatch(openModal("login"));
              }}
            >
              로그인
            </button>
          </span>
        </form>
      </div>
    </div>
  );
}

export default SignupModal;
