'use client';
import { eventContent } from '@/utils/eventUtils';
import { useState } from 'react';

const EventInfo = () => {
  const [selectedKey, setSelectedKey] = useState(eventContent[0]?.key);
  const [selectedButton, setSelectedButton] = useState(eventContent[0]?.key);

  const handleButtonClick = (key) => {
    setSelectedKey(key);
    setSelectedButton(key);
  };

  const selectedComponent =
    eventContent.find((item) => item.key === selectedKey)?.component ||
    (() => null);

  return (
    <div
      className="w-full flex xs:flex-col md:flex-row lg:space-x-20 md:space-x-0 text-blackLight text-[16px] font-manrope"
      aria-label="Event Information Menu"
    >
      <div className="xs:hidden md:flex">
        <aside className=" text-black p-6 flex flex-col border items-start border-gray-200 rounded-lg space-y-2 max-h-[618px">
          {eventContent.map((item) => (
            <button
              key={item.key}
              value={selectedButton}
              onClick={() => handleButtonClick(item.key)}
              className={`text-start rounded-lg w-full hover:bg-black hover:text-primary p-3 ${
                selectedKey === item.key
                  ? `text-primary bg-black`
                  : 'bg-white text-black'
              } `}
            >
              {item.key}
            </button>
          ))}
        </aside>
      </div>
      <div className="md:hidden xs:flex w-full xs:px-4 xs:py-5">
        <select
          value={selectedKey}
          onChange={(e) => setSelectedKey(e.target.value)}
          className="bg-black p-3 font-semibold text-lg w-full rounded-md text-primary sticky"
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
      <div className="md:w-full lg:w-full lg:px-6 xs:px-4 rounded-lg shadow-xl">
        {selectedComponent()}
      </div>
    </div>
  );
};

export default EventInfo;
