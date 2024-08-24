function Bracket({ text = "" }) {
  return (
    <div className="flex items-center justify-between">
      <img
        src="/icons/bracket-left.svg"
        alt="Left Bracket"
        className="h-22 w-auto"
      />
      <p className="min-w-16 px-4">{text}</p>
      <img
        src="/icons/bracket-right.svg"
        alt="Right Bracket"
        className="h-22 w-auto"
      />
    </div>
  );
}

export default Bracket;
