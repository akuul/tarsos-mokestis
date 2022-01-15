import Checkboxes from './Checkboxes';
import EuroInputs from './EuroInputs';
import PollutionInput from './PollutionInput';

const Inputs = () => {
  return (
    <div className='flex flex-col gap-5 items-center justify-center md:flex-row md:gap-10'>
      <Checkboxes />
      <div className='flex flex-col gap-5 items-center justify-center md:gap-8'>
        <PollutionInput />
        <EuroInputs />
      </div>
    </div>
  );
};

export default Inputs;
