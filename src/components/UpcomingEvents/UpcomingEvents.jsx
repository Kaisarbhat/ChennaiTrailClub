import { UpcomingEventsHero, UpcomingEventsCard, EmptyEvents } from "..";
import { dateOptions } from "@/utils/constants";
const UpcomingEvents = ({ upcomingEvents }) => {
  return (
    <div
      className="overflow-clip"
      role="region"
      aria-label="Upcoming Events Section"
    >
      {upcomingEvents?.length > 0 ? (
        <>
          <section className="mb-4 leading-loose">
            <UpcomingEventsHero data={upcomingEvents} />
          </section>

          <section
            className="w-full xs:px-4"
            aria-labelledby="upcoming-events-title"
          >
            <div className="2xl:w-4/5 xs:w-full flex flex-col justify-center items-center">
              <h2
                id="upcoming-events-title"
                className="text-black text-start text-[32px] font-bold px-4 self-start"
              >
                Upcoming Events
              </h2>

              {/* Modified this container to stack on medium screens */}
              <div className="py-6 2xl:max-w-[1340px] w-full flex flex-col lg:flex-row items-center justify-center lg:space-x-10 space-y-6 lg:space-y-0">
                {upcomingEvents.map((event, index) => {
                  const formattedDate = new Date(
                    event?.date
                  ).toLocaleDateString("en-US", dateOptions);

                  return (
                    <UpcomingEventsCard
                      key={event.id}
                      {...event}
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

export default UpcomingEvents;
