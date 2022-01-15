import Checkboxes from './Checkboxes';
import EuroInputs from './EuroInputs';
import PollutionInput from './PollutionInput';

const Inputs = () => {
  return (
    <div className='flex gap-10 items-center justify-center'>
      <Checkboxes />
      <div className='flex flex-col gap-8 items-center justify-center'>
        <PollutionInput />
        <EuroInputs />
      </div>
    </div>
  );
};

export default Inputs;
