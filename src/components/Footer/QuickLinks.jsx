import { quickLinksData } from "@/utils/footerutils";
import Link from "next/link";
const QuickLinks = () => (
  <div className="flex flex-col">
    <p className="font-bold mb-3 text-[#FCFDF8] text-[12px]">QUICK LINKS</p>
    <ul className="flex flex-col list-none space-y-2">
      {quickLinksData.map(({ href, text }) => (
        <li key={href} className="hover:text-purple-900 cursor-pointer">
          <Link href={href}>{text}</Link>
        </li>
      ))}
    </ul>
  </div>
);

QuickLinks.displayName = "QuickLinks";
export default QuickLinks;
