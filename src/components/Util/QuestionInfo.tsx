import { useState } from 'react';
import { BsQuestion } from 'react-icons/bs';

const QuestionInfo = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onClickHandler = () => {
    if (window.innerWidth > 1024) return;
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className='absolute group left-2 top-[5px]'>
        <BsQuestion
          className='h-8 p-1 rounded-full text-white w-8 md:h-10 md:w-10 group-hover:bg-gray-50 group-hover:text-gray-900'
          onClick={onClickHandler}
        />
        <div
          className={`left-3 top-8 absolute infoTextBox opacity-0 select-none w-96 md:group-hover:opacity-100 md:group-hover:block z-20 space-y-2 ${
            isVisible ? 'opacity-100 block' : 'hidden'
          }`}
        >
          <div>
            <p className='font-bold text-sm'>Dyzelinas</p>
            <p className='text-xs'>
              Dyzelinas ar dyzelins ir dujos, ar dyzelinas ir elektra
            </p>
          </div>
          <div>
            <p className='font-bold text-sm'>Benzinas</p>
            <p className='text-xs'>Benzinas arba benzinas ir elektra</p>
          </div>
          <div>
            <p className='font-bold text-sm'>Dujos</p>
            <p className='text-xs'>
              Dujos ar benzinas ir dujos, ar benzinas ir etanolis, ar benzinas
              ir elektra ir dujos, ar benzinas ir etanolis ir dujos, ar dujos ir
              elektra, ar etanolis, ar etanolis ir dujos
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionInfo;
