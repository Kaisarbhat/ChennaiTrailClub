
const handleSubmit = (e) => {
    e.preventDefault();
  };
  
const content = [
    {
      key: "Personal Details",
      component: () => (
        <>
          <h1 className="text-2xl text-[#070802] font-bold mb-6">
            Basic Details
          </h1>
          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label>Select your Running Category</label>
              <br />
              <select
                required
                className="border border-inherit bg-transparent rounded-md w-full p-2 mt-2 "
              >
                <option>---please choose an option---</option>
                <option>30KM (INR 1800)</option>
                <option>60KM (INR 2200)</option>
              </select>
            </div>
            <div>
              <label required>First Name </label>
              <input className="mt-2 " required type="text" />
            </div>
            <div>
              <label required>Last Name </label>
              <input className="mt-2" required type="text" />
            </div>
            <div>
              <label required>Mobile </label>
              <input className="mt-2" required type="tel" />
            </div>
            <div>
              <label required>Email </label>
              <input className="mt-2" required type="email" />
            </div>
            <div>
              <label>Gender</label>
              <br />
              <select
                required
                className="border border-inherit bg-transparent rounded-md w-full p-2 mt-2"
              >
                <option>---please choose an option---</option>
                <option>Male</option>
                <option>Female</option>
                <option>Prefer Not To Say</option>
              </select>
            </div>
            <div>
              <label>Date of Birth</label>
              <input
                className="mt-2 text-center"
                type="date"
                placeholder="dd//m/yy"
              />
            </div>
            <div>
              <label>Select Your T-shirt Size</label>
              <br />
              <select
                required
                className="border border-inherit bg-transparent rounded-md w-full p-2 mt-2 "
              >
                <option>---please choose an option---</option>
                <option> XS (33) </option>
                <option> S (35) </option>
                <option> M (38) </option>
                <option> L (41) </option>
                <option> XL (44) </option>
                <option> 2XL(47) </option>
                <option> 3XL(51) </option>
                <option> 4XL(54) </option>
              </select>
            </div>
            <h1 className="text-2xl text-[#070802] font-bold my-10">Address</h1>
            <div>
              <label>City</label>
              <input className="mt-2" type="text" required />
            </div>
            <div>
              <label>State/Province/Region</label>
              <br />
              <select
                required
                className="border border-inherit bg-transparent rounded-md w-full p-2 mt-2"
              >
                <option>---please choose an option---</option>
                <option>Andaman and Nicobar Islands </option>
                <option>Andhra Pradesh </option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option> Chandigarh </option>
                <option>Chhattisgarh </option>
                <option>Dadra and Nagar Haveli </option>
                <option>Daman and Diu</option>
                <option>Delhi</option>
                <option>Goa </option>
                <option>Gujarat</option>
                <option>Haryana </option>
                <option>Himachal Pradesh </option>
                <option>Jammu and Kashmir</option>
                <option>Jharkhand </option>
                <option>Karnataka </option>
                <option>Kerala </option>
                <option>Ladakh</option>
                <option>Lakshadweep </option>
                <option>Madhya Pradesh</option>
                <option> Maharashtra </option>
                <option>Manipur</option>
                <option>Meghalaya</option>
                <option>Mizoram </option>
                <option>Nagaland </option>
                <option>Odisha </option>
                <option>Puducherry </option>
                <option>Punjab </option>
                <option>Rajasthan </option>
                <option>Sikkim </option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Tripura </option>
                <option>Uttar Pradesh</option>
                <option>Uttarakhand</option>
                <option>West Bengal </option>
              </select>
            </div>
          </form>
        </>
      ),
    },
    {
      key: "Other Details",
      component: () => (
        <>
          <h1 className="text-2xl text-[#070802] font-bold mb-6">
            Other Details
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label>Blood Group</label>
              <br />
              <select
                required
                className="border border-inherit bg-transparent rounded-md w-full p-2 mt-2"
              >
                <option>---please choose an option---</option>
                <option>B-</option>
                <option>B+</option>
                <option>O-</option>
                <option>O+</option>
                <option>A-</option>
                <option>A+</option>
                <option>AB-</option>
                <option>AB+</option>
              </select>
            </div>
            <div>
              <label required>Name on BIB </label>
              <input className="mt-2" required type="text" />
            </div>
            <div>
              <label>Running Club you are part of</label>
              <br />
              <select
                required
                className="border border-inherit bg-transparent rounded-md w-full p-2 mt-2"
              >
                <option>---please choose an option---</option>
                <option>CTC</option>
                <option>20Cube Sprinters</option>
                <option>Addida Runners - Bengaluru</option>
              </select>
            </div>
            <div>
              <label>Emergency Contact Name</label>
              <input className="mt-2 text-center" type="text" />
            </div>
            <div>
              <label>Emergency Contact Relation</label>
              <br />
              <select
                required
                className="border border-inherit bg-transparent rounded-md w-full p-2 mt-2"
              >
                <option>---please choose an option---</option>
                <option> Spouse </option>
                <option> Parent </option>
                <option> Sibling </option>
                <option> Relative </option>
                <option> Child </option>
                <option> Friend </option>
                <option> Guardian </option>
              </select>
            </div>
            <div>
              <label>Emergency Contact Number</label>
              <input className="mt-2" type="tel" required />
            </div>
          </form>
        </>
      ),
    },
    {
      key: "Medical Questions",
      component: () => (
        <>
          <h1 className="text-2xl text-[#070802] font-bold mb-6">
            Medical Questions
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <h3>Do you suffer from cardiovascular disease?</h3>
              <div className="flex items-center space-x-4 text-[#070802]">
                <div className="flex items-center justify-center space-x-2 ">
                  <input type="radio" value="Yes" id="one" className="mb-0" />
                  <label htmlFor="one">Yes</label>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <input type="radio" value="No" id="one" className="mb-0" />
                  <label htmlFor="one">No</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h3>
                Have you been advised by doctor to engage in Physical activity
                only under medical supervision?
              </h3>
              <div className="flex items-center space-x-4 text-[#070802]">
                <div className="flex items-center justify-center space-x-2">
                  <input type="radio" value="Yes" id="one" className="mb-0" />
                  <label htmlFor="one">Yes</label>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <input type="radio" value="No" id="one" className="mb-0" />
                  <label htmlFor="one">No</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h3>
                Pregnant Women : Has this or any previous pregnancy been defined
                as being at risk?
              </h3>
              <div className="flex items-center space-x-4 text-[#070802]">
                <div className="flex items-center justify-center space-x-2">
                  <input type="radio" value="Yes" id="one" className="mb-0" />
                  <label htmlFor="one">Yes</label>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <input type="radio" value="No" id="one" className="mb-0" />
                  <label htmlFor="one">No</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h3>Have you been diagnosed with asthma?</h3>
              <div className="flex items-center space-x-4 text-[#070802]">
                <div className="flex items-center justify-center space-x-2">
                  <input type="radio" value="Yes" id="one" className="mb-0" />
                  <label htmlFor="one">Yes</label>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <input type="radio" value="No" id="one" className="mb-0" />
                  <label htmlFor="one">No</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h3>Have you lost balance due to Dizziness?</h3>
              <div className="flex items-center space-x-4 text-[#070802]">
                <div className="flex items-center justify-center space-x-2">
                  <input type="radio" value="Yes" id="one" className="mb-0" />
                  <label htmlFor="one">Yes</label>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <input type="radio" value="No" id="one" className="mb-0" />
                  <label htmlFor="one">No</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h3>
                Do you suffer from Chest Pain (At Rest / Daily Activity /
                Physical Activity)?
              </h3>
              <div className="flex items-center space-x-4 text-[#070802]">
                <div className="flex items-center justify-center space-x-2">
                  <input type="radio" value="Yes" id="one" className="mb-0" />
                  <label htmlFor="one">Yes</label>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <input type="radio" value="No" id="one" className="mb-0" />
                  <label htmlFor="one">No</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h3>
                Do you suffer from any chronic illness not mentioned above,
                which limits you from Physical activities?
              </h3>
              <div className="flex items-center space-x-4 text-[#070802]">
                <div className="flex items-center justify-center space-x-2 ">
                  <input type="radio" value="Yes" id="one" className="mb-0" />
                  <label htmlFor="one">Yes</label>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <input type="radio" value="No" id="one" className="mb-0" />
                  <label htmlFor="one">No</label>
                </div>
              </div>
            </div>
            <div>
              <label required>
                If any other specific medical conditions, please mention below:
              </label>
              <input className="mt-2" required type="text" />
            </div>
          </form>
        </>
      ),
    },
    {
      key: "Qualification & Waiver Form",
      component: () => (
        <div className="text-[#50514C]">
          <h1 className="text-2xl text-[#070802] font-bold mb-6">
            Qualification & Waiver Form
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <p>
              Link to timing certificates/runner profile to demonstrate your
              qualification to Jawadhu Hills Ultra (races run after 01-Feb-2023)
              *
            </p>
            <input
              type="url"
              placeholder="https://"
              className="w-full border border-solid p-2 rounded-md"
            />
            <p>
              Read the Liability Waiver Form and Acknowledge it by clicking the
              checkbox at end of wavier content.*
            </p>
            <div className="overflow-auto max-h-[550px] text-xs p-7 space-y-4  border border-solid rounded-lg ">
              <p>
                I have read and understood the information provided about the{" "}
                <b className="underline">Jawadhu Hills Ultra 2024 </b>("this
                event") and I agree to participate in this event at my own risk.
                I know that participating in this event is a potentially
                hazardous activity, which could cause serious injury, death or
                property loss. I am aware of the risks involved, some of which
                have been summarized in the 'Risk Factors' described below, and
                I hereby acknowledge the same. I am aware that the risks
                involved are not limited to the Risk Factors, and I assume all
                the risks involved in participating to this event
              </p>
              <p>
                I agree to comply with the rules and directions of the organiser
                and race officials. I agree to abide by any decision of the
                organisers regarding any aspect of my participation in this
                event, including the right of any official to deny or suspend my
                participation for any reason whatsoever.
              </p>
              <p>
                I hereby acknowledge and agree to waive, release, keep
                indemnified and discharge all persons, corporations,
                associations and bodies involved or otherwise engaged in
                organizing, promoting or staging this event and their servants,
                agents, representatives, officials and employees. This includes
                but is not limited to race officials, agents, volunteers, event
                organisers and sponsors whether or not the loss, injury or
                damage is attributed to the act or neglect of any one or more of
                them.
              </p>
              <p>
                I understand that competing in this event will involve running
                and walking on remote wilderness trails with rocks, roots,
                stream crossings, and up and down steep terrain. I assume all
                risks associated with running in this event, including but not
                limited to: steep drops on or near the course, challenging
                terrain, rocks, roots, adjacent streams, motor vehicle traffic,
                slippery surfaces, loose rocks, soft sand, adverse weather
                conditions, heat exhaustion, dehydration, hypothermia, venomous
                snakes, wild boars etc., all such risks being known and
                appreciated by me.
              </p>
              <p>
                I hereby allow and permit the use of my image(s), photograph(s),
                videos(s), recording(s) and/or any other record of this event to
                be used in the media and for marketing purposes of this event.
              </p>
              <p>
                I hereby attest and confirm that I am physically fit and am
                sufficiently trained to participate in this event. I hereby
                consent to receive medical treatment which may be deemed
                advisable in the event of injury, accident and/or illness during
                this event. I understand that all medical and/or emergency
                evacuation costs for participants or crew will be borne by that
                person or their heirs. The race organizers are in no way liable
                or responsible for medical costs or emergency evacuation.
              </p>
              <p>
                I understand that this event does not provide for refunds in the
                event of a cancellation, and by signing this waiver, I consent
                that I am not entitled to a refund if the event is cancelled
                before or during the event.
              </p>
              <p>
                I confirm that I have never been diagnosed with any
                cardiovascular diseases and have not been advised by doctors to
                do physical activities under supervision. I also confirm that I
                have never been diagnosed with any chronic illness and have
                never experienced dizziness or chest pain while running or
                during any physical activity.
              </p>
              <h2 className="text-center underline">
                <b>RISK FACTORS </b>
              </h2>
              <p>
                Ultramarathons are physically challenging events and
                participation in them presents medical risks, many of which can
                be extremely serious or fatal.
              </p>
              <p>
                Participation in this event is at the runner's own risk. In case
                of a medical emergency, runners will be transported to the
                nearest hospital. However, due to difficult terrain and
                inaccessibility to majority of the course, this may take time,
                even upto a few hours in some cases.
              </p>
              <p>
                Participants are advised to consult their own doctor prior to
                participation in this event. Runners are expected to be aware of
                the stress effects related to participating in trail
                ultramarathon events and be adequately prepared for the same.
              </p>
              <p>
                It is important for each entrant to recognize the potential
                physical and mental stresses, which may arise from participation
                in this event. Runners may experience dehydration, hyponatremia,
                disorientation, and mental and physical exhaustion. Race
                officials will do all that they reasonably can ensure a safe
                event, but ultimately runners must understand their own
                limitations. This is an event where it is better to follow the
                dictates of your body - not your ambitions! Adequate physical
                and mental conditioning prior to the event is mandatory. If you
                have not been able to prepare properly, do not attempt to run!
                runners must appreciate the risks associated with participation
                in this event. Actions may have to be taken on your behalf under
                extreme time constraints and adverse circumstances. The race
                officials will make reasonable efforts to give assistance
                whenever possible. Ultimately and primarily, you are in charge,
                and you are solely responsible for creating your own crisis. Be
                careful, be responsible, and do not exceed your own abilities
                and limitations.
              </p>
              <p>
                Some of the main risks of this event, but certainly not all of
                them, are listed. These should be understood and remembered by
                all runners, before and during the event. Please note that death
                can result from several of the risk conditions discussed below
                or from other aspects of participation in the
                <b> Jawadhu Hills Ultra 2024.</b>
              </p>
              <ol className="list-decimal space-y-4">
                <li>
                  {" "}
                  <b>Renal shutdown:</b>
                  <ol className="list-alpha">
                    <li>
                      Cases of renal shutdown (acute renal failure) have been
                      reported in other ultramarathons. Adequate hydration will
                      help averting this serious condition. If not treated,
                      renal shutdown can cause permanent impairment of kidney
                      function. IT IS CRUCIAL TO HYDRATE YOURSELF USING
                      ELECTROLYTE FLUIDS DURING THE RUN AND FOR SEVERAL DAYS
                      FOLLOWING THE RUN.
                    </li>
                  </ol>
                </li>
                <li>
                  {" "}
                  <b>Heat stroke/hyperthermia:</b>
                  <ol className="list-alpha">
                    <li>
                      Heat exhaustion and heat stroke are serious risks. These
                      conditions can cause death, kidney failure and brain
                      damage. It is important that runners be aware of the
                      symptoms of impending heat injury. These include but are
                      not limited to: nausea, vomiting, headache, dizziness,
                      irritability, lassitude, confusion, weakness, and
                      rapidheart rate. Impending heat stroke may be preceded by
                      a decrease in sweating and the appearance of goose bumps
                      on the skin, especially over the chest. Heat stroke may
                      progress from minimal symptoms to complete collapse in a
                      very short period of time. Remember that your muscles
                      produce tremendous amounts of heat when running up and
                      down hill. The faster the pace, the more heat is produced.
                      A light-colored shirt and cap, particularly if kept wet
                      during the event, can help. If signs of heat exhaustion
                      occur, we recommend rapid cooling by applying ice to the
                      groin, neck and armpits. We also recommend that runners
                      keep themselves adequately hydrated and carry fluids
                      between aid stations/checkpoints.
                    </li>
                  </ol>
                </li>
                <li>
                  {" "}
                  <b>Risks associated with low sodium and chloride counts:</b>
                  <ol className="list-alpha">
                    <li>
                      Low sodium levels (hyponatremia) in ultramarathon runners
                      have been associated with severe illness requiring
                      hospitalization. It is important for long-distance
                      athletes to use fluids containing electrolytes to replace
                      the water and salts lost during the run. WATER INTAKE
                      ALONE IS NOT SUFFICIENT, as water intoxication and
                      possibly death may result. This problem may in fact worsen
                      after the Race, as the non-electrolyte-containing fluid
                      which has been accumulating in the stomach is absorbed.
                      Potassium and calcium replacement may also be important,
                      although these levels change less with fluid loss and
                      replenishment. Signs and symptoms of hyponatremia include
                      weight gain, bloating, nausea, vomiting, headache,
                      confusion, incoordination, dizziness, muscle
                      twitching/cramping and fatigue. If left untreated, it may
                      progress to seizures, pulmonary and cerebral edema, coma,
                      and death. The best way to achieve proper electrolyte and
                      fluid balance is to hydrate with fluids containing proper
                      amounts of electrolytes and to replace with
                      sodium-containing foods or supplements, if required, and
                      as determined during your training. Potassium, while
                      present in many electrolyte-replacement solutions, may
                      also be replaced with fruit, such as bananas or oranges.
                      BEER or other ALCOHOLIC BEVERAGES should not be taken at
                      any time during or before the run
                    </li>
                  </ol>
                </li>
                <li>
                  <b> Wildlife hazards:</b>
                  <ol className="list-alpha">
                    <li>
                      his serves as a general warning regarding potential
                      wildlife hazards. It does not constitute an exhaustive
                      list of all potential risks. Participants are responsible
                      for exercising caution and situational awareness
                      throughout the course. This running course traverses
                      through an area with inherent risks posed by wildlife.
                      Participants acknowledge and assume these risks by
                      participating.
                      <ul className="list-disc">
                        <li>
                          <b>Snakes:</b> This area may be inhabited by venomous
                          snakes that pose a serious and potentially
                          life-threatening risk. Approaching any snake is
                          strictly prohibited. In the event of a snakebite,
                          timely medical assistance is not guaranteed.
                        </li>
                        <li>
                          <b>Domestic Animals:</b>Runners may encounter dogs in
                          villages. To minimize the risk of bites, runners
                          should avoid eye contact and proceed with caution.
                        </li>
                        <li>
                          <b>Wild Boar:</b>Wild boar sightings are possible.
                          Participants must give wild boar a wide berth and
                          avoid approaching them under any circumstances.
                        </li>
                        <li>
                          <b>Insects & Parasites:</b>
                          Mosquitoes and leeches are prevalent in the area.
                          Participants are strongly encouraged to wear
                          protective clothing and apply insect repellent.
                        </li>
                      </ul>
                    </li>
                  </ol>
                </li>
                <li>
                  {" "}
                  <b>Injuries from falling:</b>
                  <ol className="list-alpha">
                    <li>
                      Falling is an ever-present danger on the trails, with
                      potentially serious consequences. Parts of the trail are
                      narrow, uneven, and slippery. There are several drops on
                      or very near the trail. Extreme care must be always taken,
                      especially in the dark.
                    </li>
                  </ol>
                </li>
                <li>
                  <b>Muscle necrosis:</b>
                  <ol className="list-alpha">
                    <li>
                      It has been found that some degree of muscle cell death in
                      the legs occurs from participation in ultramarathons. The
                      recovery can take several months. This seems to be a
                      bigger problem in runners who become dehydrated or have
                      overexerted themselves
                    </li>
                  </ol>
                </li>
                <li>
                  {" "}
                  <b>Overuse injuries:</b>
                  <ol className="list-alpha">
                    <li>
                      Obviously, innumerable overuse injuries can occur,
                      especially in the knee and the ankle and leg muscles and
                      tendons. Sprains and fractures can easily occur on these
                      rough trails. Blisters may cause you to have a sore day,
                      or in severe circumstances may prevent you from finishing.
                      Runners must have a working knowledge of how to treat
                      themselves for all of these problems on the trail.
                    </li>
                  </ol>
                </li>
                <li>
                  <b> Common fatigue: </b>
                  <ol className="list-alpha">
                    <li>
                      One of the dangers you will encounter is fatigue. Fatigue,
                      combined with the effects of dehydration and other
                      debilitating conditions can produce disorientation and
                      irrationality.
                    </li>
                  </ol>
                </li>
                <li>
                  {" "}
                  <b>Getting lost:</b>
                  <ol className="list-alpha">
                    <li>
                      Although the course will be adequately marked, it is
                      possible to lose your way. If you believe at any time that
                      you may not be on the correct trail, do not attempt to
                      find your own way. If you are doubtful of your route,
                      backtrack to where you last saw a trail marker and try to
                      find other markers showing the direction of the trail. If
                      you are unable to find your way, stay where you are! Shout
                      or call out for help loudly and repeatedly until you are
                      heard. Wandering randomly will take you farther from the
                      trail and reduce your chances of being found.
                    </li>
                  </ol>
                </li>
                <li>
                  <b>
                    Difficulty in gaining access to or locating injured
                    participants:
                  </b>
                  <ol className="list-alpha">
                    <li>
                      Some parts of the trail are remote and inaccessible by
                      motor vehicles. Accordingly, in spite of the safety
                      precautions taken by the organisers, there is absolutely
                      no assurance that aid or rescue assistance will arrive in
                      time to give you effective assistance should you become
                      sick, incapacitated, injured or attacked.
                    </li>
                  </ol>
                </li>
                <h3 className="text-center underline">
                  {" "}
                  <b>IMPORTANT</b>
                </h3>
                <li>
                  {" "}
                  <b>If you do become injured, exhausted, or ill:</b>
                  <ol className="list-alpha">
                    <li>
                      STAY ON THE TRAIL. Shout or call out for help. You will be
                      found there either by another runner, or race volunteers.
                      If you feel dizzy, disoriented, or confused, do not risk
                      falling. Sit down ON THE TRAIL until you recover or are
                      found. An unconscious runner even a few feet off the trail
                      could be impossible to find until it is too late. If you
                      are assisted by individuals who are not associated with
                      the race officials and you choose to leave the trail, you
                      MUST notify the official at the nearest checkpoint of your
                      decision to drop-out.
                    </li>
                  </ol>
                </li>
                <li>
                  Although medical and other personnel will assist you, when
                  possible, remember that you are ultimately responsible for
                  your own well-being on the trail. Only you will know how your
                  body and mind feel at any given time. Monitor yourself during
                  the entire event and prepare yourself to drop out at the
                  nearest aid-station if you find that it just isn't your day.
                  As you continue past each aid-station, be aware of the number
                  of kilometres to the next one, realizing that getting rescue
                  vehicles into these areas can be difficult, if not impossible.
                </li>
              </ol>
              <div className="flex items-center">
                <input type="checkbox" id="ack" className="w-[12px] h-[12px] p-0 mb-0  mr-2" />
                <label htmlFor="ack">I acknowledge the waiver form</label>
              </div>
            </div>

            <div className="bg-[#fcf6e4] border border-solid border-red-300 my-4 px-8 py-3 rounded-lg">
              <b className="text-[13px]">
                Embrace the extraordinary; in our club, we shape dreams into
                realities, and together, we thrive.
              </b>
              <div className="flex items-center">
                <input type="checkbox" id="join" className="w-[10px] h-[10px] p-0 mb-0 mr-1" />
                <label htmlFor="join" className="text-[12px]">
                  {" "}
                  Join Our Chennai Trail Club
                </label>
              </div>
            </div>
          </form>
        </div>
      ),
    },
  ];
export default content;