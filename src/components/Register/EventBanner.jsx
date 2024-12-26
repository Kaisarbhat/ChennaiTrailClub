import Image from "next/image";
import React from "react";
const EventBanner = ({ eventData }) => (
  <div>
    <Image
      src={eventData?.eventBannerTwo}
      alt={`${eventData?.name} - banner`}
      width={1300}
      height={500}
      loading="lazy"
      className="max-h-[450px]"
    />
  </div>
);

export default React.memo(EventBanner);
