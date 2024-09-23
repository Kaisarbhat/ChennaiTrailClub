"use client";
import Image from "next/image";
import React from "react";
import EventInfo from "@/components/eventInfo";
import { Button } from "@/components";

const EventDetails = () => {
  return (
    <div className="py-16 text-[#50514C]">
      <div className="bg-[#070802] w-full px-4 py-4  pt-20 flex items-center  justify-center space-x-28">
        <div className=" w-1/3 text-lg space-y-4">
          <h1 className="text-[38px] text-white font-bold leading-snug">
            Jawadhu Hills Ultra (JHU-24)
          </h1>
          <p className="text-[#FFFFFFBF]">
            Jawadhu Hills Ultra is back! Experience the most scenic trails in
            the Eastern Ghats, weaving through the pristine hills of Jawadhu
            range. Challenge yourself on diverse terrains, enjoy breathtaking
            vistas, and immerse in the natural beauty
          </p>
          <div>Trail Day</div>
          <div className="text-2xl text-[#d0f700] font-bold">
            <i class="bi bi-calendar3 mr-2"></i>November 09, 2024 (Saturday)
          </div>
          <div className="text-[#FFFFFFA6] underline">
            <span className="text-[#d0f700] mr-2">
              <i class="bi bi-geo-alt-fill"></i>
            </span>
            St.Joseph Higher Secondary School, Jamunamarathur{" "}
            <i class="bi bi-arrow-up-right"></i>
          </div>
        </div>
        <div>
          <Image
            src="/JHU-2024-Event.jpg"
            width={500}
            height={300}
            className="w-full rounded-xl"
            layout="responsive"
          />
        </div>
      </div>
      <div className="flex  flex-col py-10  w-full  ">
        <div className="lg:px-64">
          <EventInfo />
        </div>
        <div className="flex items-center justify-center py-8">
          <Button
            title={"Register for Jawadhu Hill Ultra (JHU-24)"}
            link={"/register"}
          />
        </div>
        <div className="bg-[#F6FFC7] my-10">
          <div className=" lg:px-64 py-4">
            <h1 className="text-5xl text-[#070802] font-bold text-center mb-6">
              About Race Location
            </h1>
            <div className="flex justify-between items-center space-x-20 p-3">
              <img src="/trails-img.png" width={520} height={510} />
              <div className="text-[#50514C] text-[16px] space-y-6 flex flex-col">
                <p>
                  Jawadhu Hill Ultra is an Ultra Trail Marathon is organized by
                  Chennai Trail Club in the hills of Jawadhu Hills (Eastern
                  ghats). Chennai Trail club is a group of fitness enthusiasts
                  who are passionate about long distance running. Through this
                  Ultra running, we are providing an opportunity and experience
                  to run through the trails, streams, farms and by the hamlet of
                  Jawadhu hills.
                </p>
                <p>
                  The Jawadhu Hills is an extension of the Eastern Ghats spread
                  across parts of Vellore, Tirupattur and Tiruvannamalai
                  districts in the northern part of the state of Tamil Nadu in
                  south-eastern India.
                </p>
                <p>
                  Jamanamarathur is one of the larger villages in these hills,
                  populated with around 10,000. With an altitude of 857m, it is
                  the second village in height in Jawadhu hills in Tiruvannamali
                  district.
                </p>
                <p>One can reach Jamanamarathur from</p>
                <p>West - Tirupattur or Vaniyambadi</p>
                <p>East - Polur</p>
                <p>Northeast - Vellore</p>
                <p>South - Chengam</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-64 py-20 flex items-center justify-center space-x-20">
          <div className="text-[#070802] text-[16px] w-1/2 ">
            <h1 className="text-5xl font-bold mb-4">Maintaining Cleanliness</h1>
            <p className="mb-4 w-4/5 leading-6">
              Runners are advised not to throw any cups, wrappers
              (chocolate/gels), other waste either on the trail or inside water
              bodies. Use the waste bins kept near the refreshment points.
              Sholavaram tank is one of the well maintained tank and major
              supplier of drinking water to the people of Chennai city.
              Therefore, requesting the cooperation from the runners to maintain
              the cleanliness of the tank and the trail.
            </p>
            <div className="bg-[#FFF1F1] my-4 w-2/3 text-center p-2 rounded-lg">
              <i class="bi bi-exclamation-triangle-fill text-[#f86b6b] mr-2"></i>{" "}
              Please note that barefoot running is not recommended.
            </div>
          </div>
          <div className="flex">
            <img
              src="/clean-place-img.png"
              alt="clean-place-img"
              height={350}
              width={484}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
