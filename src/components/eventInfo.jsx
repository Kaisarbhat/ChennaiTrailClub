"use client";

import React, { useState } from "react";
import { eventContent } from "@/utils/constants";
const EventInfo = () => {
 
  const [selectedKey, setSelectedKey] = useState(eventContent[0].key);

  const handleButtonClick = (key) => {
    setSelectedKey(key);
  };

  const selectedComponent =
   eventContent.find((item) => item.key === selectedKey)?.component || (() => null);

  return (
    <div className=" w-full flex xs:flex-col md:flex-row lg:space-x-20 md:space-x-0 text-[#50514C] text-[16px]">
      <div className="xs:hidden md:flex">
        <aside className=" text-black p-6 flex flex-col border items-start  border-gray-200 rounded-lg space-y-2 max-h-[618px]">
          {eventContent.map((item) => (
            <button
              key={item.key}
              onClick={() => handleButtonClick(item.key)}
              className="text-start rounded-lg w-full hover:bg-[#070802] hover:text-[#D0F700] p-3 focus:text-[#D0F700] focus:bg-[#070802]"
            >
              {item.key}
            </button>
          ))}
        </aside>
      </div>
      {/* "Only on small devices" */}
      <div className="md:hidden xs:flex w-full xs:px-4 ">
        <select
          value={selectedKey}
          onChange={(e) => setSelectedKey(e.target.value)}
          className="bg-[#070802] p-3  w-full rounded-md text-[#D0F700] sticky"
        >
          {eventContent.map((item) => (
            <option
              key={item.key}
              onChange={() => handleButtonClick(item.key)}
              className="text-start md:text-lg xs:text-sm text-bold "
            >
              {item.key}
            </option>
          ))}
        </select>
      </div>
      <div className="md:w-full lg:w-full lg:px-6 xs:px-4 rounded-lg   shadow-xl">
        {selectedComponent()}
      </div>
    </div>
  );
};

export default EventInfo;
