export const eventData = {
  imageUrl: "/banner.png",
  banner: "/JHU-2024-Banner.jpg",
  eventName: "Jawadhu Hills Ultra 2024",
  eventAbbr: "(JHU-24)",
  eventText: `Jawadhu Hills Ultra is back! Experience the most scenic trails in
            the Eastern Ghats, weaving through the pristine hills of Jawadhu
            range. Challenge yourself on diverse terrains, enjoy breathtaking
            vistas, and immerse in the natural beauty.`,

  eventDate: "09 November 2024, (Saturday)",
  eventLocation: " St.Joseph Higher Secondary School, Jamunamarathur",
  eventTitle: "JNU 2024",
};
export const featuresData = [
  {
    imageUrl: "/new-events-1.png",
    eventName: "Urapakkam Trail Marathon Bliss",
    eventText: `Exploring lakes and trails around Urapakkam that goes through
                bush forests and sleepy villages. The trails run through rural
                areas around suburbs of south Chennai that are aimed to
                promote trail running in spirit`,
  },
  {
    imageUrl: "/new-events-3.png",
    eventName: "Adyar River Bank Trail",
    eventText: `Nestled in the heart of the Chennai city, Adyar river bank is
                a 3km trail that runs alongside Adyar river. It is a go-to
                place for trail runners for Chennai who seek to run in a
                peaceful and serene environment`,
  },
  {
    imageUrl: "/new-events-3.png",
    eventName: "Weekend events",
    eventText: `Weekends are for outdoors and we head out to the nearby
                hills/places around chennai for running and cycling. You would
                be meeting like minded people and sleeping under the stars in
                such events`,
  },
  {
    imageUrl: "/new-events-4.png",
    eventName: "Anjur Hill Runs",
    eventText: `Anjur hill near Chengalpet is a hill trail for 1km with an
                elevation of 150m, where runners can do hill repeats. Doing
                hill repeats strengthens your endurance and prepares you for
                long ultra runs organized by Chennai Trail Club.`,
  },
];
export const raceDate = [
  `Jawadhu Hill Ultra is an Ultra Trail Marathon is organized by
   Chennai Trail Club in the hills of Jawadhu Hills (Eastern ghats).
   Chennai Trail club is a group of fitness enthusiasts who are
   passionate about long distance running. Through this Ultra
   running, we are providing an opportunity and experience to run
   through the trails, streams, farms and by the hamlet of Jawadhu
   hills.`,
  `The Jawadhu Hills is an extension of the Eastern Ghats spread
   across parts of Vellore, Tirupattur and Tiruvannamalai districts
   in the northern part of the state of Tamil Nadu in south-eastern
   India.`,
  `Jamanamarathur is one of the larger villages in these hills,
   populated with around 10,000. With an altitude of 857m, it is the
   second village in height in Jawadhu hills in Tiruvannamali
   district.`,
  `One can reach Jamanamarathur from`,
  `West - Tirupattur or Vaniyambadi`,
  `East - Polur`,
  `Northeast - Vellore`,
  `South - Chengam`,
];
export const pastEvents = {
  imageUrl: "/past-event.jpg",
  eventName: "Chennai Trail Ultra 2024 (CTU-24)",
  eventLocation: `Gojan School of Business and Technology`,
  eventDate: "01 September 2024 (Sunday)",
  resultUrl:
    "https://myraceindia.com/overall/2024/Chennai%20Trail%20Ultra%202024",
};

