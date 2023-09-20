interface TooltipProps {
  text: string | JSX.Element;
  onClick?: () => void;
}
const Tooltip = ({ text, onClick }: TooltipProps) => {
  return (
    <div className="w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center fixed top-0 left-0 z-50 p-3">
      <div className="content p-5 bg-white rounded-lg flex flex-col items-center justify-center xl:w-96">
        {text}
        <button className="w-full h-9 bg-primary text-white font-black mt-2 rounded-lg" onClick={onClick}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Tooltip;
