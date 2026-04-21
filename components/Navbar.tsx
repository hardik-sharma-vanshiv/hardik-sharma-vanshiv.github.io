"use client"
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevOffset, setPrevOffset] = useState(0);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  const links = [
    { name: 'Home', href: '#', active: true },
    { name: 'About', href: '#' },
    { name: 'Customer & Partners', href: '#' },
    { name: 'Offerings', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Blog', href: '#' },
  ];

  const toggleVisible = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevOffset && currentScrollPos > 100) {
      // Scrolling down and past 100px - hide
      setScrollDirection("down");
      setToggleDropdown(false);
      setVisible(false);
    } else if (currentScrollPos < prevOffset) {
      // Scrolling up - show
      setScrollDirection("up");
      setToggleDropdown(false);
      setVisible(true);
    }

    setIsScrolledPastHero(currentScrollPos > window.innerHeight - 80);
    setPrevOffset(currentScrollPos);
  };

  useEffect(() => {
    // Initial check
    setIsScrolledPastHero(window.scrollY > window.innerHeight - 80);
    
    window.addEventListener("scroll", toggleVisible)
    return () => window.removeEventListener("scroll", toggleVisible)
  }, [prevOffset])

  return (
    <nav className={`h-20 flex flex-row items-center justify-around fixed ${visible ? 'top-[0px]' : 'top-0'} w-screen z-40 py-2 transition-all duration-300 ${visible ? "translate-y-0" : "-translate-y-full"} ${isScrolledPastHero ? "bg-white/90 backdrop-blur-md" : "bg-black lg:bg-black/0 lg:backdrop-filter lg:backdrop-blur-lg"}`}>
      <div className="flex items-center gap-2">
        {/* Placeholder for Logo */}
        <div className="flex items-center">
          <img src={isScrolledPastHero ? "/images/logo1.png" :"/images/logo2.png"} alt="Logo" className="w-auto h-10" />
        </div>
      </div>
      <div className="hidden md:flex items-center gap-6">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`text-sm font-medium transition-all hover:text-purple-600 ${
              isScrolledPastHero ? (link.active ? 'text-gray-900' : 'text-gray-600') : 'text-white'
            } ${link.active ? 'underline underline-offset-4 decoration-2' : ''}`}
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex items-center">
       
      </div>
    </nav>
  );
}
