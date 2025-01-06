import Image from "next/image";
import { memo } from "react";
import { Button } from "..";
import Link from "next/link";

function UpcomingEventsCard({ event }) {
  const { id, name, shortName, eventBannerTwo, date, location, locationUrl } =
    event;
  return (
    <article
      className="w-full lg:w-1/2 px-4"
      aria-labelledby="event registration card"
    >
      <div className="border border-solid hover:shadow-mine hover:border-[#7328f6] rounded-xl flex flex-col sm:flex-row lg:flex-col p-3 w-full">
        <div className="sm:w-1/3 lg:w-full">
          <Image
            src={eventBannerTwo}
            alt={`${name} event banner`}
            width={200}
            height={400}
            className="w-full h-48 object-cover rounded-md"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 200px"
          />
        </div>

        <div className="flex flex-col justify-between sm:w-2/3 lg:w-full sm:pl-4 lg:pl-0 mt-4 sm:mt-0 lg:mt-4">
          <h3 className="text-2xl">
            {name} {shortName}
          </h3>

          <div className="space-y-3 mt-3">
            <Link
              className="text-[16px] underline text-[#50514c] block"
              href={locationUrl}
              aria-label={`Event location: ${location}`}
            >
              <i
                className="bi bi-geo-alt-fill text-[#D0F700]"
                aria-hidden="true"
              ></i>
              {location}
            </Link>

            <time className="text-[16px] text-[#50514c] block" dateTime={date}>
              <i
                className="bi bi-calendar3 text-[#D0F700]"
                aria-hidden="true"
              ></i>
              {date}
            </time>

            <Button
              title="Register"
              link={`/events/register/${id}`}
              classname="text-[14px] border bg-black border-solid text-[#D0F700] rounded-3xl p-2 w-[170px] hover:bg-[#D0F700] font-bold hover:text-black"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default memo(UpcomingEventsCard);
