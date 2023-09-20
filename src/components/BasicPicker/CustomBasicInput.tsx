import { forwardRef } from 'react';
import { BsCalendarDate } from 'react-icons/bs';

const CustomBasicInput = forwardRef(({ value, onClick }: any, ref: any) => {
  return (
    <button
      className="custom flex gap-3 justify-center items-center border-none px-4 py-2 rounded-lg text-xl font-bold bg-slate-100 h-11 focus:outline-none shadow-lg my-2"
      onClick={onClick}
      ref={ref}
    >
      {value ? value : 'Select date'}
      <span className="text-purple-500 font-bold text-2xl">
        <BsCalendarDate />
      </span>
    </button>
  );
});

export default CustomBasicInput;
