import { useState } from 'react';
import { BsQuestion } from 'react-icons/bs';

type questionInfoProps = {
  text: string;
};

const QuestionInfo = ({ text }: questionInfoProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const onClickHandler = () => {
    if (window.innerWidth > 1024) return;
    setIsVisible(!isVisible);
  };

  return (
    <div className='group relative top-[5px]'>
      <BsQuestion onClick={onClickHandler} />
      <div
        className={`-left-20 absolute infoTextBox opacity-0 select-none w-32 group-hover:opacity-100 group-hover:visible ${
          isVisible ? 'opacity-100 visible' : 'invisible'
        }`}
      >
        <p className='text-xs'>{text}</p>
      </div>
    </div>
  );
};

export default QuestionInfo;
