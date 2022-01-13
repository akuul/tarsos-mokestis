import Checkboxes from './Checkboxes';
import EuroInputs from './EuroInputs';
import PollutionInput from './PollutionInput';

const Inputs = () => {
  return (
    <main className='flex flex-col items-center pt-40'>
      <Checkboxes />
      <PollutionInput />
      <EuroInputs />
    </main>
  );
};

export default Inputs;