export const registerContent = [
  {
    key: "1",
    title: "Personal Details",
    fields: [
      {
        name: "runningCategory",
        label: "Select your Running Category",
        type: "select",
        options: ["30KM (INR 1800)", "60KM (INR 2200)"],
        id: "runningCategory",
      },
      { name: "firstName", label: "First Name", type: "text" },
      { name: "lastName", label: "Last Name", type: "text" },
      { name: "mobile", label: "Mobile", type: "tel" },
      { name: "email", label: "Email", type: "email" },
      {
        name: "gender",
        label: "Gender",
        type: "select",
        options: ["Male", "Female", "Prefer Not To Say"],
      },
      {
        name: "dateOfBirth",
        label: "Date of Birth",
        type: "date",
        min: "1960-01-01",
        max: "2006-12-31",
      },
      {
        name: "tShirtSize",
        label: "Select Your T-shirt Size",
        type: "select",
        options: [
          "XS (33)",
          "S (35)",
          "M (38)",
          "L (41)",
          "XL (44)",
          "2XL(47)",
          "3XL(51)",
          "4XL(54)",
        ],
      },

      { name: "city", label: "City", text: "Address", type: "text" },
      {
        name: "state",
        label: "State/Province/Region",
        type: "select",
        options: [
          "Andaman and Nicobar Islands",
          "Andhra Pradesh",
          "Arunachal Pradesh",
          "Assam",
          "Bihar",
          "Chandigarh",
          "Chhattisgarh",
          "Dadra and Nagar Haveli",
          "Daman and Diu",
          "Delhi",
          "Goa",
          "Gujarat",
          "Haryana",
          "Himachal Pradesh",
          "Jammu and Kashmir",
          "Jharkhand",
          "Karnataka",
          "Kerala",
          "Ladakh",
          "Lakshadweep",
          "Madhya Pradesh",
          "Maharashtra",
          "Manipur",
          "Meghalaya",
          "Mizoram",
          "Nagaland",
          "Odisha",
          "Puducherry",
          "Punjab",
          "Rajasthan",
          "Sikkim",
          "Tamil Nadu",
          "Telangana",
          "Tripura",
          "Uttar Pradesh",
          "Uttarakhand",
          "West Bengal",
        ],
      },
    ],
  },
  {
    key: "2",
    title: "Other Details",
    fields: [
      {
        name: "bloodGroup",
        label: "Blood Group",
        type: "select",
        options: ["B-", "B+", "O-", "O+", "A-", "A+", "AB-", "AB+"],
      },
      { name: "bibName", label: "Name on BIB", type: "text" },
      {
        name: "runningClub",
        label: "Running Club you are part of",
        type: "select",
        options: ["CTC", "20Cube Sprinters", "Addida Runners - Bengaluru"],
      },
      {
        name: "emergencyContactName",
        label: "Emergency Contact Name",
        type: "text",
      },
      {
        name: "emergencyContactRelation",
        label: "Emergency Contact Relation",
        type: "select",
        options: [
          "Spouse",
          "Parent",
          "Sibling",
          "Relative",
          "Child",
          "Friend",
          "Guardian",
        ],
      },
      {
        name: "emergencyContactNumber",
        label: "Emergency Contact Number",
        type: "tel",
      },
    ],
  },
  {
    key: "3",
    title: "Medical Questions",
    fields: [
      {
        name: "cardiovascularDisease",
        label: "Do you suffer from cardiovascular disease?",
        type: "radio",
        options: ["Yes", "No"],
      },
      {
        name: "medicalSupervision",
        label:
          "Have you been advised by doctor to engage in Physical activity only under medical supervision?",
        type: "radio",
        options: ["Yes", "No"],
      },
      {
        name: "pregnancyRisk",
        label:
          "Pregnant Women: Has this or any previous pregnancy been defined as being at risk?",
        type: "radio",
        options: ["Yes", "No"],
      },
      {
        name: "asthma",
        label: "Have you been diagnosed with asthma?",
        type: "radio",
        options: ["Yes", "No"],
      },
      {
        name: "dizziness",
        label: "Have you lost balance due to Dizziness?",
        type: "radio",
        options: ["Yes", "No"],
      },
      {
        name: "chestPain",
        label:
          "Do you suffer from Chest Pain (At Rest / Daily Activity / Physical Activity)?",
        type: "radio",
        options: ["Yes", "No"],
      },
      {
        name: "chronicIllness",
        label:
          "Do you suffer from any chronic illness not mentioned above, which limits you from Physical activities?",
        type: "radio",
        options: ["Yes", "No"],
      },
      {
        name: "otherMedicalConditions",
        label:
          "If any other specific medical conditions, please mention below:",
        type: "text",
      },
    ],
  },
  {
    key: "4",
    title: "Qualification & Waiver Form",
    fields: [
      {
        name: "timingCertificates",
        label:
          "Link to timing certificates/runner profile to demonstrate your qualification to Jawadhu Hills Ultra (races run after 01-Feb-2023)",
        type: "url",
      },
      {
        name: "para",
        label:
          "Read the Liability Waiver Form and Acknowledge it by clicking the checkbox at end of wavier content.",
        type: "para",
      },
      {
        name: "termsandconditions",
        type: "termsandconditions",
      },
      { name: "joinClub", type: "hidden" },
      {
        name: "waiverAcknowledgement",
        type: "hidden",
      },
    ],
  },
];
export const registerCardData = {
  imageurl: "/JHU-2024-Banner.jpg",
  eventName: "Jawadhu Hills Ultra (JHU-24)",
  eventDate: "09 November 2024",
  eventLocation: "St.Joseph Higher Secondary School, Jamunamarathur",
};
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
            Upon successful confirmation of payment, an E-mail will be sent from
            chennaitrailclub@gmail.com. Please scout your junk or spam folder if
            you have not received the confirmation in your inbox.
          </li>
          <li>No SMS will be sent.</li>
          <li>
            There is also no confirmation E-mail post verification of
            qualification criteria. Qualification criteria is deemed accepted if
            the criteria are met.
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
          Jawadhu Hill Ultra (JHU-24) offers two categories in the 2024 edition
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
            <span>St.Joseph Higher Secondary School, Jamunamarathur.</span> and
            will finish at same place.
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
            However, runners must pass one stage cut-off, located approximately
            around 30K.
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
              All time and distance mentioned here are tentative and subject to
              very minor changes, which will be confirmed a week before the
              race.
            </li>
            <li>
              Runners still on the course after the cut-off time (both stage and
              overall cut-offs) will be picked up by the sweep vehicles and will
              not be permitted to continue the race. There will be no exception
              as the cut-off times are implemented to ensure local government
              body guidelines.
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
            For registering for 30K, one must have at least run a half marathon
            in 03:00 Hrs. Alternatively any distance of 25K and above (within
            the cut-off of that race) can be considered as a qualifying race.
          </li>
          <li>
            Races/Run after 01-Feb-2023 will only be considered as a qualifying
            race for Jawadhu Hill Ultra for 30K & 60K categories.
          </li>
          <li>
            After registration, if a registered runner cannot participate in the
            race for some reason, one must notify us through E-mail before
            10-OCT-2024 and get their registration cancelled.
          </li>
          <li>
            A registration of one runner cannot be swapped with anyone else or
            carried over to future editions. We will issue a refund <b>upto</b>{" "}
            ₹1350/- for 30K, <b>upto</b> ₹1650/- for 60K for all such voluntary
            cancellations received until 10-Oct-2024 and also subject to race
            entries for that category being filled as of the race day. The
            refund can only be issued after the race subject to all slots being
            filled up. The refund (if any) will only be issued in the last week
            of November 2024.
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
              For runners, accompanying friends and relatives, planning to stay
              overnight at the venue (Dinner will be served between 7:00 - 9:00
              pm). Food coupons must be purchased for all who opt for pre-race
              dinner at nominal cost fixed by organising team.
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
              <i class="bi bi-calendar2-event mr-3"></i>Post-Race Meal (November
              09, 2024)
            </h2>
            <p className="md:p-3 xs:px-8 md:text-[16px] xs:leading-loose">
              Lunch will be served for 30KM runners. 60KM runners will get light
              lunch at one of the aid stations, around noon time.
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
            Should the volunteers find a runner to be unfit to continue the race
            at any time, they will be pulled out of the run.
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
            There is no drop bag facility along the route. Runners should carry
            with them whatever needed during the entire length of the race
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
            Aid stations will be well-stocked with water, energy drinks, fruits
            etc. during the race.
          </li>
          <li>
            Since hills stations is an ecologically sensitive area, we will be
            providing water and energy drinks only in reusable cups / water
            dispensers for Energy drinks & Water at aid stations and rest areas.
          </li>
          <li>Participants are free to carry their own refreshments.</li>
          <li>
            Aid stations with water, energy drinks, fruits etc. will be set up
            at average intervals of 5-7 Km along the course.
          </li>
          <li>
            Every runner (from all categories) should compulsorily carry 1 liter
            water bottle with them.
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
            Jamunamaruthur. Frequency will be approximately 45 minutes. Last bus
            in each direction will be around 7:30PM.
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
              Runners are required to check-in and collect their bibs/race-kits
              personally during the pre-race dinner/briefing on Saturday
              08-Nov-2024. Runners cannot authorise a third party to collect the
              bib/race-kit on their behalf.
            </li>
            <li>
              {" "}
              Runners must wear the official bib provided by the organisers
              throughout the event. If one takes the bib off for any reason
              whatsoever, they will be noted as DNF (did-not-finish).
            </li>
            <li>
              {" "}
              Only finishers within the cut-off time will be entitled to receive
              their official timing and finisher medal.
            </li>
            <li>
              {" "}
              The organiser reserves the right to cancel, postpone or delay the
              event due to any unforeseen circumstances beyond their control and
              at their discretion.
            </li>
            <li>
              {" "}
              The organiser shall not be liable in respect to any entry fees,
              costs and expenses that a participant may incur as a result of
              such cancellation or postponement.
            </li>
            <li>
              {" "}
              A registered runner consent to the free use of one's name, voice,
              picture or video in any broadcast, telecast, advertising,
              promotion or other account of this event.
            </li>
            <li>
              {" "}
              Registered Runners must ensure that they provide correct details
              during the registration process and inform the organiser well in
              advance of the race, of any changes. If one's contact information
              changes after the submission for the registration, the organiser
              must be notified by eMail @ chennaitrailclub@gmail.com well in
              advance of the event.
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
              Runners are required to run along the marked track only. The area
              and the course are also a habitat for a variety of snakes. Please
              do take due care and exercise caution.
            </li>
            <li>
              {" "}
              Runners are requested to cooperate with race officials, volunteers
              and other personnel during the event.
            </li>
            <li>
              {" "}
              The organiser reserves the right to refuse an entrant's attendance
              at, or participation in, the race.
            </li>
            <li>
              {" "}
              Any participant who is found putting themselves or anyone else at
              risk will be immediately evicted from the course and event venue.
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
              We call it a multi-terrain marvel. Therefore, running in the trail
              has its own unique challenges and being watchful and alert while
              running on the trail.
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
              exhausting, focus on finding the rhythm until you sense being one
              with the terrain{" "}
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
              It can be tempting to look at the nature around you, but doing so
              can quickly lead to tripping and falling. It is advisable to keep
              your eyes on the trail.
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
              It is advisable to apply sunscreen, wear your sunglasses, cap/hat
              or carry a piece of white cotton cloth to cover yourself when the
              sun is pretty hard after 8 a.m.
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

