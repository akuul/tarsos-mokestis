import { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/app/store';

import CalcLogic from './Util/CalcLogic';

const Results = () => {
  const [price, setPrice] = useState<number>(0);

  const euroStandard = useSelector(
    (state: RootState) => state.calculator.euroStandard
  );
  const pollution = useSelector(
    (state: RootState) => state.calculator.pollution
  );
  const carType = useSelector((state: RootState) => state.calculator.carType);

  const onClickCalculatePrice = () => {
    const price = CalcLogic(pollution, carType, euroStandard);
    setPrice(price);
  };

  return (
    <div className='mt-20'>
      <p>Taršos mokestis:</p>
      <button onClick={onClickCalculatePrice}>TEST</button>
      <span>{price.toFixed(2)}</span>
    </div>
  );
};

export default Results;
