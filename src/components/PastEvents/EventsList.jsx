import React from 'react';
import { dateFormatter } from '@/utils/constants';
import { PastEventsCard } from '..';

const EventsList = React.memo(({ events }) => (
  <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-6 w-full mt-6">
    {events.map((event) => {
      const {
        id,
        name,
        shortName,
        location,
        eventBannerThree,
        resultLink,
        date,
      } = event;
      const localDate = new Date(date);
      const formattedDate = dateFormatter(localDate);

      return (
        <PastEventsCard
          key={id}
          id={id}
          name={name}
          shortName={shortName}
          location={location}
          banner={eventBannerThree}
          date={formattedDate}
          resultLink={resultLink}
        />
      );
    })}
  </div>
));

export default React.memo(EventsList);
