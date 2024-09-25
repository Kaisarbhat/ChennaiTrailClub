"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion,useInView } from "framer-motion";


const FooterLarge = () => {
  const ref =useRef();
  const isInView = useInView(ref , {once :true});
  return (
    <>
      <div className=" md:px-4">
        <div className="w-full flex justify-center mt-8 mb-4">
          <div className="md:w-full  lg:w-4/5 md:mx-3 rounded-3xl  text-[#FCFDF8] bg-black px-12 py-8  mb-0 h-[270px] text-[14px] flex items-start justify-between">
            <div className="flex flex-col w-[350px]">
              <h2 className="text-2xl mt-3">Chennai Trail Club</h2>
              <p className="text-[#B6B6B3] mt-3 text-[16px]">
                Join us for epic outdoor adventures and bond with fellow nature
                enthusiasts
              </p>
              <div className="mt-4">
                {/* <p className="font-bold text-[12px]">JOIN WITH US</p> */}
                <ul className="flex space-x-2 text-3xl text-[#D0F700]">
                  <li className=" cursor-pointer hover:text-purple-900">
                    <a href="https://www.facebook.com/groups/901820050881838/?ref=share&mibextid=NSMWBT&_rdr">
                      <i class="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li className=" cursor-pointer hover:text-purple-900">
                    <a href="https://www.instagram.com/chennaitrailclub/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                      <i class="bi bi-instagram"></i>
                    </a>
                  </li>
                  <li className="cursor-pointer hover:text-purple-900">
                    <a>
                      <i class="bi bi-youtube"></i>
                    </a>
                  </li>
                  <li className="cursor-pointer hover:text-purple-900">
                    <a href="https://www.strava.com/athletes/118722869">
                      <i class="bi bi-strava"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-evenly space-x-10 mt-8 w-3/4 text-[12px]">
              <div className="flex flex-col">
                <p className="font-bold mb-3 text-[#FCFDF8] text-[12px]">
                  QUICK LINKS
                </p>
                <ul className="flex flex-col list-none  space-y-2 ">
                  <li className=" hover:text-purple-900 cursor-pointer">
                    <Link href="/"> Home </Link>
                  </li>
                  <li className=" hover:text-purple-900 cursor-pointer">
                    <Link href="/aboutus"> About Us </Link>
                  </li>
                  <li className=" hover:text-purple-900 cursor-pointer">
                    <Link href="/upcomingevents"> Upcoming Events </Link>
                  </li>
                  <li className=" hover:text-purple-900 cursor-pointer">
                    <Link href="/pastevents"> Past Events </Link>
                  </li>
                  <li className=" hover:text-purple-900 cursor-pointer">
                    <Link href="/joinus"> Join Us </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-3 text-[#FCFDF8] text-[12px]">
                  CONTACT US
                </p>
                <address>
                  <div className="mt-3">
                    <h4>Location:</h4>
                    <h6 className="text-[#FCFDF8] mt-1">
                      Saligramam, Chennai - 600093
                    </h6>
                  </div>
                  <div className="mt-4">
                    <h4>email:</h4>
                    <h6 className="text-[#FCFDF8]mt-1">
                      info@chennaitrailclub.in
                    </h6>
                  </div>
                </address>
              </div>

              <div>
                <p className="font-bold text-[#FCFDF8] text-[12px]">
                  OUR TECHNOLOGY PARTNER
                </p>
                <motion.div 
                ref={ref}
                initial={{opacity : 0,scale: 0}}
                animate={isInView ? {opacity : 1,scale : 1} : {opacity : 0,scale: 0}}
                transition={{duration : 0.5 }}
                className="flex justify-center mt-6">
                  <Link href="https://www.calibraint.com/">
                    <img
                      src="/footer-calibraint-logo.png"
                      alt="footer-calibraint-logo"
                      width={130}
                      height={100}
                      className=" mt-4 cursor-pointer"
                    />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center text-[#50514C] text-[14px]">
          <div className="flex lg:w-4/5 md:w-full md:px-4 justify-between  mb-4">
            <ul className="flex list-none space-x-10">
              <li className=" hover:text-purple-900 cursor-pointer">
                <Link href="/privacypolicy">Privacy Policy</Link>
              </li>
              <li className=" hover:text-purple-900 cursor-pointer">
                <Link href="/termsofservice">Terms of Service</Link>
              </li>
              <li className=" hover:text-purple-900 cursor-pointer">
                <Link href="/refundandcancellation">
                  Refund and Cancellation Policy
                </Link>
              </li>
            </ul>
            <h4>Chennaitrailclub © 2024, All Rights Reserved</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterLarge;
