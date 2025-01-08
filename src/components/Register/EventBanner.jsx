import Image from 'next/image';
import React from 'react';

const EventBanner = ({ eventBanner }) => (
  <div>
    <Image
      src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/${eventBanner}`}
      alt={`banner`}
      width={1300}
      height={500}
      loading="lazy"
      className="max-h-[450px]"
    />
  </div>
);

export default React.memo(EventBanner);
