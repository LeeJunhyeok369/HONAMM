function Review({ date = "0000. 00. 00", text = "text", name = "이름" }) {
  return (
    <div
      className="relative px-3 py-2 bg-white w-72 rounded-lg"
      style={{ boxShadow: "0px 4px 56px 0px #00000040" }}
    >
      <img
        className="absolute -top-6 left-1/2 w-6 h-12 transform -translate-x-1/2 object-cover"
        src="/images/pin.png"
        alt=""
      />
      <div className="mt-6 w-full h-80 bg-gray-100 "></div>
      <div className="flex items-center">
        <span>{date}</span>
        <p className="ml-2">{name}</p>
      </div>
      <p className="text-xl">{text}</p>
    </div>
  );
}

export default Review;
