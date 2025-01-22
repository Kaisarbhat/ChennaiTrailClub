'use client';
import React from 'react';
import { Button } from '..';

const YearSelector = React.memo(({ years, selectedYear, onYearClick }) => (
  <div
    className="flex space-x-4 md:py-5 py-2 flex-wrap "
    role="button"
    aria-label="Button"
  >
    {years.map((year) => (
      <Button
        key={year}
        title={year}
        onClick={() => onYearClick(year)}
        classname={`xs:text-sm md:text-xl border rounded-3xl xs:p-1 md:p-2 xs:w-16 md:w-32 font-bold transition-colors duration-200 ${
          selectedYear === year
            ? `bg-black text-primary`
            : `bg-white text-black hover:bg-gray-100`
        }`}
      />
    ))}
  </div>
));

export default YearSelector;
