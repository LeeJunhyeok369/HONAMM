import Header from "../../layout/Header";

function Banner() {
  return (
    <div className="h-screen w-full relative bg-primary-lightGray">
      <div className="z-[11] absolute left-0 top-0 h-full w-[58%] overflow-hidden transition-all duration-100x ease-in-out hover:z-[11]">
        <div className="absolute w-full h-full left-0 top-0 z-[-2]">
          <img
            src="/images/banner1.png"
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full h-full pl-[calc(100%-680px)] flex flex-col justify-center z-[-1] text-3xl font-bold">
          <p className="text-white">바쁜 일상에서 벗어난</p>
          <p className="text-white flex">
            <span className="text-yellow-200">
              (<span className="text-white min-w-16 inline-block"></span>)
            </span>{" "}
            호남에서의 힐링, 어떠신가요?
          </p>
          <a
            href="/town"
            className="inline-block self-start max-w-max mt-8 py-2 px-4 bg-[#FFFFFFD9] rounded-3xl"
          >
            좋아요
          </a>
        </div>
      </div>

      <div className="z-[10] absolute right-0 top-0 h-full w-[58%] overflow-hidden transition-all duration-100 ease-in-out hover:z-[11]">
        <div className="absolute w-full h-full right-0 top-0 z-[-2]">
          <img
            src="/images/banner2.png"
            alt="banner"
            className="w-full h-full "
          />
        </div>

        <div className="w-full h-full pr-[calc(100%-680px)] flex flex-col justify-center z-[-1] text-3xl font-bold text-right">
          <p className="text-white flex justify-end">
            {" "}
            <span className="text-yellow-200">
              (<span className="text-white min-w-16 inline-block"></span>)
            </span>{" "}
            호스트님 시골의 삶을
          </p>
          <p className="text-white "> 함께해보는 건 어떨까요?</p>
          <a
            href="/sirview"
            className="inline-block self-start max-w-max mt-8 ml-auto py-2 px-4 bg-[#FFFFFFD9] rounded-3xl"
          >
            좋아요
          </a>
        </div>
      </div>

      <div className="absolute top-0 right-[50%] z-50 translate-x-1/2">
        <Header />
      </div>
    </div>
  );
}

export default Banner;
