import './App.css';
import Layout from './components/Layout';
import BasicDatePicker from './components/BasicPicker/BasicDatePicker';
import CustomDatePicker from './components/CustomPicker/CustomDatePicker';
import InputsPicker from './components/InputsPicker/InputsPicker';
import DropdownPicker from './components/DropdownPicker/DropdownPicker';
import Screen1 from './assets/screen1.webp';
import Screen2 from './assets/screen2.webp';

function App() {
  return (
    <Layout>
      <div className="w-full flex flex-col items-center justify-start pb-20">
        <h1 className="text-primary font-black text-xl">Math Birthday App</h1>
        <p className="text-center my-2 lg:text-lg">
          Celebrate your 'math birthdays' in a unique and fun way! At mathbirthdays.com, discover when your next 'math
          birthday' will be, that special date that occurs every 10^n days after your birth. Simply select your
          birthdate, and we'll tell you when your next mathematical milestone will arrive. Join us to explore the
          fascinating world of dates and mathematics. It's time to celebrate with numbers!
        </p>
        <div className="flex flex-col items-center justify-start">
          <BasicDatePicker />
          <CustomDatePicker />
          <InputsPicker />
          <DropdownPicker />
          <div className="flex flex-col justify-center items-center gap-3 p-2">
            <h4 className="text-lg font-bold text-center px-2 bg-secondary text-white rounded-lg my-2 py-3">
              First option of new Datepickers created with Figma <br />
              <span className="mt-2 text-sm text-opacity-50 opacity-70">
                You can select two dates simultaneously, and the system can process the results simultaneously
              </span>
            </h4>
            <img src={Screen1} alt="Screenshoot 1" />
          </div>
          <div className="flex flex-col justify-center items-center gap-3 p-2">
            <h4 className="text-lg font-bold text-center px-2 bg-secondary text-white rounded-lg my-2 py-3">
              Second option of new Datepickers created with Figma <br />
              <span className="mt-2 text-sm text-opacity-50 opacity-70">
                In this case, the design is different. It's the coolest and most beautiful design
              </span>
            </h4>
            <img src={Screen2} alt="Screenshoot 2" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
