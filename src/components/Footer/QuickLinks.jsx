import { quickLinksData } from '@/utils/footerutils';
import Link from 'next/link';

const QuickLinks = () => (
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
    </ul>
  </div>
);

export default QuickLinks;
