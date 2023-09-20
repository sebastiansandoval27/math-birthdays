import { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CustomBasicInput from './CustomBasicInput';
import './basicDatePicker.styles.css';
import { calculateMathBirthday } from '../../utils/mathBirthday';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Tooltip from '../Tooltip/Tooltip';

const BasicDatePicker = () => {
  const date = useRef(null);
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      {showTooltip && (
        <Tooltip
          text={
            <>
              <h3 className="font-bold text-secondary">Input with calendar Option</h3>
              <p className="mt-2">
                <span className="font-bold text-black text-opacity-50">
                  In this example you can click on the date or the calendar icon to open the calendar.
                </span>
              </p>
            </>
          }
          onClick={() => setShowTooltip(false)}
        />
      )}
      <section className="basic my-3 flex flex-col items-center justify-center py-3 w-full h-80 lg:w-96 border-2 border-primary rounded-lg px-3 relative">
        <span className="absolute top-2 right-2 w-7 h-7 cursor-pointer" onClick={() => setShowTooltip(true)}>
          <AiOutlineInfoCircle className="text-primary w-full h-full" />
        </span>
        <h3 className="font-bold text-2xl">Math Birthday</h3>
        <hr className="w-full" />
        <span className="w-full text-center my-2 text-sm font-bold">(Input with calendar Option)</span>
        <hr className="w-full" />
        <p className="my-2 text-gray-500 text-center">
          Select your birthday date and discover your <span className="font-black">Math Birthday</span>
        </p>
        <DatePicker
          ref={date}
          selected={startDate}
          onInputClick={() => setIsOpen(!isOpen)}
          allowSameDay={false}
          dateFormat="dd/MM/yyyy"
          maxDate={new Date()}
          customInput={<CustomBasicInput />}
          showYearDropdown
          dateFormatCalendar="MMMM"
          yearDropdownItemNumber={100}
          scrollableYearDropdown
          className="custom-calendar"
          open={isOpen}
          onChange={(date) => {
            if (date) setStartDate(date);
            setIsOpen(false);
          }}
        />
        <span>Your next math birthday will be on:</span>
        <div className="mt-2 w-full flex justify-center items-center py-3 bg-secondary rounded-xl">
          <h3 className="ml-3 font-bold text-white text-xl">
            {startDate && calculateMathBirthday(startDate).formatInWords}
          </h3>
        </div>
      </section>
    </>
  );
};

export default BasicDatePicker;
