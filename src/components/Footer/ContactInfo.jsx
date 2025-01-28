import Link from 'next/link';
import React from 'react';

const ContactInfo = React.memo(() => (
  <div className="xs:mb-[26px]">
    <p className="font-bold text-white xs:text-[16px] md:text-[12px]">
      CONTACT US
    </p>
    <address className="not-italic text-sm">
      <div className="mt-3">
        <h4 className="text-whiteDark xs:text-[15px] xs:mt-3 font-medium">
          Location:
        </h4>
        <h6 className="text-white mt-1 font-semibold">
          Saligramam,
          <br /> Chennai - 600093
        </h6>
      </div>
      <div className="mt-4">
        <h4 className="text-whiteDark xs:text-[15px] xs:mt-4 font-medium">
          Email:
        </h4>
        <Link
          className="text-white mt-1 font-semibold"
          href="mailto:info@chennaitrailclub.in"
        >
          info@chennaitrailclub.in
        </Link>
      </div>
    </address>
  </div>
));
export default ContactInfo;
