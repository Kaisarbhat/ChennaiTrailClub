import React from "react";
import { Button } from ".";
const YearSelector = React.memo(({ years, selectedYear, onYearClick }) => (
  <div className="flex space-x-4 md:py-5 xs:py-2">
    {years.map((year) => (
      <Button
        key={year}
        title={year}
        onClick={() => onYearClick(year)}
        classname={`text-[16px] border rounded-3xl p-2 w-32 font-bold transition-colors duration-200 ${
          selectedYear === year
            ? "bg-black text-[#D0F700]"
            : "bg-white text-black hover:bg-gray-100"
        }`}
      />
    ))}
  </div>
));

export default YearSelector;
