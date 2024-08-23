import HeaderMenuBtn from "../HeaderMenuBtn";

function Banner() {
  return (
    <div className="h-[800px] w-full relative bg-primary-lightGray">
      <div className="z-10 absolute left-0 top-0 h-full w-[55%] bg-primary-darkGray rounded-r-[400px] overflow-hidden">
        <div className="absolute w-full h-full left-0 top-0 z-[-2]">
          <img
            src="/images/banner1.png"
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full h-full pl-[calc(100%-648px)] flex flex-col justify-center z-[-1] text-4xl font-bold">
          <p className="text-white">바쁜 일상에서 벗어난</p>
          <p className="text-white">
            <span className="text-yellow-200">
              (<span></span>)
            </span>{" "}
            호남에서의 힐링, 어떠신가요?
          </p>
          <a
            href="#"
            className="inline-block self-start max-w-max mt-8 py-2 px-4 bg-[#FFFFFFD9] rounded-3xl"
          >
            좋아요
          </a>
        </div>
      </div>
      <div className="z-[9] absolute right-0 top-0 h-full w-[55%] bg-primary-oliveGray overflow-hidden">
        <div className="z-[10] absolute w-full h-full left-0 top-0 bg-[#333333] opacity-40"></div>
        <div className="absolute w-full h-full right-0 top-0 z-[-2]">
          <img
            src="/images/banner2.png"
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-full pr-[calc(100%-648px)] flex flex-col justify-center z-[-1] text-4xl font-bold text-right">
          <p className="text-white">시골에서의 삶이</p>
          <p className="text-white">
            <span className="text-yellow-200">
              (<span></span>)
            </span>{" "}
            하진 않으신가요?
          </p>
          <a
            href="#"
            className="inline-block self-start max-w-max mt-8 ml-auto py-2 px-4 bg-[#FFFFFFD9] rounded-3xl"
          >
            그렇습니다
          </a>
        </div>
      </div>
      <div className="absolute top-7 right-[calc(60%-700px)] z-50">
        <HeaderMenuBtn />
      </div>
    </div>
  );
}

export default Banner;
