import Input from './Input/Input';

const PollutionInput = () => {
  return (
    <Input
      className='border outline-none'
      labelName='Išmetamas CO2 kiekis, g/km'
      inputType='text'
      inputName='pollution'
    />
  );
};

export default PollutionInput;
