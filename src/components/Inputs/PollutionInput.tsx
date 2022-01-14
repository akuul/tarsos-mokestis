import { useDispatch } from 'react-redux';

import { addPollution } from '@/features/calculatorSlice';

import Input from './Input/Input';

const PollutionInput = () => {
  const dispatch = useDispatch();

  const onChangeUpdatePollution = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const value = parseInt(target.value);
    /* 
    TODO: number validation
    */
    dispatch(addPollution(value));
  };

  return (
    <div className='flex flex-col gap-2'>
      <Input
        onChangeUpdateState={onChangeUpdatePollution}
        className='font-semibold outline-2 outline-blue-500 p-1 ring-offset-2 ring-offset-black ring-slate-50 rounded-sm transition-shadow hover:ring-1 focus:outline focus:ring-0'
        labelName='Išmetamas CO2 kiekis, g/km'
        inputType='text'
        inputName='pollution'
      />
    </div>
  );
};

export default PollutionInput;
