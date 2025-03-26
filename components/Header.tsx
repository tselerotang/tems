'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, X, BookOpen, GraduationCap, Users, School, ExternalLink } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [activeLink, setActiveLink] = useState('/');
  const [isTopMenuOpen, setIsTopMenuOpen] = useState(false);
  
  // Handle scroll event to detect direction and position
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Only track if we've scrolled past the threshold for shadow effect
      const scrolled = currentScrollPos > 100;
      
      setIsScrolled(scrolled);
      setPrevScrollPos(currentScrollPos);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  // Set active link based on current path
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActiveLink(window.location.pathname);
    }
  }, []);

  const mainNavLinks = [
    { name: 'Home', href: '/', icon: <School className="w-4 h-4 mr-1" /> },
    { name: 'About', href: '/about', icon: <Users className="w-4 h-4 mr-1" /> },
    { name: 'Academics', href: '/academics', icon: <BookOpen className="w-4 h-4 mr-1" /> },
    { name: 'Admissions', href: '/admissions', icon: <GraduationCap className="w-4 h-4 mr-1" /> },
    { name: 'Student Life', href: '/student-life', icon: <Users className="w-4 h-4 mr-1" /> },
  ];

  const secondaryLinks = [
    { name: 'Students', href: '/students' },
    { name: 'Parents', href: '/parents' },
    { name: 'Staff', href: '/staff' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <div className="relative">
        <header className="bg-gradient-to-r from-navy-900 to-navy-800 text-white py-2 relative z-20">
          <div className="container mx-auto px-4">
            {/* Top Secondary Menu - Desktop */}
            <div className="hidden sm:flex justify-between items-center">
              <div className="flex items-center space-x-6">
                <div className="flex items-center bg-navy-800 px-3 py-1 rounded-full">
                  <Phone size={14} className="mr-2 text-orange-400" />
                  <a href="tel:+2665555234" className="text-sm hover:text-orange-300 transition-colors font-medium">+266 5555 1234</a>
                </div>
                <div className="flex items-center bg-navy-800 px-3 py-1 rounded-full">
                  <Mail size={14} className="mr-2 text-orange-400" />
                  <a href="mailto:info@starclassic.edu.ls" className="text-sm hover:text-orange-300 transition-colors font-medium">info@starclassic.edu.ls</a>
                </div>
              </div>
              
              <nav className="flex">
                <ul className="flex items-center space-x-2">
                  {secondaryLinks.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href} 
                        className="px-3 py-1 text-sm font-semibold hover:bg-navy-800 rounded-full transition-colors duration-200 flex items-center"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <a 
                      href="/portal" 
                      className="ml-2 bg-orange-500 hover:bg-orange-600 px-3 py-1 text-sm rounded-full transition-colors duration-200 flex items-center font-semibold"
                    >
                      Student Portal <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            
            {/* Top Secondary Menu - Mobile */}
            <div className="sm:hidden">
              <div className="flex justify-between items-center">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-white p-0 hover:bg-transparent" 
                  onClick={() => setIsTopMenuOpen(!isTopMenuOpen)}
                >
                  <div className="flex items-center">
                    <Phone size={14} className="mr-1 text-orange-400" />
                    <span className="text-xs font-medium">Contact</span>
                    <span className={`ml-1 transition-transform duration-200 ${isTopMenuOpen ? 'rotate-180' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </div>
                </Button>
                
                <a 
                  href="/portal" 
                  className="bg-orange-500 hover:bg-orange-600 px-3 py-1 text-xs rounded-full transition-colors duration-200 flex items-center font-medium"
                >
                  Student Portal <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
              
              <div className={`overflow-hidden transition-all duration-300 ${isTopMenuOpen ? 'max-h-40 mt-2' : 'max-h-0'}`}>
                <div className="grid grid-cols-2 gap-2 py-2">
                  <div className="flex items-center bg-navy-800 px-2 py-1 rounded-md">
                    <Phone size={12} className="mr-1 text-orange-400" />
                    <a href="tel:+2665555234" className="text-xs hover:text-orange-300 transition-colors font-semibold">+266 5555 1234</a>
                  </div>
                  <div className="flex items-center bg-navy-800 px-2 py-1 rounded-md">
                    <Mail size={12} className="mr-1 text-orange-400" />
                    <a href="mailto:info@starclassic.edu.ls" className="text-xs hover:text-orange-300 transition-colors truncate font-semibold">info@starclassic.edu.ls</a>
                  </div>
                  {secondaryLinks.map((link) => (
                    <Link 
                      key={link.href}
                      href={link.href} 
                      className="flex items-center bg-navy-800 px-2 py-1 rounded-md text-xs hover:text-orange-300 transition-colors font-semibold"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="h-[3px] w-full bg-orange-500 my-0.5"></div>
      </div>

      <nav 
        className={`sticky top-0 w-full bg-white shadow-md py-4 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? 'shadow-lg' : ''
        } sticky`}
        style={{ position: 'sticky', top: '0px', zIndex: 9999 }}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/" className="group">
            <div className="flex items-center">
              <div className="mr-3 bg-navy-100 text-navy-800 p-2 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <School className="h-6 w-6" />
              </div>
              <div className="text-xl sm:text-2xl font-bold">
                <span className="text-navy-800 group-hover:text-navy-600 transition-colors duration-300">Star Classic</span>
                <br className="sm:hidden" />
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300"> EMH</span>
              </div>
            </div>
          </Link>
          
          <ul className="hidden md:flex items-center space-x-1">
            {mainNavLinks.map((link) => (
              <li key={link.href} className="relative">
                <Link 
                  href={link.href} 
                  className={`flex items-center px-4 py-2 rounded-md transition-all duration-300 hover:bg-navy-50 ${
                    activeLink === link.href 
                      ? 'text-orange-600 font-medium' 
                      : 'text-gray-700 hover:text-navy-700'
                  }`}
                  onClick={() => setActiveLink(link.href)}
                >
                  {link.icon}
                  {link.name}
                  {activeLink === link.href && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform transition-transform duration-300"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center">
            <Button 
              size="icon" 
              variant="ghost" 
              className="md:hidden mr-2 text-navy-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-200 rotate-0" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-200 rotate-0" />
              )}
              <span className="sr-only">{isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}</span>
            </Button>
            <Link href="/admissions">
              <Button 
                className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-300 font-medium"
              >
                Apply Now
              </Button>
            </Link>
            <Link href="/admissions" className="md:hidden">
              <Button 
                size="sm" 
                className="bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-300 font-medium text-xs px-3 py-1 h-8"
              >
                Apply
              </Button>
            </Link>
          </div>
        </div>

        <div 
          className={`fixed top-[72px] left-0 right-0 bg-white shadow-lg md:hidden z-50 transform transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'translate-y-0 opacity-100 max-h-[calc(100vh-72px)] overflow-y-auto' 
              : '-translate-y-4 opacity-0 max-h-0 overflow-hidden'
          }`}
        >
          <div className="container mx-auto px-4 py-2">
            <ul className="space-y-2">
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-200 ${
                      activeLink === link.href 
                        ? 'bg-navy-50 text-orange-600 font-medium' 
                        : 'hover:bg-navy-50 hover:text-navy-700'
                    }`}
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      
      {/* Add marquee animation to Tailwind config */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-marquee-once {
          animation: marquee 10s linear;
        }
        
        /* Custom color variables for navy and orange */
        :root {
          --navy-50: #f0f4f8;
          --navy-100: #d9e2eb;
          --navy-700: #1a4971;
          --navy-800: #0a2b4a;
          --navy-900: #051e34;
        }
        
        /* Ensure sticky nav works across browsers */
        nav.sticky {
          position: -webkit-sticky;
          position: sticky !important;
          top: 0 !important;
          z-index: 9999 !important;
        }
        
        .bg-navy-50 { background-color: var(--navy-50); }
        .bg-navy-100 { background-color: var(--navy-100); }
        .hover\:bg-navy-50:hover { background-color: var(--navy-50); }
        .text-navy-600 { color: var(--navy-700); }
        .text-navy-700 { color: var(--navy-700); }
        .text-navy-800 { color: var(--navy-800); }
        .hover\:text-navy-700:hover { color: var(--navy-700); }
        .bg-navy-700 { background-color: var(--navy-700); }
        .bg-navy-800 { background-color: var(--navy-800); }
        .bg-navy-900 { background-color: var(--navy-900); }
        .from-navy-800 { --tw-gradient-from: var(--navy-800); }
        .from-navy-900 { --tw-gradient-from: var(--navy-900); }
        .to-navy-800 { --tw-gradient-to: var(--navy-800); }
      `}</style>
    </>
  );
};

export default Header; 