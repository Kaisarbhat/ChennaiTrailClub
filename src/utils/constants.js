export const eventContent = [
    {
      key: "General Info",
      component: () => (
        <div className="leading-loose">
          <h1 className="md:text-[32px] md:font-bold font-bold  xs:mt-4 md:mt-0 xs:mb-8 mb-4 xs:font-medium text-[#070802] xs:text-center md:text-start xs:text-lg">
            General Information
          </h1>
          <h5 className="md:text-[20px] xs:text-[16px] mb-2 font-semibold">
            {" "}
            Following are general information that you have to know before
            registering,
          </h5>
          <ul className="list-disc space-y-3 px-8 xs:text-sm md:text-[16px]">
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
        <div className="leading-loose">
          <h1 className="md:text-[32px] md:font-bold font-bold xs:mt-4 md:mt-0  xs:mb-8   mb-4 text-[#070802] xs:text-lg xs:text-center md:text-start ">
            Categories
          </h1>
          <p className="xs:text-sm md:text-lg">
            Jawadhu Hill Ultra (JHU-24) offers two categories in the 2024
            edition
          </p>
          <h3 className="text-[20px] xs:text-[16px] font-semibold mb-2">
            30K with approximately 900m of elevation gain.
          </h3>
          <ul className="list-disc space-y-3 px-16 xs:px-8 xs:text-sm md:text-[16px]">
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
          <h3 className="md:text-[20px] xs:text-[16px] font-semibold mb-2">
            60K with approximately 1600m of elevation gain.
          </h3>
          <ul className="list-disc space-y-2 px-16 xs:px-8  xs:text-sm md:text-[16px] ">
            <li>
              It's also a point-to-point course taking runners through the most
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
          <div className="border boder-solid border-[#f1a847] rounded-xl bg-[#FCF6EA] text-[#50514c] p-4 space-y-4 mt-6">
            <h2 className="md:text-[20px] xs:text-[16px] font-semibold">
              <i class="bi bi-exclamation-circle-fill text-[#ffb24d]"></i> Note
            </h2>
            <ul className="list-disc space-y-2 px-16 xs:px-8 flex flex-col justify-between xs:text-sm">
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
        <div className="leading-loose">
          <h1 className="md:text-[32px] md:font-bold xs:mt-4 md:mt-0  xs:mb-8 xs:text-lg xs:text-center md:text-start  xs:font-medium font-bold  mb-4 text-[#070802]">
            Rules & Criteria
          </h1>
          <p className="xs:text-[13px] md:text-[16px]">
            {" "}
            Considering all challenges through the course and other
            considerations, the participants must meet the following criteria:
          </p>
          <ul className="list-disc space-y-3 px-16 xs:px-8 xs:text-sm md:text-[16px]">
            <li>
              {" "}
              For registering for 60K, Registrants must have completed
              <ul className="list-disc space-y-3 md:px-16 xs:px-8">
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
              <ul className="list-disc space-y-3 md:px-16 xs:px-8">
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
        <div className="leading-loose">
          <h1 className="md:text-[32px] md:font-bold xs:mt-4 md:mt-0  xs:mb-8 xs:text-lg xs:text-center  md:text-start xs:font-medium font-bold  mb-4 text-[#070802]">
            Food
          </h1>
          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="md:text-[20px] xs:text-[16px] font-bold mb-2">
                <i class="bi bi-calendar2-event mr-3"></i>
                Pre-Race Dinner (November 08, 2024)
              </h2>
              <p className="md:p-3 xs:px-8 md:text-[16px] xs:text-[13px] xs:leading-loose">
                For runners, accompanying friends and relatives, planning to
                stay overnight at the venue (Dinner will be served between 7:00
                - 9:00 pm). Food coupons must be purchased for all who opt for
                pre-race dinner at nominal cost fixed by organising team.
              </p>
            </div>
            <div>
              <h2 className="md:text-[20px] xs:text-[16px] font-bold mb-2">
                <i class="bi bi-calendar2-event mr-3"></i>
                Pre-Race Breakfast (November 09, 2024)
              </h2>
              <p className="md:p-3 xs:px-8 md:text-[16px] xs:leading-loose">
                Some snacks will be provided for quick bite at the start point
                prior to the commencement of the race. (Note: This won’t be a
                regular breakfast. Its only Bread-Butter-Jam, tea/coffee & etc.)
              </p>
            </div>
            <div>
              <h2 className="md:text-[20px] xs:text-[16px] font-bold mb-2">
                <i class="bi bi-calendar2-event mr-3"></i>Post-Race Meal
                (November 09, 2024)
              </h2>
              <p className="md:p-3 xs:px-8 md:text-[16px] xs:leading-loose">
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
        <div className="leading-loose">
          <h1 className="md:text-[32px] md:font-bold xs:mt-4 md:mt-0  xs:mb-8 xs:text-lg xs:text-center  xs:font-medium md:text-start  font-bold  mb-4 text-[#070802]">
            Medical Assistance and Baggage Counter
          </h1>
          <h2 className="md:text-[20px] xs:text-[16px] font-bold mb-2">
            Medical assistance
          </h2>
          <ul className="list-disc space-y-2 px-8 md:text-[16px] xs:text-sm">
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
          <h2 className="md:text-[20px] xs:text-[16px]  font-bold mb-2">
            Baggage Counter
          </h2>
          <ul className="list-disc space-y-3 md:text-[16px]  px-8 xs:text-sm">
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
        <div className="leading-loose">
          <h1 className="md:text-[32px] md:font-bold xs:mt-4 md:mt-0  xs:mb-8 xs:text-lg xs:text-center md:text-start  xs:font-medium font-bold   mb-4 text-[#070802]">
            Aid Station and Hydration
          </h1>
          <ul className="list-disc space-y-3 px-8 md:text-[16px] xs:text-sm">
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
        <div className="leading-loose">
          <h1 className="md:text-[32px] md:font-bold xs:mt-4 md:mt-0  xs:mb-8 xs:text-lg xs:text-center md:text-start xs:font-medium font-bold  mb-4 text-[#070802]">
            Accommodation and Transport
          </h1>
          <div>
            <h2 className="md:text-[20px] xs:text-[16px] font-bold mb-2">
              Accommodation
            </h2>
            <ul className="list-disc space-y-3  px-8  md:text-[16px] xs:text-sm">
              <li>
                Camping / staying in the school (
                <span className="text-blue-600">
                  St.Joseph Higher Secondary School, Jamunamarathur
                </span>
                ) is free of cost for all.
              </li>
            </ul>
          </div>
          <div className="md:text-[16px] xs:text-sm space-y-3">
            <h2 className="md:text-[20px] xs:text-[16px] font-bold mb-2">
              Transport
            </h2>
            <p className="">
              Start/Finish point is St.Joseph Higher Secondary School,
              Jamunamarathur, on Polur-Alangayam Road.
            </p>
            <p>Approximate distances to Jamunamaruthur</p>
            <ul className="list-disc space-y-3 px-8">
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
        <div className="leading-loose">
          <h1 className="md:text-[32px] md:font-bold xs:mt-4 md:mt-0  xs:mb-8 xs:text-lg xs:text-center  md:text-start  xs:font-medium font-bold  mb-4 text-[#070802]">
            Medals, Certificates & Results
          </h1>
          <div className="border boder-solid border-[#f1a847] rounded-xl bg-[#FCF6EA] text-black p-4 space-y-4 mt-6 mb-4">
            <h2 className="md:text-[20px] xs:text-[16px] font-semibold">
              <i class="bi bi-exclamation-circle-fill text-[#f1a847]"></i>{" "}
              Important
            </h2>
            <ul className="list-disc space-y-3 md:px-16 xs:px-8 md:text-[16px] xs:text-sm">
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
            <ul className="list-disc space-y-3 px-16 xs:px-8 xs:text-sm md:text-[16px] ">
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
        <div className="leading-normal">
          <h1 className="md:text-[32px] md:font-bold  xs:mt-4 md:mt-0  xs:mb-8 xs:text-lg xs:text-center  md:text-start  xs:font-medium   mb-4 text-[#070802] ">
            Tips to be followed
          </h1>
          <div className="w-full  space-y-2 flex xs:flex-col md:flex-row xs:text-center md:text-start  md:flex-wrap">
            <div className="md:w-1/3 xs:w-full p-2">
              <div>
                <i class="bi bi-flag text-[56px]  text-[#D0F700]"></i>
              </div>
              <h2 className="md:text-[20px] xs-text-[16] text-[#070802] lg:font-semibold  md:font-medium leading-5">
                The terrain is not same:
              </h2>
              <p className="xs:text-[13px] md:text-[16px]">
                We call it a multi-terrain marvel. Therefore, running in the
                trail has its own unique challenges and being watchful and alert
                while running on the trail.
              </p>
            </div>
            <div className="md:w-1/3 p-2 xs:w-full">
              <div>
                <i class="bi bi-search text-[56px] text-[#D0F700]"></i>
              </div>
              <h2 className="md:text-[20px] xs-text-[16] text-[#070802] lg:font-semibold  md:font-medium leading-5">
                Find your rhythm:
              </h2>
              <p className="xs-text-[13] md:text-[16px]">
                exhausting, focus on finding the rhythm until you sense being
                one with the terrain{" "}
              </p>
            </div>
            <div className="md:w-1/3  p-2 xs:w-full">
              <div>
                <i class="bi bi-person-walking text-[56px] text-[#D0F700]"></i>
                <i class="bi bi-person-walking text-[56px] text-[#D0F700]"></i>
              </div>
              <h2 className="md:text-[20px] xs-text-[16] text-[#070802] lg:font-semibold  md:font-medium leading-5">
                Run with a buddy:
              </h2>
              <p className="xs-text-[13] md:text-[16px]">
                If you are not aiming at a podium finish or personal best, run
                with a buddy so that you can be safe inside the trails.
              </p>
            </div>
            <div className="md:w-1/3 p-2 xs:w-full">
              <div>
                <i class="bi bi-emoji-heart-eyes text-[56px] text-[#D0F700]"></i>
              </div>
              <h2 className="md:text-[20px] xs-text-[16] text-[#070802] lg:font-semibold  md:font-medium leading-5">
                Keep your eyes on the trail:
              </h2>
              <p className="xs-text-[13] md:text-[16px]">
                It can be tempting to look at the nature around you, but doing
                so can quickly lead to tripping and falling. It is advisable to
                keep your eyes on the trail.
              </p>
            </div>
            <div className="md:w-1/3 p-2 xs:w-full">
              <div>
                <i class="bi bi-shop text-[56px] text-[#D0F700]"></i>
              </div>
              <h2 className="md:text-[20px] xs-text-[16] text-[#070802] lg:font-semibold  md:font-medium leading-5">
                Sport with your Trail shoes:
              </h2>
              <p className="xs-text-[13] md:text-[16px]">
                If you have a pair of trail running shoes, sport with them. They
                reduce the chance of ankle rolls with a high heel.
              </p>
            </div>
            <div className="md:w-1/3  p-2 xs:w-full">
              <div>
                <i class="bi bi-eyeglasses text-[56px] text-[#D0F700]"></i>
              </div>
              <h2 className="md:text-[20px] xs-text-[16] lg:font-semibold  md:font-medium leading-5 text-[#070802]">
                Accessorise:
              </h2>
              <p className="xs-text-[13] md:text-[16px]">
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

 export const privacyData = [
    {
      key: 1,
      heading: "Last updated:",
      text: [
        "This Privacy Policy describes how Chennai Trail Club (the “Site”, “we”, “us”, or “our”) collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from www.chennaitrailclub.in (the “Site”) or otherwise communicate with us (collectively, the “Services”). For purposes of this Privacy Policy, “you” and “your” means you as the user of the Services, whether you are a customer, website visitor, or another individual whose information we have collected pursuant to this Privacy Policy.",
        "Please read this Privacy Policy carefully. By using and accessing any of the Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not use or access any of the Services.",
      ],
    },
    {
      key: 2,
      heading: "Changes to This Privacy Policy",
      text: [
        "We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the Site, update the “Last updated” date and take any other steps required by applicable law.",
      ],
    },
    {
      key: 3,
      heading: "What Personal Information We Collect",
      text: [
        "The types of personal information we obtain about you depends on how you interact with our Site and use our Services. When we use the term “personal information”, we are referring to information that identifies, relates to, describes or can be associated with you. The following sections describe the categories and specific types of personal information we collect.",
      ],
    },
    {
      key: 4,
      heading: "Information We Collect Directly from You",
      text: [
        "Information that you directly submit to us through our Services may include:",
        "- Basic contact details including your name, address, phone number, email.",
        "- Order information including your name, billing address, shipping address, payment confirmation, email address, phone number.",
        "-Account information including your username, password, security questions.",
        "-Shopping information including the items you view, put in your cart or add to your wishlist.",
        "- Customer support information including the information you choose to include in communications with us, for example, when sending a message through the Services.",
        "Some features of the Services may require you to directly provide us with certain information about yourself. You may elect not to provide this information, but doing so may prevent you from using or accessing these features.",
      ],
    },
    {
      key: 5,
      heading: "Information We Collect through Cookies",
      text: [
        "We also automatically collect certain information about your interaction with the Services (“Usage Data”). To do this, we may use cookies, pixels and similar technologies (“Cookies”). Usage Data may include information about how you access and use our Site and your account, including device information, browser information, information about your network connection, your IP address and other information regarding your interaction with the Services.",
      ],
    },
    {
      key: 6,
      heading: "Information We Obtain from Third Parties",
      text: [
        "Finally, we may obtain information about you from third parties, including from vendors and service providers who may collect information on our behalf, such as:",
        "-Companies who support our Site and Services, such as Shopify.",
        "-Our payment processors, who collect payment information (e.g., bank account, credit or debit card information, billing address) to process your payment in order to fulfill your orders and provide you with products or services you have requested, in order to perform our contract with you.",
        "- When you visit our Site, open or click on emails we send you, or interact with our Services or advertisements, we, or third parties we work with, may automatically collect certain information using online tracking technologies such as pixels, web beacons, software developer kits, third-party libraries, and cookies.",
        "Any information we obtain from third parties will be treated in accordance with this Privacy Policy. We are not responsible or liable for the accuracy of the information provided to us by third parties and are not responsible for any third party’s policies or practices. For more information, see the section below, Third Party Websites and Links.",
      ],
    },
    {
      key: 7,
      heading: "How We Use Your Personal Information",
      text: [
        "Providing Products and Services. We use your personal information to provide you with the Services in order to perform our contract with you, including to process your payments, fulfill your orders, to send notifications to you related to you account, purchases, returns, exchanges or other transactions, to create, maintain and otherwise manage your account, to arrange for shipping, facilitate any returns and exchanges and to enable you to post reviews.",
        "-Marketing and Advertising. We use your personal information for marketing and promotional purposes, such as to send marketing, advertising and promotional communications by email, text message or postal mail, and to show you advertisements for products or services. This may include using your personal information to better tailor the Services and advertising on our Site and other websites.",
        "Security and Fraud Prevention. We use your personal information to detect, investigate or take action regarding possible fraudulent, illegal or malicious activity. If you choose to use the Services and register an account, you are responsible for keeping your account credentials safe. We highly recommend that you do not share your username, password, or other access details with anyone else. If you believe your account has been compromised, please contact us immediately.",
        "Communicating with you. We use your personal information to provide you with customer support and improve our Services. This is in our legitimate interests in order to be responsive to you, to provide effective services to you, and to maintain our business relationship with you.",
      ],
    },
    {
      key: 8,
      heading: "Privacy Guarantee",
      text: [
        "We agree that we will not sell or rent your personal information to third parties for their marketing purposes without your explicit consent. From time to time, we may reveal general statistical information about our Site and visitors, such as number of visitors, number and type of goods and services purchased, etc. Only those of our employees who need access to your information in order to perform their duties, are allowed such access. Any employee who violates our privacy and/or security policies is subjected to disciplinary action, including possible termination and civil and/or criminal prosecution.",
      ],
    },
    {
      key: 9,
      heading: "Third Party Websites and Links",
      text: [
        "Our Site may provide links to websites or other online platforms operated by third parties. If you follow links to sites not affiliated or controlled by us, you should review their privacy and security policies and other terms and conditions. We do not guarantee and are not responsible for the privacy or security of such sites, including the accuracy, completeness, or reliability of information found on these sites. Information you provide on public or semi-public venues, including information you share on third-party social networking platforms may also be viewable by other users of the Services and/or users of those third-party platforms without limitation as to its use by us or by a third party. Our inclusion of such links does not, by itself, imply any endorsement of the content on such platforms or of their owners or operators, except as disclosed on the Services.",
      ],
    },
    {
      key: 10,
      heading: "Security and Retention of Your Information",
      text: [
        "Please be aware that no security measures are perfect or impenetrable, and we cannot guarantee “perfect security.” In addition, any information you send to us may not be secure while in transit. We recommend that you do not use unsecure channels to communicate sensitive or confidential information to us.",
        "How long we retain your personal information depends on different factors, such as whether we need the information to maintain your account, to provide the Services, comply with legal obligations, resolve disputes or enforce other applicable contracts and policies",
      ],
    },
    {
      key: 11,
      heading: "Your Rights and Choices",
      text: [
        "Depending on where you live, you may have some or all of the rights listed below in relation to your personal information. However, these rights are not absolute, may apply only in certain circumstances and, in certain cases, we may decline your request as permitted by law.",
        "- Right to Access / Know. You may have a right to request access to personal information that we hold about you, including details relating to the ways in which we use and share your information.",
        "-Right to Delete. You may have a right to request that we delete personal information we maintain about you",
        "-Right to Correct. You may have a right to request that we correct inaccurate personal information we maintain about you.",
        "- Right of Portability. You may have a right to receive a copy of the personal information we hold about you and to request that we transfer it to a third party, in certain circumstances and with certain exceptions.",
        "-Right to Opt out of Sale or Sharing or Targeted Advertising. You may have a right to direct us not to “sell” or “share” your personal information or to opt out of the processing of your personal information for purposes considered to be “targeted advertising”, as defined in applicable privacy laws. Please note that if you visit our Site with the Global Privacy Control opt-out preference signal enabled, depending on where you are, we will automatically treat this as a request to opt-out of the “sale” or “sharing” of information for the device and browser that you use to visit the Site.",
        "-Right to Limit and/or Opt out of Use and Disclosure of Sensitive Personal Information. You may have a right to direct us to limit our use and/or disclosure of sensitive personal information to only what is necessary to perform the Services or provide the goods reasonably expected by an average individual.",
        "-Withdrawal of Consent: Where we rely on consent to process your personal information, you may have the right to withdraw this consent.",
        "-Appeal: You may have a right to appeal our decision if we decline to process your request. You can do so by replying directly to our denial.",
        "-Managing Communication Preferences: We may send you promotional emails, and you may opt out of receiving these at any time by using the unsubscribe option displayed in our emails to you. If you opt out, we may still send you non-promotional emails, such as those about your account or orders that you have made.",
        "You may exercise any of these rights where indicated on our Site or by contacting us using the contact details provided below.",
        "We will not discriminate against you for exercising any of these rights. We may need to collect information from you to verify your identity, such as your email address or account information, before providing a substantive response to the request. In accordance with applicable laws, You may designate an authorized agent to make requests on your behalf to exercise your rights. Before accepting such a request from an agent, we will require that the agent provide proof you have authorized them to act on your behalf, and we may need you to verify your identity directly with us. We will respond to your request in a timely manner as required under applicable law.",
      ],
    },
    {
      key: 12,
      heading: "Contact",
      text: [
        "Should you have any questions about our privacy practices or this Privacy Policy, or if you would like to exercise any of the rights available to you, please email us at chennaitrailclub@gmail.com ",
      ],
    },
  ];