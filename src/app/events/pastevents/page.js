"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { API_URL } from "@/utils/constants";
import Loading from "@/components/loading";
import ErrorPage from "@/app/error/page";
import EventsList from "@/components/eventsList";
import YearSelector from "@/components/yearSelector";
import Heading from "@/components/heading";
const PastEvents = () => {
  const [state, setState] = useState({
    pastEvents: [],
    selectedYear: "",
    isLoading: false,
    error: "",
  });

  const { pastEvents, selectedYear, isLoading, error } = state;

  // Fetch data using useCallback to prevent unnecessary re-renders
  const fetchData = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const res = await axios.get(`${API_URL}/events/pastevents`);
      if (res.status === 200) {
        const events = res.data;
        const years = events
          .map((event) => new Date(event?.date).getFullYear().toString())
          .filter((year, index, self) => self.indexOf(year) === index)
          .sort((a, b) => b - a);

        setState((prev) => ({
          ...prev,
          pastEvents: events,
          selectedYear: years[0] || new Date().getFullYear().toString(),
          isLoading: false,
        }));
      }
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error.message,
        isLoading: false,
      }));
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Memoize unique years calculation
  const uniqueYears = useMemo(() => {
    const years = pastEvents
      .map((event) => new Date(event?.date).getFullYear().toString())
      .filter(Boolean);
    return Array.from(new Set(years)).sort((a, b) => b - a);
  }, [pastEvents]);

  // Memoize filtered events
  const filteredEvents = useMemo(
    () =>
      pastEvents.filter(
        (event) =>
          new Date(event?.date).getFullYear().toString() === selectedYear
      ),
    [pastEvents, selectedYear]
  );

  // Memoize click handler
  const handleYearClick = useCallback((year) => {
    setState((prev) => ({ ...prev, selectedYear: year }));
  }, []);

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage error={error} />;

  return (
    <div className="pt-[100px] w-full overflow-clip flex flex-col items-center px-4">
      <Heading
        title="Chennai Trail Club Past Events"
        subTitle="Below are events organised by our club in recent past"
      />
      <div className="px-5 2xl:w-[1340px] xs:w-full mx-5">
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

export default React.memo(PastEvents);
