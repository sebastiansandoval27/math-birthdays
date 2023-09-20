interface Props {
  placeholder: string;
  value: number;
  max: number;
}
const Input = ({ placeholder, value, max }: Props) => {
  return (
    <input
      type="number"
      placeholder={placeholder}
      disabled
      className="w-full border-2 border-primary rounded-md px-2 text-[rgba(0,0,0,0.4)]"
      max={max}
      value={value}
    />
  );
};

export default Input;
