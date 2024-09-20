
import React from "react";
import Carousel from "../../components/carousel";

const AboutUs = () => {
  return (
    <div className="px-4 pt-20">
      <div className="mt-10">
        <div className=" flex bg-[url('https://c1.wallpaperflare.com/preview/23/342/352/run-jog-sport-leisure.jpg')] rounded-3xl bg-cover  md:h-96 lg:h-[600px] lg:mx-64 md:mx-[60px]">
          <div className="flex flex-col justify-center w-2/5 px-8 text-white  ">
            <h1 className="text-4xl font-bold mb-7">About Us</h1>
            <p className="font-bold text-xl leading-7">
              It’s a community built on shared passions, support, and
              camaraderie.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between lg:px-64  md:p-10 my-10">
        <h1 className="lg:text-[56px] md:text-4xl font-bold lg:leading-tight ">
          We believe in transformative power of individuals
        </h1>
        <p className=" flex items-center text-xl leading-normal text-[#50514c]">
          {" "}
          We are a passionate community of outdoor enthusiasts who share a
          common love for trail running, hiking, swimming and exploration.
        </p>
      </div>
        <div className="lg:px-44 flex items-center justify-center">
         <Carousel/>
        </div>
      <div className="w-full flex justify-between my-28 space-x-14 lg:px-64">
        <div className="lg:text-[56px] md:text-3xl  lg:w-2/5 font-bold">
        Built on shared passions
        </div>
        <div className="flex flex-col w-3/5 space-y-4 ">
            <div className="font-bold text-[22px]">
            Our club was founded with the vision of creating a space where individuals from all walks of life can come together, and share experiences
            </div>
            <p className="text-xl text-[#50514c]">We also emphasize responsible outdoor practices, encouraging environmental awareness and leaving no trace behind. We foster an inclusive and welcoming environment where friendships are formed, stories are shared, and memories are created.</p>
            <p className="text-xl text-[#50514c]">
            So, if you’re ready to break free from the confines of everyday life and embark on incredible nature trails, we invite you to join the Chennai Trail Club. Together, let’s discover the beauty of nature, challenge ourselves, and create memories that will last a lifetime. Welcome to the club!
            </p>
        </div>
      </div>
     </div>
  );
};

export default AboutUs;
