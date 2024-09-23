"use client";

import React, { useState } from "react";

const EventInfo = () => {
  const content = [
    {
      key: "General Info",
      component: () => (
        <div>
          <h1 className="text-[32px] font-bold  mb-4 text-[#070802]">
            General Information
          </h1>
          <h3 className="text-[20px] mb-2 font-semibold">
            {" "}
            Following are general information that you have to know before
            registering,
          </h3>
          <ul className="list-disc space-y-2 px-8">
            <li>
              Registration charges for <b>30KM (INR.1800)</b> and{" "}
              <b>60KM (INR.2200)</b> including payment gateway charges.
            </li>
            <li>
              Registrations for JHU 2024 will open on 18th August 2024 and close
              on 04th October 2024 or at the earliest if the slots are filled.
            </li>
            <li>
              Upon successful confirmation of payment, an E-mail will be sent
              from chennaitrailclub@gmail.com. Please scout your junk or spam
              folder if you have not received the confirmation in your inbox.
            </li>
            <li>No SMS will be sent.</li>
            <li>
              There is also no confirmation E-mail post verification of
              qualification criteria. Qualification criteria is deemed accepted
              if the criteria are met.
            </li>
            <li>
              We will contact you for additional details if the qualification
              criteria provided is not satisfactory. If the Strava or any other
              link shared as qualification is not satisfactory, we will cancel
              your registration.
            </li>
            <li>
              A final mail will be sent to all registered participants a week
              before the event date.
            </li>
            <li>
              If you don’t already meet the qualification criteria and you still
              register without an agreement from the Organising team, we will
              cancel your registration, and the registration fees will not be
              refunded.
            </li>
            <li>
              Total slots available are 30KM (250 persons) & 60KM (150 persons).
              Once these 400 slots are filled, registrations will close.
            </li>
          </ul>
        </div>
      ),
    },
    {
      key: "Categories",
      component: () => (
        <div>
          <h1 className="text-[32px] font-bold  mb-4 text-[#070802]">
            Categories
          </h1>
          <p>
            Jawadhu Hill Ultra (JHU-24) offers two categories in the 2024
            edition
          </p>
          <h3 className="text-[20px] font-semibold">
            30K with approximately 900m of elevation gain.
          </h3>
          <ul className="list-disc space-y-2 px-16">
            <li>
              primarily for those who wants to run their first trail race. Trail
              route takes runners through farms, slush & single path trails.
              Believe us, it will be FUN and will definitely get one addicted to
              trail running. The fun will last approximately 30 Kilometers.
            </li>
            <li>
              The event will start at 06:00 AM from{" "}
              <span>St.Joseph Higher Secondary School, Jamunamarathur.</span>{" "}
              and will finish at same place.
            </li>
            <li>Runners are required to report at start point by 05:30 AM.</li>
            <li>
              There is no stage cut-off but runners should move fast enough to
              reach the finish line by 02:00 PM.
            </li>
          </ul>
          <h3 className="text-[20px] font-semibold">
            60K with approximately 1600m of elevation gain.
          </h3>
          <ul className="list-disc space-y-2 px-16">
            <li>
              It’s also a point-to-point course taking runners through the most
              beautiful locales in Jawadhu while still posing enough challenges
              for a regular marathon runner. The course takes runners through
              different terrains.
            </li>
            <li>
              The event will start at 05:00 AM from{" "}
              <span>St.Joseph Higher Secondary School, Jamunamarathur.</span>
            </li>
            <li>Runners are required to report at start point by 04:30 AM.</li>
            <li>All 60K runners must carry their own head lamps / torches</li>
            <li>
              Runners in this category are given a total of 12 hours from the
              start of the race to finish the 60K event, i.e a finish no later
              than 5.00 PM.
            </li>
            <li>
              However, runners must pass one stage cut-off, located
              approximately around 30K.
            </li>
            <li>
              Always listen to your body and stop if you feel exhausted or have
              any body pains.
            </li>
          </ul>
          <div className="border boder-solid border-[#f1a847] rounded-xl bg-[#FCF6EA] text-black p-4 space-y-4 mt-6">
            <h2 className="text-[20px] font-semibold"><i class="bi bi-exclamation-circle-fill text-[#ffb24d]"></i> Note</h2>
            <ul className="list-disc space-y-2 px-16 flex flex-col justify-between">
              <li>
                All time and distance mentioned here are tentative and subject
                to very minor changes, which will be confirmed a week before the
                race.
              </li>
              <li>
                Runners still on the course after the cut-off time (both stage
                and overall cut-offs) will be picked up by the sweep vehicles
                and will not be permitted to continue the race. There will be no
                exception as the cut-off times are implemented to ensure local
                government body guidelines.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      key: "Rules & Criteria",
      component: () => (
        <div>
          <h1 className="text-[32px] font-bold  mb-4 text-[#070802]">
            Rules & Criteria
          </h1>
          <p>
            {" "}
            Considering all challenges through the course and other
            considerations, the participants must meet the following criteria:
          </p>
          <ul className="list-disc space-y-2 px-16">
            <li>
              {" "}
              For registering for 60K, Registrants must have completed
              <ul className="list-disc space-y-2 px-16">
                <li>
                  a Full Marathon in 06:00Hrs,<b> OR </b>
                </li>
                <li>
                  any Ultra Marathon (any distance over 42.2Kms) within the
                  cut-off time prescribed by the organizers of the race.
                </li>
              </ul>
            </li>
            <li>
              For registering for 30K, one must have at least run a half
              marathon in 03:00 Hrs. Alternatively any distance of 25K and above
              (within the cut-off of that race) can be considered as a
              qualifying race.
            </li>
            <li>
              Races/Run after 01-Feb-2023 will only be considered as a
              qualifying race for Jawadhu Hill Ultra for 30K & 60K categories.
            </li>
            <li>
              After registration, if a registered runner cannot participate in
              the race for some reason, one must notify us through E-mail before
              10-OCT-2024 and get their registration cancelled.
            </li>
            <li>
              A registration of one runner cannot be swapped with anyone else or
              carried over to future editions. We will issue a refund{" "}
              <b>upto</b> ₹1350/- for 30K, <b>upto</b> ₹1650/- for 60K for all
              such voluntary cancellations received until 10-Oct-2024 and also
              subject to race entries for that category being filled as of the
              race day. The refund can only be issued after the race subject to
              all slots being filled up. The refund (if any) will only be issued
              in the last week of November 2024.
            </li>
            <li>
              If a registered runner doesn't participate in the race without
              cancelling the registration or notifying us, refund will not be
              processed
            </li>
            <li>
              Runners (in 30K & 60K categories) must submit the hyperlinkany of
              the following during the registration,
              <ul className="list-disc space-y-2 px-16">
                <li>
                  shareable result link of a qualifier race <br />
                  <b>or</b>
                </li>
                <li>matching run in their STRAVA profile</li>
              </ul>
            </li>
            <li>
              If anyone has any questions about their qualification criteria,
              please eMail us @ <span>chennaitrailclub@gmail.com</span> and get
              questions answered before registering.
            </li>
            <li>
              Anyone who registers without submitting or fulfilling the criteria
              will have their registration cancelled and entry fees forfeited.
            </li>
          </ul>
        </div>
      ),
    },
    {
      key: "Food",
      component: () => (
        <div>
          <h1 className="text-[32px] font-bold  mb-4 text-[#070802]">Food</h1>
          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="text-[20px] font-bold mb-2">
                <i class="bi bi-calendar2-event mr-3"></i>
                Pre-Race Dinner (November 08, 2024)
              </h2>
              <p className="p-3">
                For runners, accompanying friends and relatives, planning to
                stay overnight at the venue (Dinner will be served between 7:00
                - 9:00 pm). Food coupons must be purchased for all who opt for
                pre-race dinner at nominal cost fixed by organising team.
              </p>
            </div>
            <div>
              <h2 className="text-[20px] font-bold mb-2">
                <i class="bi bi-calendar2-event mr-3"></i>
                Pre-Race Breakfast (November 09, 2024)
              </h2>
              <p className="p-3">
                Some snacks will be provided for quick bite at the start point
                prior to the commencement of the race. (Note: This won’t be a
                regular breakfast. Its only Bread-Butter-Jam, tea/coffee & etc.)
              </p>
            </div>
            <div>
              <h2 className="text-[20px] font-bold mb-2">
                <i class="bi bi-calendar2-event mr-3"></i>Post-Race Meal
                (November 09, 2024)
              </h2>
              <p className="p-3">
                Lunch will be served for 30KM runners. 60KM runners will get
                light lunch at one of the aid stations, around noon time.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "Medical / Baggage",
      component: () => (
        <div>
          <h1 className="text-[32px] font-bold  mb-4 text-[#070802]">
            Medical Assistance and Baggage Counter
          </h1>
          <h2 className="text-[20px] font-bold mb-2">Medical assistance</h2>
          <ul className="list-disc space-y-2 px-8">
            <li>
              There will be a dedicated medical team at the start/finish points.
            </li>
            <li>
              First aid stations will be located strategically along the course
              taking road accessibility into consideration.
            </li>
            <li>
              Should the volunteers find a runner to be unfit to continue the
              race at any time, they will be pulled out of the run.
            </li>
            <li>
              Runners are requested to strictly abide by the instructions of the
              volunteers.
            </li>
          </ul>
          <h2 className="text-[20px] font-bold mb-2">Baggage Counter</h2>
          <ul className="list-disc space-y-2 px-8">
            <li>
              Baggage counter will be available at the start-line of all
              categories
            </li>
            <li>
              There is no drop bag facility along the route. Runners should
              carry with them whatever needed during the entire length of the
              race
            </li>
          </ul>
        </div>
      ),
    },
    {
      key: "Aid Station / Hydration",
      component: () => (
        <div>
          <h1 className="text-[32px] font-bold  mb-4 text-[#070802]">
            Aid Station and Hydration
          </h1>
          <ul className="list-disc space-y-2 px-8">
            <li>
              Aid stations will be well-stocked with water, energy drinks,
              fruits etc. during the race.
            </li>
            <li>
              Since hills stations is an ecologically sensitive area, we will be
              providing water and energy drinks only in reusable cups / water
              dispensers for Energy drinks & Water at aid stations and rest
              areas.
            </li>
            <li>Participants are free to carry their own refreshments.</li>
            <li>
              Aid stations with water, energy drinks, fruits etc. will be set up
              at average intervals of 5-7 Km along the course.
            </li>
            <li>
              Every runner (from all categories) should compulsorily carry 1
              liter water bottle with them.
            </li>
            <li>
              60K runners will get light lunch at one of the aid stations around
              noon time.
            </li>
          </ul>
        </div>
      ),
    },
    {
      key: "Accommodation / Transport",
      component: () => (
        <div>
          <h1 className="text-[32px] font-bold  mb-4 text-[#070802]">
            Accommodation and Transport
          </h1>
          <div>
            <h2 className="text-[20px] font-bold mb-2">Accommodation</h2>
            <ul className="list-disc space-y-2 px-8">
              <li>
                Camping / staying in the school (
                <span className="text-blue-600">
                  St.Joseph Higher Secondary School, Jamunamarathur
                </span>
                ) is free of cost for all.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] font-bold mb-2">Transport</h2>
            <p>
              Start/Finish point is St.Joseph Higher Secondary School,
              Jamunamarathur, on Polur-Alangayam Road.
            </p>
            <p>Approximate distances to Jamunamaruthur</p>
            <ul className="list-disc space-y-2 px-8">
              <li> Polur - 40km </li>
              <li> Alangayam - 25km </li>
              <li> Tirupattur - 50km (via Alangayam) </li>
              <li> Vellor - 90km (via Alangayam) </li>
              <li> Vaniyambadi - 45km (via Alangayam)</li>
              <li> Thiruvannamalai - 80km (via Polur)</li>
              <li> Arcot - 95km (via Polur) </li>
              <li> Vandavasi - 100km (via Polur) </li>
            </ul>
            <p>
              Public Transport buses between Alangayam and Polur passes through
              Jamunamaruthur. Frequency will be approximately 45 minutes. Last
              bus in each direction will be around 7:30PM.
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "Medals, Certificates & Results",
      component: () => (
        <div>
          <h1 className="text-[32px] font-bold  mb-4 text-[#070802]">
            Medals, Certificates & Results
          </h1>
          <div className="border boder-solid border-[#f1a847] rounded-xl bg-[#FCF6EA] text-black p-4 space-y-4 mt-6 mb-4">
            <h2 className="text-[20px] font-semibold"><i class="bi bi-exclamation-circle-fill text-[#f1a847]"></i> Important</h2>
            <ul className="list-disc space-y-2 px-16">
              <li>
                {" "}
                Medals will be awarded to all runners who finish within the
                cut-off.
              </li>
              <li>
                {" "}
                Certificates will also be made available online to all 30K & 60K
                finishers.
              </li>
              <li> Results will be uploaded to website after 2-3 days. </li>
              <li>
                {" "}
                There is no prize money or awards for podium finishers as we
                believe that all participants are winners.{" "}
              </li>
              <li>
                {" "}
                There is no chip on the bib. Timing will be noted manually at
                timing points along the route{" "}
              </li>
            </ul>
          </div>
          <div>
            <ul className="list-disc space-y-2 px-16">
              <li>
                {" "}
                All participants must accept complete responsibility for any
                injury, physical or otherwise, that may be caused to them during
                the event, or while on the premises of the event.
              </li>
              <li>
                {" "}
                Runners are required to check-in and collect their
                bibs/race-kits personally during the pre-race dinner/briefing on
                Saturday 08-Nov-2024. Runners cannot authorise a third party to
                collect the bib/race-kit on their behalf.
              </li>
              <li>
                {" "}
                Runners must wear the official bib provided by the organisers
                throughout the event. If one takes the bib off for any reason
                whatsoever, they will be noted as DNF (did-not-finish).
              </li>
              <li>
                {" "}
                Only finishers within the cut-off time will be entitled to
                receive their official timing and finisher medal.
              </li>
              <li>
                {" "}
                The organiser reserves the right to cancel, postpone or delay
                the event due to any unforeseen circumstances beyond their
                control and at their discretion.
              </li>
              <li>
                {" "}
                The organiser shall not be liable in respect to any entry fees,
                costs and expenses that a participant may incur as a result of
                such cancellation or postponement.
              </li>
              <li>
                {" "}
                A registered runner consent to the free use of one's name,
                voice, picture or video in any broadcast, telecast, advertising,
                promotion or other account of this event.
              </li>
              <li>
                {" "}
                Registered Runners must ensure that they provide correct details
                during the registration process and inform the organiser well in
                advance of the race, of any changes. If one's contact
                information changes after the submission for the registration,
                the organiser must be notified by eMail @
                chennaitrailclub@gmail.com well in advance of the event.
              </li>
              <li>
                {" "}
                The course of the Jawadhu Hill Ultra takes the runner through
                areas under the control of the Forests Department. Please be
                sensitive to the environment and do not disturb the surrounding
                flora and fauna in any manner.
              </li>
              <li>
                {" "}
                Runners are required to run along the marked track only. The
                area and the course are also a habitat for a variety of snakes.
                Please do take due care and exercise caution.
              </li>
              <li>
                {" "}
                Runners are requested to cooperate with race officials,
                volunteers and other personnel during the event.
              </li>
              <li>
                {" "}
                The organiser reserves the right to refuse an entrant's
                attendance at, or participation in, the race.
              </li>
              <li>
                {" "}
                Any participant who is found putting themselves or anyone else
                at risk will be immediately evicted from the course and event
                venue.
              </li>
              <li>
                {" "}
                The organiser shall reserve the right to remove, ban or exclude
                any participant who is found in breach of these terms and
                conditions.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      key: "Running Tips",
      component: () => (
        <div>
          <h1 className="text-[32px] font-bold  mb-4 text-[#070802]">
            Tips to be followed
          </h1>
          <div className="w-full  space-y-2 flex flex-wrap">
            <div className="w-1/3  p-2">
              <div>
                <i class="bi bi-flag text-[56px]  text-[#D0F700]"></i>
              </div>
              <h2 className="text-[20px] font-semibold">
                The terrain is not same:
              </h2>
              <p>
                We call it a multi-terrain marvel. Therefore, running in the
                trail has its own unique challenges and being watchful and alert
                while running on the trail.
              </p>
            </div>
            <div className="w-1/3 p-2">
              <div>
                <i class="bi bi-search text-[56px] text-[#D0F700]"></i>
              </div>
              <h2 className="text-[20px] font-semibold">Find your rhythm:</h2>
              <p>
                exhausting, focus on finding the rhythm until you sense being
                one with the terrain{" "}
              </p>
            </div>
            <div className="w-1/3  p-2">
              <div>
                <i class="bi bi-person-walking text-[56px] text-[#D0F700]"></i>
                <i class="bi bi-person-walking text-[56px] text-[#D0F700]"></i>
              </div>
              <h2 className="text-[20px] font-semibold">Run with a buddy:</h2>
              <p>
                If you are not aiming at a podium finish or personal best, run
                with a buddy so that you can be safe inside the trails.
              </p>
            </div>
            <div className="w-1/3 p-2">
              <div>
                <i class="bi bi-emoji-heart-eyes text-[56px] text-[#D0F700]"></i>
              </div>
              <h2 className="text-[20px] font-semibold">
                Keep your eyes on the trail:
              </h2>
              <p>
                It can be tempting to look at the nature around you, but doing
                so can quickly lead to tripping and falling. It is advisable to
                keep your eyes on the trail.
              </p>
            </div>
            <div className="w-1/3 p-2">
              <div>
                <i class="bi bi-shop text-[56px] text-[#D0F700]"></i>
              </div>
              <h2 className="text-[20px] font-semibold">
                Sport with your Trail shoes:
              </h2>
              <p>
                If you have a pair of trail running shoes, sport with them. They
                reduce the chance of ankle rolls with a high heel.
              </p>
            </div>
            <div className="w-1/3  p-2">
              <div>
                <i class="bi bi-eyeglasses text-[56px] text-[#D0F700]"></i>
              </div>
              <h2 className="text-[20px] font-semibold">Accessorise:</h2>
              <p>
                It is advisable to apply sunscreen, wear your sunglasses,
                cap/hat or carry a piece of white cotton cloth to cover yourself
                when the sun is pretty hard after 8 a.m.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const [selectedKey, setSelectedKey] = useState(content[0].key);

  const handleButtonClick = (key) => {
    setSelectedKey(key);
  };

  const selectedComponent =
    content.find((item) => item.key === selectedKey)?.component || (() => null);

  return (
    <div className=" w-full flex space-x-20 text-[#50514C] text-[16px]">
      <aside className=" text-black p-6 flex flex-col border items-start  border-gray-200 rounded-lg space-y-2 max-h-[618px]">
        {content.map((item) => (
          <button
            key={item.key}
            onClick={() => handleButtonClick(item.key)}
            className="text-start rounded-lg w-full hover:bg-[#070802] hover:text-[#D0F700] p-3 focus:text-[#D0F700] focus:bg-[#070802]"
          >
            {item.key}
          </button>
        ))}
      </aside>
      <div className="w-full py-4 px-6 rounded-lg  shadow-xl">
        {selectedComponent()}
      </div>
    </div>
  );
};

export default EventInfo;
