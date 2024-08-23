function Footer() {
  return (
    <div className="bg-primary-footer w-full h-auto text-xs">
      <div className="max-w-[1280px] m-auto flex flex-col justify-center py-14 text-white">
        <h3 className="text-primary-footerText text-lg mb-5">
          호남을 상징하는 형용사
        </h3>
        <ul className="flex mb-5 justify-between w-full">
          <li className="w-1/5">물이 흐르는</li>
          <li className="w-1/5">산에 둘러쌓인</li>
          <li className="w-1/5">광활한 평야</li>
          <li className="w-1/5">시원한 바다</li>
          <li className="w-1/5">바다에 들러쌓인</li>
        </ul>
        <div className="h-[1px] w-full bg-primary-footerText mb-3"></div>
        <h3 className="text-primary-footerText text-lg mb-5">메뉴</h3>
        <ul className="flex mb-5 justify-between w-full">
          <li className="w-1/5">프로필</li>
          <li className="w-1/5">최근 방문기록</li>
          <li className="w-1/5">내 사진첩 보기</li>
          <li className="w-1/5">도움말 센터</li>
          <li className="w-1/5"></li>
        </ul>
        <ul className="flex mb-5 justify-between w-full">
          <li className="w-1/5">내 예약 기록</li>
          <li className="w-1/5">즐겨찾기</li>
          <li className="w-1/5"></li>
          <li className="w-1/5">예약 취소 옵션</li>
          <li className="w-1/5"></li>
        </ul>
        <div className="h-[1px] w-full bg-primary-footerText mb-3"></div>
        <p className="mb-1">©parentheses_honam</p>
        <div className="flex">
          <a href="#" className="underline decoration-white">
            개인정보 처리 방침
          </a>{" "}
          <a href="#" className="underline decoration-white ml-3">
            이용약관
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