export const termsData = [
  {
    key: 1,
    heading: "OVERVIEW",
    text: [
      "This website is operated by Chennai Trail Club. Throughout the site, the terms “we”, “us” and “our” refer to Chennai Trail Club. Chennai Trail Club offers this website, including all information, tools and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.",
      "By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply  to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.",
      "Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any Services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.",
      "Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.",
      "Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and Services to you.",
    ],
  },
  {
    key: 2,
    heading: "SECTION 1 - ONLINE STORE TERMS",
    text: [
      "By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.",
      "You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).",
      "You must not transmit any worms or viruses or any code of a destructive nature.",
      "A breach or violation of any of the Terms will result in an immediate termination of your Services.",
    ],
  },
  {
    key: 3,
    heading: "SECTION 2 - GENERAL CONDITIONS",
    text: [
      "We reserve the right to refuse service to anyone for any reason at any time.",
      "You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.",
      "You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us",
      "The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.",
    ],
  },
  {
    key: 4,
    heading: "SECTION 3 – ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION",
    text: [
      "We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.",
      "This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.",
    ],
  },
  {
    key: 5,
    heading: "SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES",
    text: [
      "Prices for our products are subject to change without notice.",
      "We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.",
      "We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.",
    ],
  },
  {
    key: 6,
    heading: "SECTION 5 – PRODUCTS OR SERVICES (if applicable)",
    text: [],
  },
  {
    key: 7,
    heading: "Refund and Cancellation Policy",
    text: [
      "Per the marathon running industry policy, all entry fees are non-refundable and non-transferable to a different year or different runner. This policy applies to all entrants and is in effect whether you are injured, have an unexpected family/business emergency, have a medical emergency, etc.",
      "If the course has to be changed or the race cancelled due to an act of nature, or the event time changed due to circumstances beyond our control, there are no refunds or rollovers. You may not sell or give your bib to another person without going through the transfer process. There are NO exceptions.",
      "Your entry fee IS NOT TRANSFERABLE to a future year. You do not need to inform us of your cancellation.",
      "We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.",
      "We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or Services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.",
      "We do not warrant that the quality of any products, Services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.",
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
    heading: "SECTION 6 – ACCURACY OF BILLING AND ACCOUNT INFORMATION",
    text: [
      "We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.",
      "You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed",
      "For more detail, please review our Returns Policy.",
    ],
  },
  {
    key: 11,
    heading: "SECTION 7 - OPTIONAL TOOLS",
    text: [
      "We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.",
      "You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools",
      "Any use by you of the optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).",
      "We may also, in the future, offer new Services and/or features through the website (including, the release of new tools and resources). Such new features and/or Services shall also be subject to these Terms of Service.",
    ],
  },
  {
    key: 12,
    heading: "SECTION 8 - THIRD-PARTY LINKS",
    text: [
      "Certain content, products and Services available via our Service may include materials from third-parties.",
      "Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or Services of third-parties.",
      "We are not liable for any harm or damages related to the purchase or use of goods, Services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.",
    ],
  },
  {
    key: 13,
    heading: "SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS",
    text: [
      "If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, ‘comments’), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.",
      "We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion to be unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.",
      "You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.",
    ],
  },
  {
    key: 14,
    heading: "SECTION 10 - PERSONAL INFORMATION",
    text: [
      "Your submission of personal information through the store is governed by our Privacy Policy. To view our Privacy Policy, please see [LINK TO PRIVACY POLICY]",
    ],
  },
  {
    key: 15,
    heading: "SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS",
    text: [
      "Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).",
      "We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.",
    ],
  },
  {
    key: 16,
    heading: "SECTION 12 - PROHIBITED USES",
    text: [
      "In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content:",
      "(a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information;",
      "(g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.",
    ],
  },
  {
    key: 17,
    heading: "SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY",
    text: [
      "We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free",
      "We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.",
      "You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.",
      "You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and Services delivered to you through the service are (except as expressly stated by us) provided ‘as is’ and ‘as available’ for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.",
      "In no case shall Chennai Trail Club, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility.",
      "Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.",
    ],
  },
  {
    key: 18,
    heading: "SECTION 14 - INDEMNIFICATION",
    text: [
      "You agree to indemnify, defend and hold harmless Chennai Trail Club and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.",
    ],
  },
  {
    key: 19,
    heading: "SECTION 15 - SEVERABILITY",
    text: [
      "In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.",
    ],
  },
  {
    key: 20,
    heading: "SECTION 16 - TERMINATION",
    text: [
      "The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.",
      "These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.",
      "If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).",
    ],
  },
  {
    key: 21,
    heading: "SECTION 17 - ENTIRE AGREEMENT",
    text: [
      "The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision",
      "These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).",
      "Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.",
    ],
  },
  {
    key: 22,
    heading: "SECTION 18 - GOVERNING LAW",
    text: [
      "These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of India.",
    ],
  },
  {
    key: 23,
    heading: "SECTION 19 - CHANGES TO TERMS OF SERVICE",
    text: [
      "You can review the most current version of the Terms of Service at any time at this page.",
      "We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.",
    ],
  },
  {
    key: 24,
    heading: "SECTION 20 - CONTACT INFORMATION",
    text: [
      "Questions about the Terms of Service should be sent to us at chennaitrailclub@gmail.com.",
    ],
  },
];

export const refundData = [
  `Per the marathon running industry policy, all entry fees are
   non-refundable and non-transferable to a different year or
   different runner. This policy applies to all entrants and is in
   effect whether you are injured, have an unexpected family/business
   emergency, have a medical emergency, etc.`,
  `If the course has to be changed or the race cancelled due to an
   act of nature, or the event time changed due to circumstances
   beyond our control, there are no refunds or rollovers. You may not
   sell or give your bib to another person without going through the
   transfer process. There are NO exceptions.`,
  `Your entry fee IS NOT TRANSFERABLE to a future year. You do not
   need to inform us of your cancellation.`,
];

export const tandcData = [
  ` I agree to comply with the rules and directions of the organiser and
          race officials. I agree to abide by any decision of the organisers
          regarding any aspect of my participation in this event, including the
          right of any official to deny or suspend my participation for any
          reason whatsoever.`,
  ` I hereby acknowledge and agree to waive, release, keep indemnified and
          discharge all persons, corporations, associations and bodies involved
          or otherwise engaged in organizing, promoting or staging this event
          and their servants, agents, representatives, officials and employees.
          This includes but is not limited to race officials, agents,
          volunteers, event organisers and sponsors whether or not the loss,
          injury or damage is attributed to the act or neglect of any one or
          more of them.`,
  `I understand that competing in this event will involve running and
          walking on remote wilderness trails with rocks, roots, stream
          crossings, and up and down steep terrain. I assume all risks
          associated with running in this event, including but not limited to:
          steep drops on or near the course, challenging terrain, rocks, roots,
          adjacent streams, motor vehicle traffic, slippery surfaces, loose
          rocks, soft sand, adverse weather conditions, heat exhaustion,
          dehydration, hypothermia, venomous snakes, wild boars etc., all such
          risks being known and appreciated by me.`,
  ` I hereby allow and permit the use of my image(s), photograph(s),
          videos(s), recording(s) and/or any other record of this event to be
          used in the media and for marketing purposes of this event.`,
  ` I hereby attest and confirm that I am physically fit and am
          sufficiently trained to participate in this event. I hereby consent to
          receive medical treatment which may be deemed advisable in the event
          of injury, accident and/or illness during this event. I understand
          that all medical and/or emergency evacuation costs for participants or
          crew will be borne by that person or their heirs. The race organizers
          are in no way liable or responsible for medical costs or emergency
          evacuation.`,
  `I understand that this event does not provide for refunds in the event
          of a cancellation, and by signing this waiver, I consent that I am not
          entitled to a refund if the event is cancelled before or during the
          event.`,
  `I confirm that I have never been diagnosed with any cardiovascular
          diseases and have not been advised by doctors to do physical
          activities under supervision. I also confirm that I have never been
          diagnosed with any chronic illness and have never experienced
          dizziness or chest pain while running or during any physical activity.`,
];

export const riskFactors = [
  ` Ultramarathons are physically challenging events and participation in
          them presents medical risks, many of which can be extremely serious or
          fatal.`,
  ` Participation in this event is at the runner's own risk. In case of a
          medical emergency, runners will be transported to the nearest
          hospital. However, due to difficult terrain and inaccessibility to
          majority of the course, this may take time, even upto a few hours in
          some cases.`,
  `Participants are advised to consult their own doctor prior to
          participation in this event. Runners are expected to be aware of the
          stress effects related to participating in trail ultramarathon events
          and be adequately prepared for the same.`,
  `It is important for each entrant to recognize the potential physical
          and mental stresses, which may arise from participation in this event.
          Runners may experience dehydration, hyponatremia, disorientation, and
          mental and physical exhaustion. Race officials will do all that they
          reasonably can ensure a safe event, but ultimately runners must
          understand their own limitations. This is an event where it is better
          to follow the dictates of your body - not your ambitions! Adequate
          physical and mental conditioning prior to the event is mandatory. If
          you have not been able to prepare properly, do not attempt to run!
          runners must appreciate the risks associated with participation in
          this event. Actions may have to be taken on your behalf under extreme
          time constraints and adverse circumstances. The race officials will
          make reasonable efforts to give assistance whenever possible.
          Ultimately and primarily, you are in charge, and you are solely
          responsible for creating your own crisis. Be careful, be responsible,
          and do not exceed your own abilities and limitations.`,
  `Some of the main risks of this event, but certainly not all of them,
          are listed. These should be understood and remembered by all runners,
          before and during the event. Please note that death can result from
          several of the risk conditions discussed below or from other aspects
          of participation in the`,
];
export const recentActivitiesData = [
  {
    key: "1",
    layout: "single",
    content: ["/new-recent-activities-4.png"],
  },
  {
    key: "2",
    layout: "complex",
    content: [
      "/recent-activities-new-1.png",
      "/new-recent-activities-2-1.png",
      "/recent-activities-new-2.png",
    ],
  },
  {
    key: "3",
    layout: "stacked",
    content: ["/new-recent-activities-11.png", "/new-recent-activities-12.png"],
  },
  {
    key: "4",
    layout: "single",
    content: ["/recent-activities-new-4.png"],
  },
  {
    key: "5",
    layout: "complex",
    content: [
      "/new-recent-activities-7.png",
      "/recent-activities-new-5.png",
      "/new-recent-activities-9.png",
    ],
  },
  {
    key: "6",
    layout: "stacked",
    content: ["/new-recent-activities-5.png", "/recent-activities-new-3.png"],
  },
];
export const API_URL = "http://localhost:3001";
