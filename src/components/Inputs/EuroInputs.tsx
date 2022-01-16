import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';

import { addEuro } from '@/features/calculatorSlice';

import ListItem from '../Util/ListItem';

const EuroInputs = () => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(
    'Pasirinkti'
  );
  const dispatch = useDispatch();

  const clickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const target = e.target as HTMLLIElement;
    setOptionsOpen(false);
    setSelectedValue(target.textContent);
    dispatch(addEuro(target.getAttribute('value')));
  };

  return (
    <div className='relative w-full md:w-auto'>
      <p className='font-extralight mb-2 text-center text-gray-50 text-lg'>
        Automobilio Euro Standartas
      </p>
      <div className='absolute border rounded-md w-full z-10'>
        <div
          onClick={() => setOptionsOpen(!optionsOpen)}
          className='cursor-pointer flex h-14 items-center justify-between px-4 py-2 md:h-auto'
        >
          <p className='font-semibold text-gray-50'>{selectedValue}</p>
          <RiArrowDownSLine
            className={`duration-200 text-gray-50 w-5 h-5 transition-transform ${
              optionsOpen && 'rotate-180'
            }`}
          />
        </div>
        <ul
          className={` cursor-pointer overflow-hidden transition-all duration-200 ease-out bg-[#1a1a1a]  ${
            optionsOpen ? 'h-40' : 'h-0'
          }`}
        >
          <ListItem
            clickHandler={clickHandler}
            itemValue='Euro6'
            itemName='Euro 6 ar naujesnis'
          />
          <ListItem
            clickHandler={clickHandler}
            itemValue='Euro5'
            itemName='Euro 5'
          />
          <ListItem
            clickHandler={clickHandler}
            itemValue='Euro34'
            itemName='Euro 3, 4'
          />
          <ListItem
            clickHandler={clickHandler}
            itemValue='Euro21'
            itemName='Euro 1, 2'
          />
        </ul>
      </div>
    </div>
  );
};

export default EuroInputs;
