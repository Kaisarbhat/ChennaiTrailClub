import { memo } from 'react';
import { FooterLarge, FooterSmall } from '..';

const Footer = () => {
  return (
    <footer aria-label="Site footer">
      {/* Desktop Footer */}
      <div className="w-full lg:flex xs:hidden justify-center items-center bottom-0">
        <FooterLarge />
      </div>

      {/* Mobile Footer */}
      <div
        className="w-full lg:hidden md:block xs:block bottom-0 "
        aria-label="mobile-footer"
      >
        <FooterSmall />
      </div>
    </footer>
  );
};

export default memo(Footer);
