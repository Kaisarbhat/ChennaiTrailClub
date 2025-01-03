import React from "react";
import { dateOptions } from "@/utils/constants";
import { PastEventsCard } from "..";
const EventsList = React.memo(({ events }) => (
  <div className="flex md:flex-row xs:flex-col justify-between mt-4 lg:space-x-8 xs:space-x-0 mb-auto w-full">
    {events.map((event, index) => {
      const {
        id,
        name,
        shortName,
        location,
        eventBannerThree,
        resultLink,
        date,
      } = event || {};

      const formattedDate = new Date(date).toLocaleDateString(
        "en-US",
        dateOptions
      );

      return (
        <PastEventsCard
          key={id || index}
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
