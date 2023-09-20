import 'react-datepicker/dist/react-datepicker.css';
import './inputsPicker.styles.css';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useState } from 'react';
import Tooltip from '../Tooltip/Tooltip';
import { calculateMathBirthday } from '../../utils/mathBirthday';
import Input from './Input';

const InputsPicker = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      {showTooltip && (
        <Tooltip
          text={
            <>
              <span className="w-full text-center flex justify-end">
                <h4 className="text-black border-2 border-stone-400 rounded-md px-3 py-1">Currently Disabled</h4>
              </span>
              <h3 className="font-bold text-secondary mt-1">Inputs Option</h3>
              <p className="mt-2">
                <span className="font-bold text-black text-opacity-50">
                  In this example you can choose the day, month and year from the inputs.
                </span>
              </p>
            </>
          }
          onClick={() => setShowTooltip(false)}
        />
      )}
      <section className="inputs my-3 flex flex-col items-center justify-center py-3 lg:w-96 border-2 border-primary rounded-lg px-3 relative">
        <span className="absolute top-2 right-2 w-7 h-7 cursor-pointer" onClick={() => setShowTooltip(true)}>
          <AiOutlineInfoCircle className="text-primary w-full h-full" />
        </span>
        <h3 className="font-bold text-2xl">Math Birthday</h3>
        <hr className="w-full" />
        <span className="w-full text-center my-2 text-sm font-bold">(Inputs Option)</span>
        <hr className="w-full" />
        <p className="my-2 text-gray-500 text-center">
          Select your birthday date and discover your <span className="font-black">Math Birthday</span>
        </p>
        <div className="w-full flex justify-center items-center gap-5 ">
          <div className="input-container">
            <span className="text-center text-black text-opacity-40 font-bold">Day</span>
            <Input placeholder="day" max={new Date().getDate()} value={new Date().getDate()} />
          </div>
          <div className="input-container">
            <span className="text-center text-black text-opacity-40 font-bold">Month</span>
            <Input placeholder="month" max={new Date().getMonth() + 1} value={new Date().getMonth() + 1} />
          </div>
          <div className="input-container">
            <span className="text-center text-black text-opacity-40 font-bold">Year</span>
            <Input placeholder="year" max={new Date().getFullYear()} value={new Date().getFullYear()} />
          </div>
        </div>
        <div className="mt-2 w-full flex justify-center items-center py-3 bg-secondary rounded-xl bg-opacity-50">
          <h3 className="ml-3 font-bold text-white text-xl">{calculateMathBirthday(new Date()).formatInWords}</h3>
        </div>
      </section>
    </>
  );
};

export default InputsPicker;
