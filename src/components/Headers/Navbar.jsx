'use client';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { JoinUs } from '..';

function Navbar() {
  const transparentPaths = [
    '/aboutus',
    '/privacypolicy',
    '/termsofservice',
    '/refundandcancellation',
  ];
  const mobileNav = [
    { name: 'Home', href: '/' },
    {
      name: 'About us',
      href: '/aboutus',
    },
    {
      name: 'Upcoming Events',
      href: '/events/upcomingevents',
    },
    {
      name: 'Past Events',
      href: '/events/pastevents',
    },
  ];
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const [isJoinUsOpen, setIsJoinUsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const target = document.createElement('div');
    target.style.position = 'absolute';
    target.style.top = '0';
    target.style.height = '1px';
    target.style.width = '100%';
    document.body.prepend(target);

    observer.observe(target);

    return () => {
      observer.unobserve(target);
      target.remove();
    };
  });

  const desktopBgColor =
    pathname === '/events/pastevents'
      ? 'bg-black text-[#fcfdf8] shadow-lg'
      : pathname === '/' && !isScrolled
        ? 'bg-transparent text-[#fcfdf8]'
        : isScrolled
          ? 'bg-black text-[#fcfdf8] shadow-lg'
          : transparentPaths.includes(pathname)
            ? 'bg-transparent text-black'
            : 'bg-black text-[#fcfdf8] shadow-lg';

  const toggleJoinUs = () => {
    setIsJoinUsOpen(!isJoinUsOpen);
  };

  const handleRotate = () => {
    setIsRotating(false);
    requestAnimationFrame(() => {
      setIsRotating(true);
    });
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    handleRotate();
  };

  const getMenuButtonColor = () => {
    if (isOpen) return 'text-white';
    if (pathname.startsWith('/events')) return 'text-white';
    if (pathname === '/' && !isScrolled) return 'text-white';
    if (isScrolled) return 'text-white';
    return 'text-black hover:bg-black/5 rounded-full p-1';
  };

  const isActivePage = (path) => pathname === path;
  const isEventsPage = pathname.startsWith('/events');

  return (
    <header
      className={`w-full h-[80px] flex items-center justify-center sm:px-4 xs:px-0 z-20  fixed top-0 left-0 
        ${!isOpen ? desktopBgColor : 'bg-black text-[#fcfdf8]'}
  
   p-4 backdrop-blur-sm `}
      role="region"
      aria-labelledby="navigation bar"
    >
      <div className="xs:px-2 md:px-0 w-full flex xs:justify-between  items-center lg:max-w-[1320px] z-20">
        <Link href="/" className="flex left">
          <Image
            src={
              transparentPaths.includes(pathname) && !isScrolled && !isOpen
                ? '/logo.svg'
                : '/whitelogo.svg'
            }
            alt="logo"
            width={70}
            height={70}
            className="rounded-full w-[70px] h-[70px]"
          />
        </Link>
        <nav className="w-full  flex flex-row justify-end items-center font-manrope font-medium text-[16px]">
          <ul className="sxl:flex  list-none space-x-10 nav-links md:hidden xs:hidden ">
            <li
              className={`${isActivePage('/') ? 'text-[#7328F6]' : 'hover:text-[#7328F6]'} cursor-pointer`}
            >
              <Link href="/"> Home </Link>
            </li>
            <li
              className={`${isActivePage('/aboutus') ? 'text-[#7328F6]' : 'hover:text-[#7328F6]'} cursor-pointer`}
            >
              <Link href="/aboutus"> About Us </Link>
            </li>
            <li
              className={`${isEventsPage ? 'text-[#7328F6]' : 'hover:text-[#7328F6]'} cursor-pointer relative`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Events
              {isHovered && (
                <ul className="min-w-48 absolute right-1 bg-white text-black rounded shadow-lg py-2 z-10 font-normal">
                  <li className="hover:bg-gray-300 mx-2 rounded-md">
                    <Link
                      href="/events/upcomingevents"
                      className="block px-4 py-2"
                    >
                      Upcoming Events
                    </Link>
                  </li>
                  <li className="hover:bg-gray-300 mx-2 rounded-md">
                    <Link href="/events/pastevents" className="block px-4 py-2">
                      Past Events
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className={`${isActivePage('/joinus') ? 'text-[#7328F6]' : 'hover:text-[#7328F6]'} cursor-pointer`}
              onClick={toggleJoinUs}
            >
              Join Us
            </li>
          </ul>
          <button
            className={`sxl:hidden xs:flex text-4xl cursor-pointer z-10 ${getMenuButtonColor()} ${isRotating ? 'animate-rotate' : ''}`}
            onClick={toggleMenu}
          >
            {isOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
          {isJoinUsOpen && (
            <JoinUs isOpen={isJoinUsOpen} onClose={toggleJoinUs} />
          )}
          <ul
            className={`list-none space-y-10 ${
              isOpen ? 'flex' : 'hidden'
            } flex-col items-start h-screen overflow-clip bg-black text-white w-full z-10  mt-4 fixed top-16 left-0 p-6 text-[20px]`}
          >
            {mobileNav.map((item, index) => (
              <li key={index} className="hover:text-[#7328F6] cursor-pointer">
                <Link href={item.href} onClick={toggleMenu}>
                  {item.name}
                </Link>
              </li>
            ))}
            <li
              onClick={toggleJoinUs}
              className="hover:text-[#7328F6] cursor-pointer"
            >
              Join Us
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
