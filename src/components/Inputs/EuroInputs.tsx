import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

import ListItem from '../Util/ListItem';

const EuroInputs = () => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(
    'Pasirinkti'
  );

  const clickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const newValue = e.target as HTMLLIElement;
    setOptionsOpen(false);
    setSelectedValue(newValue.textContent);
  };

  return (
    <>
      <p>Automobilio Euro Standartas</p>
      <div
        onClick={() => setOptionsOpen(!optionsOpen)}
        className='cursor-pointer flex justify-between px-4 py-2 rounded-md shadow-sm w-48'
      >
        <p>{selectedValue}</p>
        <RiArrowDownSLine
          className={`duration-200 self-end transition-transform ${
            optionsOpen && 'rotate-180'
          }`}
        />
      </div>
      <ul
        className={`cursor-pointer overflow-hidden transition-all duration-200 ease-out ${
          optionsOpen ? 'h-36' : 'h-0'
        }`}
      >
        <ListItem
          clickHandler={clickHandler}
          itemValue='4'
          itemName='Euro 6 ar naujesnis'
        />
        <ListItem clickHandler={clickHandler} itemValue='3' itemName='Euro 5' />
        <ListItem
          clickHandler={clickHandler}
          itemValue='2'
          itemName='Euro 3, 4'
        />
        <ListItem
          clickHandler={clickHandler}
          itemValue='1'
          itemName='Euro 1, 2'
        />
      </ul>
    </>
  );
};

export default EuroInputs;
