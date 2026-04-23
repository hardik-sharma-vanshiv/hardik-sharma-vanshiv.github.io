"use client"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevOffset, setPrevOffset] = useState(0);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/', active: pathname === '/' },
    { name: 'About', href: '/about', active: pathname === '/about' },
    { name: 'Customer & Partners', href: '#' },
    { name: 'Offerings', href: '#' },
    { name: 'Careers', href: '/careers', active: pathname === '/careers' },
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
    <nav className={`h-20 flex flex-row items-center justify-between px-6 md:justify-around fixed ${visible ? 'top-[0px]' : 'top-0'} w-screen z-40 py-2 transition-all duration-300 ${visible ? "translate-y-0" : "-translate-y-full"} ${isScrolledPastHero ? "bg-white/90 backdrop-blur-md" : "bg-black lg:bg-black/0 lg:backdrop-filter lg:backdrop-blur-lg"}`}>
      <div className="flex items-center gap-2">
        {/* Placeholder for Logo */}
        <div className="flex items-center">
          <img src={isScrolledPastHero ? "/images/logo1.png" : "/images/logo2.png"} alt="Vanshiv Logo" className="w-auto h-10" />
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6">
        {links.map((link) => {
          if (link.name === 'Careers') {
            return (
              <div key={link.name} className="relative group py-2">
                <button
                  className={`relative flex items-center gap-1 text-sm font-medium transition-all ${isScrolledPastHero ? 'text-gray-600' : 'text-white'} after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
                >
                  {link.name}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute top-full left-0 mt-0 w-60 bg-white shadow-xl border border-gray-100 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden">
                  <a href="/careers" className="px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">Current openings</a>
                  <a href="#" className="px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors border-t border-gray-100">Career Accelerator program</a>
                </div>
              </div>
            );
          }
          return (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm font-medium transition-all ${isScrolledPastHero ? (link.active ? 'text-gray-900' : 'text-gray-600') : 'text-white'
                } ${link.active ? 'after:scale-x-100 after:origin-bottom-left' : 'after:scale-x-0'} after:content-[''] after:absolute after:w-full after:h-[2px] after:-bottom-1 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
            >
              {link.name}
            </a>
          );
        })}
      </div>

      <div className="hidden md:flex items-center">
        <a href="#contact" className={`${isScrolledPastHero ? 'bg-black' : 'bg-white'} ${isScrolledPastHero ? 'text-white' : 'text-black'} px-6 py-2  hover:bg-white text-black text-sm font-bold rounded-lg transition-colors`}>
          Contact Us
        </a>
      </div>

      {/* Hamburger Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 focus:outline-none ${isScrolledPastHero ? 'text-gray-900' : 'text-white'}`}>
          {isMobileMenuOpen ? (
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col md:hidden py-4 px-6 gap-4 z-50">
          {links.map((link) => {
            if (link.name === 'Careers') {
              return (
                <div key={link.name} className="flex flex-col gap-3">
                  <span className={`text-base font-medium text-gray-800`}>{link.name}</span>
                  <div className="flex flex-col gap-3 pl-4 border-l-2 border-purple-100">
                    <a href="#" className="text-sm text-gray-600 hover:text-purple-600" onClick={() => setIsMobileMenuOpen(false)}>Current openings</a>
                    <a href="#" className="text-sm text-gray-600 hover:text-purple-600" onClick={() => setIsMobileMenuOpen(false)}>Career Accelerator program</a>
                  </div>
                </div>
              );
            }
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-base font-medium text-gray-800 hover:text-purple-600`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-2 border-t border-gray-100">
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block px-6 py-3 mt-2 bg-gradient-to-r from-purple-500 to-fuchsia-400 hover:from-purple-600 hover:to-fuchsia-500 text-white text-sm font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(168,85,247,0.4)] w-full text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
