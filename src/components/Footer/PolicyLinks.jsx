import { policyLinksData } from '@/utils/footerutils';
import Link from 'next/link';

const PolicyLinks = () => (
  <ul className="flex list-none xs:space-x-2 md:space-x-10">
    {policyLinksData.map(({ href, text, index }) => (
      <li key={index} className="hover:text-secondary cursor-pointer">
        <Link href={href}>{text}</Link>
      </li>
    ))}
  </ul>
);

export default PolicyLinks;
