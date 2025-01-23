import { dateFormatter } from '@/utils/constants';
import dynamic from 'next/dynamic';
import React from 'react';
import { UpcomingEventsHero } from '..';
const UpcomingEventsCard = dynamic(() => import('./UpcomingEventsCard'));
const EmptyEvents = dynamic(() => import('../Event/EmptyEvents'));

const UpcomingEvents = ({ upcomingEvents }) => {
  return (
    <div
      className="overflow-clip"
      role="region"
      aria-label="Upcoming Events Section"
    >
      {upcomingEvents.length ? (
        <>
          <section className="mb-4 leading-loose">
            <UpcomingEventsHero data={upcomingEvents} />
          </section>

          <section
            className="w-full xs:px-4"
            aria-labelledby="upcoming-events-title"
          >
            <div className="2xl:px-28 xs:w-full flex flex-col justify-center items-center">
              <h2
                id="upcoming-events-title"
                className="text-black text-start text-[32px] font-bold"
              >
                Upcoming Events
              </h2>

              <div className="py-6 xl:w-maxWidth w-full flex flex-col lg:flex-row items-center justify-center lg:space-x-10 space-y-6 lg:space-y-0">
                {upcomingEvents.map((event, index) => {
                  const date = new Date(event.date);
                  const formattedDate = dateFormatter(date);
                  return (
                    <UpcomingEventsCard
                      key={index}
                      event={event}
                      date={formattedDate}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        </>
      ) : (
        <EmptyEvents />
      )}
    </div>
  );
};

export default React.memo(UpcomingEvents);
