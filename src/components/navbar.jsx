"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import JoinUs from "./joinUs";
function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isJoinUsOpen, setIsJoinUsOpen] = useState(false);
  // const openJoinUs = () => setIsJoinUsOpen(true);
  // const closeJoinUs = () => setIsJoinUsOpen(false);
  const toggleJoinUs = () => {
    setIsJoinUsOpen(!isJoinUsOpen)
  }
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full h-20 flex items-center   bg-black text-[#fcfdf899] fixed lg:px-64 md:px-4 z-10">
      <a href="/home" className="flex left">
        <Image
          src="/logo.png"
          alt="logo"
          width={60}
          height={60}
          className="rounded-full"
        />
      </a>
      <nav className="w-full  flex flex-row justify-end items-center font-sans text-[16px]">
        <ul className="lg:flex  list-none space-x-10  nav-links md:hidden sm:hidden ">
          <li className=" hover:text-purple-900 cursor-pointer">
            <Link href="/home"> Home </Link>{" "}
          </li>
          <li className=" hover:text-purple-900 cursor-pointer">
            <Link href="/aboutus"> About Us </Link>{" "}
          </li>
          <li
            className=" hover:text-purple-900 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {" "}
            Events
            {isHovered && (
              <ul className="absolute right-80  bg-white text-black rounded shadow-lg py-2">
                <li className="hover:bg-gray-300">
                  <Link href="/upcomingevents" className="block px-4 py-2">
                    Upcoming Events
                  </Link>
                </li>
                <li className="hover:bg-gray-300">
                  <Link href="/pastevents" className="block px-4 py-2">
                    Past Events
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className=" hover:text-purple-900 cursor-pointer"
          onClick={toggleJoinUs}
          > Join Us
              
          </li>
        </ul>
        <button
          className="lg:hidden md:flex text-4xl cursor-pointer z-10 "
          onClick={toggleMenu}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
        {/* Mobile menu */}

        {isJoinUsOpen && <JoinUs isOpen={isJoinUsOpen} onClose={toggleJoinUs} />}
        <ul
          className={`list-none space-y-10 ${
            isOpen ? "flex" : "hidden"
          } flex-col items-start h-screen bg-black text-white w-screen z-10 fixed top-16 left-0 p-6 text-[20px]`}
        >
          <li className=" hover:text-purple-900 cursor-pointer">
            <Link onClick={toggleMenu} href="/">
              {" "}
              Home{" "}
            </Link>{" "}
          </li>
          <li className=" hover:text-purple-900 cursor-pointer">
            <Link onClick={toggleMenu} href="/aboutus">
              {" "}
              About Us{" "}
            </Link>{" "}
          </li>
          <li className=" hover:text-purple-900 cursor-pointer">
            <Link onClick={toggleMenu} href="/upcomingevents">
              {" "}
              Upcoming Events{" "}
            </Link>{" "}
          </li>
          <li className=" hover:text-purple-900 cursor-pointer">
            <Link onClick={toggleMenu} href="/pastevents">
              {" "}
              Past Events{" "}
            </Link>{" "}
          </li>
          <li onClick={toggleJoinUs} className=" hover:text-purple-900 cursor-pointer">
              {" "}
              Join Us{" "}
          {" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
