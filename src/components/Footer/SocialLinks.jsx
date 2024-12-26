import { socialLinksData } from "@/utils/footerutils";
import { memo } from "react";
const SocialLinks = memo(({ className }) => (
  <ul className={`flex space-x-2 text-3xl text-[#D0F700] ${className}`}>
    {socialLinksData.map(({ href, icon, label }) => (
      <li key={icon} className="cursor-pointer hover:text-purple-900">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <i className={`bi ${icon}`}></i>
        </a>
      </li>
    ))}
  </ul>
));

SocialLinks.displayName = "SocialLinks";
export default SocialLinks;
