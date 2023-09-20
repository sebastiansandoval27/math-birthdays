import { useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Tooltip from '../Tooltip/Tooltip';
import SelectorItem from './SelectorItem';
import { calculateMathBirthday } from '../../utils/mathBirthday';

const DropdownPicker = () => {
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
              <h3 className="font-bold text-secondary mt-2">Dropdowns Option</h3>
              <p className="mt-2">
                <span className="font-bold text-black text-opacity-50">
                  In this example you can choose the day, month and year from the dropdowns.
                </span>
              </p>
            </>
          }
          onClick={() => setShowTooltip(false)}
        />
      )}
      <section className="custom my-3 flex flex-col items-center justify-center py-3 w-full lg:w-96 border-2 border-primary rounded-lg px-3 relative">
        <span className="absolute top-2 right-2 w-7 h-7 cursor-pointer" onClick={() => setShowTooltip(true)}>
          <AiOutlineInfoCircle className="text-primary w-full h-full" />
        </span>
        <h3 className="font-bold text-2xl">Math Birthday</h3>
        <hr className="w-full" />
        <span className="w-full text-center my-2 text-sm font-bold">(Dropdowns Option)</span>
        <hr className="w-full" />
        <p className="my-2 text-gray-500 text-center">
          Select your birthday date and discover your <span className="font-black">Math Birthday</span>
        </p>
        <div className="selector w-full grid grid-cols-3 gap-3 mt-3">
          <div className="day">
            <SelectorItem prev={1} current={2} next={3} name="day" />
          </div>
          <div className="month">
            <SelectorItem prev={8} current={9} next={10} name="month" />
          </div>
          <div className="year">
            <SelectorItem prev={22} current={23} next={24} name="year" />
          </div>
        </div>
        <div className="mt-2 w-full flex justify-center items-center py-3 bg-secondary rounded-xl bg-opacity-50">
          <h3 className="ml-3 font-bold text-white text-xl">{calculateMathBirthday(new Date()).formatInWords}</h3>
        </div>
      </section>
    </>
  );
};

export default DropdownPicker;
