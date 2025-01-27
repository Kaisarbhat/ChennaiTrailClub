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
      className="w-full flex md:space-x-0 items-center justify-center text-blackLight text-[16px] font-manrope overflow-x-hidden"
      aria-label="Event Information Menu"
    >
      <div className="xl:w-maxWidth flex xs:flex-col md:flex-row ">
        <div className="xs:hidden md:flex pr-10 xl">
          <aside className=" text-black md:p-3 flex flex-col border items-start border-shadeLight  md:rounded-[10px] justify-between h-[758px]">
            {eventContent.map((item) => (
              <button
                key={item.key}
                value={selectedButton}
                onClick={() => handleButtonClick(item.key)}
                className={`text-start rounded-lg w-full hover:bg-black md:text-lg font-urbanist hover:text-primary md:px-6 md:py-[14px] md:leading-5 font-medium ${
                  selectedKey === item.key
                    ? `text-primary bg-black`
                    : 'bg-white text-blackLight'
                } `}
              >
                {item.key}
              </button>
            ))}
          </aside>
        </div>
        <div className="md:hidden xs:flex min-w-screen xs:px-4 xs:py-5 sticky top-16 z-20">
          <select
            value={selectedKey}
            onChange={(e) => setSelectedKey(e.target.value)}
            className="bg-black p-3 font-semibold text-lg w-full rounded-md text-primary sticky"
          >
            {eventContent.map((item) => (
              <option
                key={item.key}
                onChange={() => handleButtonClick(item.key)}
                className="text-start md:text-lg xs:text-sm text-bold xs:font-semibold"
              >
                {item.key}
              </option>
            ))}
          </select>
        </div>
        <div className="md:w-full lg:w-full xs:px-4 md:px-0 xs:w-svw rounded-lg ">
          {selectedComponent()}
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
