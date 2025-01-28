'use client';
import { useJoinUs } from '@/context/JoinUsContext';
import { quickLinksData } from '@/utils/footerutils';
import Link from 'next/link';
import { JoinUs } from '..';

const QuickLinks = () => {
  const { isJoinUsOpen, toggleJoinUs } = useJoinUs();
  return (
    <div className="flex flex-col mb-[26px]">
      <p className="font-bold xs:mt-4 md:mt-0 text-white xs:text-[16px] md:text-[12px]">
        QUICK LINKS
      </p>
      <ul className="flex flex-col list-none">
        {quickLinksData.map(({ href, text, index }) => (
          <li
            key={index}
            className="hover:text-secondary cursor-pointer text-sm xs:mt-4 lg:mt-3 font-medium text-whiteDark"
          >
            <Link href={href}>{text}</Link>
          </li>
        ))}
        <li className="hover:text-secondary cursor-pointer text-sm xs:mt-4 lg:mt-3 font-medium text-whiteDark">
          <button onClick={toggleJoinUs}>Join Us</button>
        </li>
      </ul>
      {isJoinUsOpen && <JoinUs isOpen={isJoinUsOpen} onClose={toggleJoinUs} />}
    </div>
  );
};
export default QuickLinks;
