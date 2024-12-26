import { policyLinksData } from "@/utils/footerutils";
import Link from "next/link";
const PolicyLinks = () => (
  <ul className="flex list-none space-x-10">
    {policyLinksData.map(({ href, text }) => (
      <li key={href} className="hover:text-purple-900 cursor-pointer">
        <Link href={href}>{text}</Link>
      </li>
    ))}
  </ul>
);

PolicyLinks.displayName = "PolicyLinks";
export default PolicyLinks;
