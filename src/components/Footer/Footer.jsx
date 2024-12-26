"use client";
import React, { memo, useRef } from "react";
import { useInView } from "framer-motion";
import { FooterSmall, FooterLarge } from "..";
const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer aria-label="Site footer">
      {/* Desktop Footer */}
      <div className="w-screen lg:flex xs:hidden md:hidden justify-center items-center bottom-0 overflow-clip">
        <FooterLarge reff={ref} isInView={isInView} />
      </div>

      {/* Mobile Footer */}
      <div
        className="w-full lg:hidden md:block xs:block bottom-0 overflow-clip"
        aria-label="mobile-footer"
      >
        <FooterSmall reff={ref} isInView={isInView} />
      </div>
    </footer>
  );
};

export default memo(Footer);
