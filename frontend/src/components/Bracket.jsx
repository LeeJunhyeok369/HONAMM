function Bracket({ text = "", isSmall = false }) {
  return (
    <div className="flex items-center justify-between">
      <img
        src="/icons/bracket-left.svg"
        alt="Left Bracket"
        className={isSmall ? "h-10 w-auto" : "h-22 w-auto"} // Adjusted height for small version
      />
      <p className={isSmall ? "text-sm min-w-10 px-2" : "min-w-16 px-4"}>
        {text}
      </p>{" "}
      {/* Adjusted text size and padding for small version */}
      <img
        src="/icons/bracket-right.svg"
        alt="Right Bracket"
        className={isSmall ? "h-10 w-auto" : "h-22 w-auto"} // Adjusted height for small version
      />
    </div>
  );
}

export default Bracket;
