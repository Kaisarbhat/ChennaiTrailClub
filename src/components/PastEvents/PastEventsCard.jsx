import Image from 'next/image';
import { FaCalendar } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from '..';

const PastEventsCard = ({
  id,
  name,
  shortName,
  location,
  date,
  banner,
  resultLink,
}) => {
  return (
    <div
      className="xs:w-full overflow-hidden rounded-[20px] p-4 border border-[#D4D4D4] hover:shadow-mine hover:border-secondary"
      role="region"
      aria-label="Past Events Card"
    >
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 mb-4 sm:mb-0 sm:mr-4 md:mr-5">
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_BUCKET}/${banner}`}
            alt={'Banner'}
            width={175}
            height={175}
            className="w-full xs:h-40 sm:h-full max-h-44 object-cover rounded-xl"
            loading="lazy"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <h3 className="text-lg sm:text-2xl font-semibold">
            {name} {shortName}
          </h3>

          <div className="flex items-center text-[#3D3D3D] mt-4">
            <span className="text-2xl box-content">
              <IoLocationSharp />
            </span>
            <span className="text-base sm:text-lg pl-4 max-w-64">
              {location}
            </span>
          </div>

          <div className="flex items-center text-[#3D3D3D] mt-[10px]">
            <span className="text-2xl box-content">
              <FaCalendar className="text-2xl" />
            </span>
            <span className="text-base sm:text-lg pl-4">{date}</span>
          </div>

          {resultLink && (
            <div className="flex flex-wrap gap-3 justify-start items-end xs:mt-6 md:mt-2">
              <Button
                title={'View Details'}
                link={`/events/${id}`}
                classname="text-[14px] border bg-black border-solid text-primary rounded-3xl py-3 px-6 font-bold"
              />
              <Button
                title={'Results'}
                link={resultLink ?? '/'}
                classname="text-[14px] border bg-black border-solid text-primary rounded-3xl py-3 px-6 font-bold"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PastEventsCard;
