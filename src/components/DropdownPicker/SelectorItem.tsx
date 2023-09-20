import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

interface Props {
  prev: number;
  current: number;
  next: number;
  name: string;
}

const SelectorItem = ({ prev, current, next, name }: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h4 className="text-[rgba(0,0,0,0.5)] text-sm font-bold uppercase">{name}</h4>
      <span className="text-primary font-black mt-2">
        <AiOutlineUp />
      </span>
      <span className="text-[rgba(0,0,0,0.3)] opacity-60">{prev}</span>
      <hr className="w-[50%] border-t-2 border-primary opacity-50" />
      <span className="text-lg font-bold text-primary">{current}</span>
      <hr className="w-[50%] border-t-2 border-primary opacity-50" />
      <span className="text-[rgba(0,0,0,0.3)] opacity-60">{next}</span>
      <span className="text-primary font-black">
        <AiOutlineDown />
      </span>
    </div>
  );
};

export default SelectorItem;
