import { socialLinksData } from '@/utils/footerutils';
import Link from 'next/link';
import { memo } from 'react';

const SocialLinks = memo(({ className }) => (
  <ul className={`flex text-2xl xs:mt-4 text-primary ${className}`}>
    {socialLinksData.map(({ href, icon, label, index }) => (
      <div
        key={index}
        className="w-9 h-9 bg-shadeDark p-1 mr-[10px] flex justify-center items-center rounded-[4px]"
      >
        <li className="cursor-pointer hover:text-secondary">
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            {icon}
          </Link>
        </li>
      </div>
    ))}
  </ul>
));
export default SocialLinks;
