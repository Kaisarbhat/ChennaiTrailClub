import React from "react";
const ContactInfo = React.memo(() => (
  <div>
    <p className="font-bold mb-3 text-[#FCFDF8] text-[12px]">CONTACT US</p>
    <address className="not-italic">
      <div className="mt-3">
        <h4>Location:</h4>
        <h6 className="text-[#FCFDF8] mt-1">Saligramam, Chennai - 600093</h6>
      </div>
      <div className="mt-4">
        <h4>email:</h4>
        <a
          className="text-[#FCFDF8]mt-1"
          href="mailto:info@chennaitrailclub.in"
        >
          info@chennaitrailclub.in
        </a>
      </div>
    </address>
  </div>
));

ContactInfo.displayName = "ContactInfo";
export default ContactInfo;
