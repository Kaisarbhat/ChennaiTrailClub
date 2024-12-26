"use client";
import { riskFactors, tandcData } from "@/utils/termsAndConditionsUtils";
import { useFormikContext } from "formik";
const TermsAndConditions = ({ values }) => {
  const { setFieldValue } = useFormikContext();
  return (
    <>
      <div
        className="overflow-auto max-h-[550px] text-xs p-7 space-y-4  border border-solid rounded-lg"
        role="region"
        aria-label="Terms and Conditions Page"
      >
        <p>
          {" "}
          I have read and understood the information provided about the{" "}
          <b className="underline">Jawadhu Hills Ultra 2024 </b>("this event")
          and I agree to participate in this event at my own risk. I know that
          participating in this event is a potentially hazardous activity, which
          could cause serious injury, death or property loss. I am aware of the
          risks involved, some of which have been summarized in the 'Risk
          Factors' described below, and I hereby acknowledge the same. I am
          aware that the risks involved are not limited to the Risk Factors, and
          I assume all the risks involved in participating to this event
        </p>
        {tandcData.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
        <h2 className="text-center underline">
          <b>RISK FACTORS </b>
        </h2>
        {riskFactors.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
        <b> Jawadhu Hills Ultra 2024.</b>

        <ol className="list-decimal space-y-4">
          <li>
            {" "}
            <b>Renal shutdown:</b>
            <ol className="list-alpha">
              <li>
                Cases of renal shutdown (acute renal failure) have been reported
                in other ultramarathons. Adequate hydration will help averting
                this serious condition. If not treated, renal shutdown can cause
                permanent impairment of kidney function. IT IS CRUCIAL TO
                HYDRATE YOURSELF USING ELECTROLYTE FLUIDS DURING THE RUN AND FOR
                SEVERAL DAYS FOLLOWING THE RUN.
              </li>
            </ol>
          </li>
          <li>
            {" "}
            <b>Heat stroke/hyperthermia:</b>
            <ol className="list-alpha">
              <li>
                Heat exhaustion and heat stroke are serious risks. These
                conditions can cause death, kidney failure and brain damage. It
                is important that runners be aware of the symptoms of impending
                heat injury. These include but are not limited to: nausea,
                vomiting, headache, dizziness, irritability, lassitude,
                confusion, weakness, and rapidheart rate. Impending heat stroke
                may be preceded by a decrease in sweating and the appearance of
                goose bumps on the skin, especially over the chest. Heat stroke
                may progress from minimal symptoms to complete collapse in a
                very short period of time. Remember that your muscles produce
                tremendous amounts of heat when running up and down hill. The
                faster the pace, the more heat is produced. A light-colored
                shirt and cap, particularly if kept wet during the event, can
                help. If signs of heat exhaustion occur, we recommend rapid
                cooling by applying ice to the groin, neck and armpits. We also
                recommend that runners keep themselves adequately hydrated and
                carry fluids between aid stations/checkpoints.
              </li>
            </ol>
          </li>
          <li>
            {" "}
            <b>Risks associated with low sodium and chloride counts:</b>
            <ol className="list-alpha">
              <li>
                Low sodium levels (hyponatremia) in ultramarathon runners have
                been associated with severe illness requiring hospitalization.
                It is important for long-distance athletes to use fluids
                containing electrolytes to replace the water and salts lost
                during the run. WATER INTAKE ALONE IS NOT SUFFICIENT, as water
                intoxication and possibly death may result. This problem may in
                fact worsen after the Race, as the non-electrolyte-containing
                fluid which has been accumulating in the stomach is absorbed.
                Potassium and calcium replacement may also be important,
                although these levels change less with fluid loss and
                replenishment. Signs and symptoms of hyponatremia include weight
                gain, bloating, nausea, vomiting, headache, confusion,
                incoordination, dizziness, muscle twitching/cramping and
                fatigue. If left untreated, it may progress to seizures,
                pulmonary and cerebral edema, coma, and death. The best way to
                achieve proper electrolyte and fluid balance is to hydrate with
                fluids containing proper amounts of electrolytes and to replace
                with sodium-containing foods or supplements, if required, and as
                determined during your training. Potassium, while present in
                many electrolyte-replacement solutions, may also be replaced
                with fruit, such as bananas or oranges. BEER or other ALCOHOLIC
                BEVERAGES should not be taken at any time during or before the
                run
              </li>
            </ol>
          </li>
          <li>
            <b> Wildlife hazards:</b>
            <ol className="list-alpha">
              <li>
                his serves as a general warning regarding potential wildlife
                hazards. It does not constitute an exhaustive list of all
                potential risks. Participants are responsible for exercising
                caution and situational awareness throughout the course. This
                running course traverses through an area with inherent risks
                posed by wildlife. Participants acknowledge and assume these
                risks by participating.
                <ul className="list-disc">
                  <li>
                    <b>Snakes:</b> This area may be inhabited by venomous snakes
                    that pose a serious and potentially life-threatening risk.
                    Approaching any snake is strictly prohibited. In the event
                    of a snakebite, timely medical assistance is not guaranteed.
                  </li>
                  <li>
                    <b>Domestic Animals:</b>Runners may encounter dogs in
                    villages. To minimize the risk of bites, runners should
                    avoid eye contact and proceed with caution.
                  </li>
                  <li>
                    <b>Wild Boar:</b>Wild boar sightings are possible.
                    Participants must give wild boar a wide berth and avoid
                    approaching them under any circumstances.
                  </li>
                  <li>
                    <b>Insects & Parasites:</b>
                    Mosquitoes and leeches are prevalent in the area.
                    Participants are strongly encouraged to wear protective
                    clothing and apply insect repellent.
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
                potentially serious consequences. Parts of the trail are narrow,
                uneven, and slippery. There are several drops on or very near
                the trail. Extreme care must be always taken, especially in the
                dark.
              </li>
            </ol>
          </li>
          <li>
            <b>Muscle necrosis:</b>
            <ol className="list-alpha">
              <li>
                It has been found that some degree of muscle cell death in the
                legs occurs from participation in ultramarathons. The recovery
                can take several months. This seems to be a bigger problem in
                runners who become dehydrated or have overexerted themselves
              </li>
            </ol>
          </li>
          <li>
            {" "}
            <b>Overuse injuries:</b>
            <ol className="list-alpha">
              <li>
                Obviously, innumerable overuse injuries can occur, especially in
                the knee and the ankle and leg muscles and tendons. Sprains and
                fractures can easily occur on these rough trails. Blisters may
                cause you to have a sore day, or in severe circumstances may
                prevent you from finishing. Runners must have a working
                knowledge of how to treat themselves for all of these problems
                on the trail.
              </li>
            </ol>
          </li>
          <li>
            <b> Common fatigue: </b>
            <ol className="list-alpha">
              <li>
                One of the dangers you will encounter is fatigue. Fatigue,
                combined with the effects of dehydration and other debilitating
                conditions can produce disorientation and irrationality.
              </li>
            </ol>
          </li>
          <li>
            {" "}
            <b>Getting lost:</b>
            <ol className="list-alpha">
              <li>
                Although the course will be adequately marked, it is possible to
                lose your way. If you believe at any time that you may not be on
                the correct trail, do not attempt to find your own way. If you
                are doubtful of your route, backtrack to where you last saw a
                trail marker and try to find other markers showing the direction
                of the trail. If you are unable to find your way, stay where you
                are! Shout or call out for help loudly and repeatedly until you
                are heard. Wandering randomly will take you farther from the
                trail and reduce your chances of being found.
              </li>
            </ol>
          </li>
          <li>
            <b>
              Difficulty in gaining access to or locating injured participants:
            </b>
            <ol className="list-alpha">
              <li>
                Some parts of the trail are remote and inaccessible by motor
                vehicles. Accordingly, in spite of the safety precautions taken
                by the organisers, there is absolutely no assurance that aid or
                rescue assistance will arrive in time to give you effective
                assistance should you become sick, incapacitated, injured or
                attacked.
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
                STAY ON THE TRAIL. Shout or call out for help. You will be found
                there either by another runner, or race volunteers. If you feel
                dizzy, disoriented, or confused, do not risk falling. Sit down
                ON THE TRAIL until you recover or are found. An unconscious
                runner even a few feet off the trail could be impossible to find
                until it is too late. If you are assisted by individuals who are
                not associated with the race officials and you choose to leave
                the trail, you MUST notify the official at the nearest
                checkpoint of your decision to drop-out.
              </li>
            </ol>
          </li>
          <li>
            Although medical and other personnel will assist you, when possible,
            remember that you are ultimately responsible for your own well-being
            on the trail. Only you will know how your body and mind feel at any
            given time. Monitor yourself during the entire event and prepare
            yourself to drop out at the nearest aid-station if you find that it
            just isn't your day. As you continue past each aid-station, be aware
            of the number of kilometres to the next one, realizing that getting
            rescue vehicles into these areas can be difficult, if not
            impossible.
          </li>
        </ol>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="waiverAcknowledgement"
            name="waiverAcknowledgement"
            checked={values.waiverAcknowledgement}
            className="w-[12px] h-[12px] p-0 mb-0 mr-2"
            onChange={(e) => {
              setFieldValue("waiverAcknowledgement", e.target.checked);
            }}
          />
          <label htmlFor="acknowledgement">I acknowledge the waiver form</label>
        </div>
      </div>
      <div className="bg-[#fcf6e4] border border-solid border-red-300 my-4 px-8 py-3 rounded-lg">
        <b className="text-[13px]">
          Embrace the extraordinary; in our club, we shape dreams into
          realities, and together, we thrive.
        </b>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="joinClub"
            name="joinClub"
            checked={values.joinClub}
            className="w-[10px] h-[10px] p-0 mb-0 mr-1"
            onChange={(e) => {
              setFieldValue("joinClub", e.target.checked);
            }}
          />
          <label htmlFor="joinClub" className="text-[12px]">
            Join Our Chennai Trail Club
          </label>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
