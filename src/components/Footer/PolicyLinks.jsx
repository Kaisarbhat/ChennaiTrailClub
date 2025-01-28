import { policyLinksData } from '@/utils/footerutils';
import Link from 'next/link';

const PolicyLinks = () => (
  <ul className="flex xs:flex-col sm:flex-row list-none xs:space-y-4 sm:space-y-0 xs:space-x-0 sm:space-x-6">
    {policyLinksData.map(({ href, text, index }) => (
      <li
        key={index}
        className="hover:text-secondary cursor-pointer font-medium"
      >
        <Link href={href}>
          {index < policyLinksData.length - 1 ? `${text} |` : text}
        </Link>
      </li>
    ))}
  </ul>
);

export default PolicyLinks;
