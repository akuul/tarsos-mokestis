import { useDispatch } from 'react-redux';

import { addCarType } from '@/features/calculatorSlice';

import Input from './Input/Input';

const Checkboxes = () => {
  const dispatch = useDispatch();

  const updateCarType = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    dispatch(addCarType(target.value));
  };

  return (
    <div className='flex flex-col gap-6 justify-center md:gap-2'>
      <div className='flex flex-row-reverse gap-2 items-center justify-end'>
        <Input
          onClickUpdateState={updateCarType}
          inputName='car-type'
          labelName='Dyzelinas'
          inputType='radio'
          inputValue='diesel'
          className='radioBtn'
        />
      </div>
      <div className='flex flex-row-reverse gap-2 items-center justify-end'>
        <Input
          className='radioBtn'
          onClickUpdateState={updateCarType}
          inputName='car-type'
          labelName='Benzinas'
          inputValue='petrol'
          inputType='radio'
        />
      </div>
      <div className='flex flex-row-reverse gap-2 items-center justify-end'>
        <Input
          onClickUpdateState={updateCarType}
          inputName='car-type'
          labelName='Dujos'
          inputType='radio'
          inputValue='gas'
          className='radioBtn'
        />
      </div>
    </div>
  );
};

export default Checkboxes;
