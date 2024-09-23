"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="lg:px-64 md:px-4">
        <div className="w-full flex justify-center mt-10 mb-10">
          <div className="md:w-full  md:mx-3 rounded-3xl text-white bg-black px-6 py-3 flex flex-col mb-0">
            <div>
              <h1 className="font-bold text-3xl mb-2">Chennai Trail Club</h1>
              <p>
                Join us for epic outdoor adventures and bond with fellow nature
                enthusiasts
              </p>
            </div>
            <div className="flex justify-evenly space-x-10 mt-8">
              <div className="flex flex-col">
                <p className="font-bold mb-3">QUICK LINKS</p>
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
                <p className="font-bold mb-3">CONTACT US</p>
                <address>
                  <div>
                    <p>Location:</p>
                    <p className="font-bold">Saligramam, Chennai - 600093</p>
                  </div>
                  <div className="mt-3">
                    <p>email:</p>
                    <p className="font-bold">info@chennaitrailclub.in</p>
                  </div>
                </address>
              </div>
              <div>
                <p className="font-bold">JOIN WITH US</p>
                <ul className="flex space-x-2">
                  <li className="text-[#D0F700] text-xl cursor-pointer hover:text-purple-900">
                    <a href="https://www.facebook.com/groups/901820050881838/?ref=share&mibextid=NSMWBT&_rdr">
                      <i class="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li className="text-[#D0F700] text-xl cursor-pointer hover:text-purple-900">
                    <a href="https://www.instagram.com/chennaitrailclub/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                      <i class="bi bi-instagram"></i>
                    </a>
                  </li>
                  <li className="text-[#D0F700] text-xl cursor-pointer hover:text-purple-900">
                    <a>
                      <i class="bi bi-youtube"></i>
                    </a>
                  </li>
                  <li className="text-[#D0F700] text-xl cursor-pointer hover:text-purple-900">
                    <a href="https://www.strava.com/athletes/118722869">
                      <i class="bi bi-strava"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div >
                <p className="font-bold">OUR TECHNOLOGY PARTNER</p>
               <div className="flex justify-center">
               <Link href="https://www.calibraint.com/" >
                <img
                  src="/footer-calibraint-logo.png"
                  alt="footer-calibraint-logo"
                  width={130}
                  height={100}
                  className=" mt-4 cursor-pointer"
                />
                </Link>
               </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-14 mb-4">
          <ul className="flex list-none space-x-10">
            <li className=" hover:text-purple-900 cursor-pointer">
              Privacy Policy
            </li>
            <li className=" hover:text-purple-900 cursor-pointer">
              Terms of Service
            </li>
            <li className=" hover:text-purple-900 cursor-pointer">
              Refund and Cancellation Policy
            </li>
          </ul>
          <p>Chennaitrailclub © 2024, All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
