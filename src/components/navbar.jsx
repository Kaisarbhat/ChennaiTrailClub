"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import JoinUs from "./joinUs";
import { usePathname } from "next/navigation";
function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isJoinUsOpen, setIsJoinUsOpen] = useState(false);
  const pathname = usePathname();
  const toggleJoinUs = () => {
    setIsJoinUsOpen(!isJoinUsOpen);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const target = document.createElement("div");
    target.style.position = "absolute";
    target.style.top = "0";
    target.style.height = "1px";
    target.style.width = "100%";
    document.body.prepend(target);

    observer.observe(target);

    return () => {
      observer.unobserve(target);
      target.remove();
    };
  }, []);
  const transparentPaths = [
    "/aboutus",
    "/privacypolicy",
    "/termsofservice",
    "/refundandcancellation",
  ];

  return (
    <header
      className={`w-full h-[84px] flex items-center justify-center sm:px-4 xs:px-0 z-10  fixed top-0 left-0
      transition-all duration-300 ease-in-out
      
   ${
     pathname === "/events/pastevents"
       ? "bg-black text-white shadow-lg"
       : (pathname === "/" || pathname === "/home") && !isScrolled
       ? "bg-transparent text-white"
       : isScrolled
       ? "bg-black text-white shadow-lg"
       : transparentPaths.includes(pathname)
       ? "bg-transparent text-black"
       : "bg-black text-white shadow-lg"
   }
  
      z-50 p-4 backdrop-blur-sm text-[#fcfdf899]`}
    >
      <div className="xs:px-2 md:px-0 w-full flex xs:justify-between  items-center 2xl:w-[1340px] ">
        <a href="/home" className="flex left">
          <Image
            src="/logo.png"
            alt="logo"
            width={70}
            height={70}
            className="rounded-full"
          />
        </a>
        <nav className="w-full  flex flex-row justify-end items-center font-sans text-[18px] ">
          <ul className="sxl:flex  list-none space-x-10   nav-links md:hidden xs:hidden ">
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
                <ul className="absolute right-24 2xl:right-[360px] bg-white text-black rounded shadow-lg py-2 z-10">
                  <li className="hover:bg-gray-300">
                    <Link
                      href="/events/upcomingevents"
                      className="block px-4 py-2"
                    >
                      Upcoming Events
                    </Link>
                  </li>
                  <li className="hover:bg-gray-300">
                    <Link href="/events/pastevents" className="block px-4 py-2">
                      Past Events
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className=" hover:text-purple-900 cursor-pointer"
              onClick={toggleJoinUs}
            >
              Join Us
            </li>
          </ul>
          <button
            className="sxl:hidden  xs:flex text-4xl cursor-pointer z-10 "
            onClick={toggleMenu}
          >
            {isOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
          {/* Mobile menu */}

          {isJoinUsOpen && (
            <JoinUs isOpen={isJoinUsOpen} onClose={toggleJoinUs} />
          )}
          <ul
            className={`list-none space-y-10 ${
              isOpen ? "flex" : "hidden"
            } flex-col items-start h-screen overflow-clip bg-black text-white w-screen z-10 fixed top-16 left-0 p-6 text-[20px]`}
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
              <Link onClick={toggleMenu} href="/events/upcomingevents">
                {" "}
                Upcoming Events{" "}
              </Link>{" "}
            </li>
            <li className=" hover:text-purple-900 cursor-pointer">
              <Link onClick={toggleMenu} href="/events/pastevents">
                {" "}
                Past Events{" "}
              </Link>{" "}
            </li>
            <li
              onClick={toggleJoinUs}
              className=" hover:text-purple-900 cursor-pointer"
            >
              {" "}
              Join Us{" "}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
