'use client';
import { withErrorHandling } from '@/app/Error/page';
import React, { useCallback, useMemo, useState } from 'react';
import { EventsList, Heading, YearSelector } from '..';

const PastEvents = ({ pastEvents, years }) => {
  const [selectedYear, setSelectedYear] = useState(
    years[0] || new Date().getFullYear().toString()
  );

  // Memoized unique years calculation
  const uniqueYears = useMemo(() => {
    const years = pastEvents
      .map((event) => new Date(event?.date).getFullYear().toString())
      .filter(Boolean);
    return Array.from(new Set(years)).sort((a, b) => b - a);
  }, [pastEvents]);

  // Memoized filtered events
  const filteredEvents = useMemo(
    () =>
      pastEvents.filter(
        (event) =>
          new Date(event?.date).getFullYear().toString() === selectedYear
      ),
    [pastEvents, selectedYear]
  );

  const handleYearClick = useCallback((year) => {
    setSelectedYear(year);
  }, []);

  return (
    <div
      className="pt-[100px] w-full overflow-clip flex flex-col items-center px-4"
      aria-labelledby="Past Events"
    >
      <Heading
        title="Chennai Trail Club Past Events"
        subTitle="Below are events organised by our club in recent past"
      />
      <div className="px-5 2xl:w-[1340px] xs:w-full ">
        <YearSelector
          years={uniqueYears}
          selectedYear={selectedYear}
          onYearClick={handleYearClick}
        />
        <EventsList events={filteredEvents} />
      </div>
    </div>
  );
};

export default withErrorHandling(React.memo(PastEvents));
