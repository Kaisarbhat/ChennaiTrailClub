import { socialLinksData } from "@/utils/footerutils";
import Link from "next/link";
import { memo } from "react";

const SocialLinks = memo(({ className }) => (
  <ul className={`flex text-2xl text-[#D0F700] ${className}`}>
    {socialLinksData.map(({ href, icon, label, index }) => (
      <div
        key={index}
        className="w-9 h-9 bg-[#21221c] p-1 mr-2 flex justify-center items-center rounded-[4px]"
      >
        <li className="cursor-pointer hover:text-[#7328F6]">
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <i className={`bi ${icon}`}></i>
          </Link>
        </li>
      </div>
    ))}
  </ul>
));
export default SocialLinks;
