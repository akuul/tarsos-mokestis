import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/app/store';

import CalcLogic from './Util/CalcLogic';

const Results = () => {
  const [price, setPrice] = useState<number>(0);
  const [bounce, setBounce] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const euroStandard = useSelector(
    (state: RootState) => state.calculator.euroStandard
  );
  const pollution = useSelector(
    (state: RootState) => state.calculator.pollution
  );
  const carType = useSelector((state: RootState) => state.calculator.carType);

  const onClickCalculatePrice = () => {
    setBounce(true);
    const price = CalcLogic(pollution, carType, euroStandard);
    setPrice(price);
  };

  useEffect(() => {
    if (euroStandard && pollution && carType) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [euroStandard, pollution, carType]);

  return (
    <div className='mt-20'>
      <button
        disabled={isDisabled}
        onAnimationEnd={() => setBounce(false)}
        className={`${
          bounce && 'btnAnimation_press'
        } border ease-in-out font-semibold overflow-visible p-2 rounded-md text-gray-50 transition-all w-full hover:bg-[#f24362] disabled:hover:bg-gray-900 disabled:opacity-40`}
        onClick={onClickCalculatePrice}
      >
        APSKAIČIUOTI
      </button>
      <div className='mt-10 text-gray-50'>
        <p className='text-xl'>
          Taršos mokestis:{' '}
          <span className='font-semibold text-3xl'>{price.toFixed(2)}</span>
          &euro;
        </p>
      </div>
    </div>
  );
};

export default Results;
