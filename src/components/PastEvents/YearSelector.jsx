'use client';
import React from 'react';
import { Button } from '..';

const YearSelector = React.memo(({ years, selectedYear, onYearClick }) => (
  <div
    className="flex space-x-3 xs:mt-4 lg:mt-0 flex-wrap "
    role="button"
    aria-label="Button"
  >
    {years.map((year) => (
      <Button
        key={year}
        title={year}
        onClick={() => onYearClick(year)}
        classname={`xs:text-[16px] border border-black rounded-3xl xs:px-6 xs:py-2 font-bold transition-colors duration-200 ${
          selectedYear === year
            ? `bg-black text-primary`
            : `bg-white text-black hover:bg-gray-100`
        }`}
      />
    ))}
  </div>
));

export default YearSelector;
