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
      { root: null, rootMargin: '0px', threshold: 0 }
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
  }, [isScrolled]);

  const desktopBgColor =
    pathname === '/events/pastevents'
      ? `bg-black text-white shadow-lg`
      : pathname === '/' && !isScrolled
        ? `bg-transparent text-white`
        : isScrolled
          ? `bg-black text-white shadow-lg`
          : transparentPaths.includes(pathname)
            ? 'bg-transparent text-black'
            : `bg-black text-white shadow-lg`;

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
    if (transparentPaths.includes(pathname))
      return 'text-black  rounded-full p-1';
    return 'text-white';
  };

  const isActivePage = (path) => pathname === path;

  return (
    <header
      className={`w-screen lg:h-[84px] xs:h-[72px] flex items-center justify-center fixed top-0
        ${!isOpen ? desktopBgColor : `bg-black text-white`} backdrop-blur-sm z-20 box-border`}
      role="region"
      aria-labelledby="navigation bar"
    >
      <div
        className={`${transparentPaths.includes(pathname) ? '' : 'absolute inset-0 bg-black/40'}`}
      />
      <div className="xs:px-3 py-4 lg:px-5 w-full flex xs:justify-between items-center xl:w-maxWidth">
        <Link href="/">
          <Image
            src="/newLogo.png"
            alt="logo"
            width={60}
            height={60}
            priority={true}
            className="rounded-full cursor-pointer xs:w-14 xs:h-14 md:w-[60px] md:h-[60px] object-contain"
          />
        </Link>
        <nav className="w-full flex flex-row justify-end items-center font-manrope font-medium h-14 text-[16px] z-20">
          <ul className="sxl:flex list-none sxl:space-x-12 xs:space-x-0 nav-links xs:hidden h-full items-center justify-between">
            <li className="cursor-pointer h-full flex justify-center items-center hover:text-secondary">
              <Link href="/"> Home </Link>
            </li>
            <li
              className={`${isActivePage('/aboutus') ? `text-secondary` : `hover:text-secondary`} cursor-pointer h-full flex justify-center items-center`}
            >
              <Link href="/aboutus"> About Us </Link>
            </li>
            <li
              className={`hover:text-secondary cursor-pointer relative h-full flex justify-center items-center`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Events
              {isHovered && (
                <ul className="min-w-40 absolute left-0 top-12 bg-white text-black rounded-md shadow-lg py-2 text-sm z-50 font-normal">
                  <li className="hover:bg-gray-300 mx-2 rounded-md">
                    <Link
                      href="/events/upcomingevents"
                      className="block px-2 py-2"
                    >
                      Upcoming Events
                    </Link>
                  </li>
                  <li className="hover:bg-gray-300 mx-2 rounded-md">
                    <Link href="/events/pastevents" className="block px-2 py-2">
                      Past Events
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="hover:text-secondary cursor-pointer h-full flex justify-center items-center"
              onClick={toggleJoinUs}
            >
              Join Us
            </li>
          </ul>
          <button
            className={`sxl:hidden xs:flex text-4xl cursor-pointer z-50 ${getMenuButtonColor()} ${isRotating ? 'animate-rotate' : ''}`}
            onClick={toggleMenu}
          >
            {isOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
          {isJoinUsOpen && (
            <JoinUs isOpen={isJoinUsOpen} onClose={toggleJoinUs} />
          )}
          <ul
            className={`list-none space-y-10  ${
              isOpen ? 'flex' : 'hidden'
            } flex-col items-start h-screen bg-black text-white w-full z-50 fixed top-16 left-0 p-6 text-[20px]`}
          >
            {mobileNav.map((item, index) => (
              <li key={index} className="hover:text-secondary cursor-pointer">
                <Link href={item.href} onClick={toggleMenu}>
                  {item.name}
                </Link>
              </li>
            ))}
            <li
              onClick={toggleJoinUs}
              className="hover:text-secondary cursor-pointer"
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
