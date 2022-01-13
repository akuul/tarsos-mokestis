import Input from './Input/Input';
import QuestionInfo from '../Util/QuestionInfo';

const Checkboxes = () => {
  return (
    <div className='flex gap-5 justify-center'>
      <div className='flex'>
        <Input inputName='car-type' labelName='Dyzelinas' inputType='radio' />
        <QuestionInfo text='Dyzelinas ar dyzelins ir dujos, ar dyzelinas ir elektra' />
      </div>
      <div className='flex'>
        <Input inputName='car-type' labelName='Benzinas' inputType='radio' />
        <QuestionInfo text='Benzinas arba benzinas ir elektra' />
      </div>
      <div className='flex'>
        <Input inputName='car-type' labelName='Dujos' inputType='radio' />
        <QuestionInfo text='Dujos ar benzinas ir dujos, ar benzinas ir etanolis, ar benzinas ir elektra ir dujos, ar benzinas ir etanolis ir dujos, ar dujos ir elektra, ar etanolis, ar etanolis ir dujos' />
      </div>
    </div>
  );
};

export default Checkboxes;
