import { quickLinksData } from "@/utils/footerutils";
import Link from "next/link";

const QuickLinks = () => (
  <div className="flex flex-col">
    <p className="font-bold mb-3 text-[#FCFDF8] text-[12px]">QUICK LINKS</p>
    <ul className="flex flex-col list-none space-y-2 ">
      {quickLinksData.map(({ href, text, index }) => (
        <li
          key={index}
          className="hover:text-[#7328F6] cursor-pointer text-sm text-[#B6B6B3]"
        >
          <Link href={href}>{text}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default QuickLinks;
