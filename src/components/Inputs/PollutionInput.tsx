import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addPollution } from '@/features/calculatorSlice';

import Input from './Input/Input';

const PollutionInput = () => {
  const dispatch = useDispatch();
  const [validationMessage, setValidationMessage] = useState<string>('');

  /* 
  ! Could add 'touched' for further validation
  ! Gee, the validation itself needs some more work....
  */

  const onChangeUpdatePollution = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const regex = new RegExp(/\D/);

    if (regex.test(target.value) || !target.value) {
      dispatch(addPollution(0));
      !target.value
        ? setValidationMessage('Laukas negali būti tuščias')
        : setValidationMessage('Gali būti naudojami tik skaitmenys [0 - 9]');
      return;
    }

    setValidationMessage('');
    const value = parseInt(target.value);
    dispatch(addPollution(value));
  };

  return (
    <div className='flex flex-col gap-2 relative'>
      <Input
        onChangeUpdateState={onChangeUpdatePollution}
        className='font-semibold outline-2 outline-blue-500 p-1 ring-offset-2 ring-offset-black ring-slate-50 rounded-sm transition-shadow hover:ring-1 focus:outline focus:ring-0'
        labelName='Išmetamas CO2 kiekis, g/km'
        inputType='text'
        inputName='pollution'
      />
      {validationMessage && (
        <p className='-bottom-6 absolute font-semibold text-red-500 text-xs'>
          {validationMessage}
        </p>
      )}
    </div>
  );
};

export default PollutionInput;
