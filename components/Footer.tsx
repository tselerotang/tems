'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Mail, Phone, MapPin, School, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-orange-500 p-2 rounded-full mr-3">
                <School className="h-6 w-6 text-white" />
              </div>
              <div className="font-bold text-xl">
                Star Classic
                <span className="text-orange-400"> EMH</span>
              </div>
            </div>
            <p className="text-white mb-6 font-medium text-base">
              Star Classic English Medium High School is committed to providing quality education and fostering academic excellence in a nurturing environment.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="bg-orange-500 hover:bg-orange-600 transition-colors duration-300 p-2 rounded-full">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-orange-500 hover:bg-orange-600 transition-colors duration-300 p-2 rounded-full">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-orange-500 hover:bg-orange-600 transition-colors duration-300 p-2 rounded-full">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-orange-500 hover:bg-orange-600 transition-colors duration-300 p-2 rounded-full">
                <Youtube className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-orange-500 hover:bg-orange-600 transition-colors duration-300 p-2 rounded-full">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="bg-orange-500 h-6 w-1 rounded-full inline-block mr-3"></span>
              Quick Links
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-white hover:text-orange-300 bg-navy-800 p-2 rounded-md transition-colors duration-200 flex items-center gap-2 group font-semibold text-base">
                    <span className="w-2 h-4 bg-orange-500 rounded-full"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/academics" className="text-white hover:text-orange-300 bg-navy-800 p-2 rounded-md transition-colors duration-200 flex items-center gap-2 group font-semibold text-base">
                    <span className="w-2 h-4 bg-orange-500 rounded-full"></span>
                    Academics
                  </Link>
                </li>
                <li>
                  <Link href="/admissions" className="text-white hover:text-orange-300 bg-navy-800 p-2 rounded-md transition-colors duration-200 flex items-center gap-2 group font-semibold text-base">
                    <span className="w-2 h-4 bg-orange-500 rounded-full"></span>
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="/student-life" className="text-white hover:text-orange-300 bg-navy-800 p-2 rounded-md transition-colors duration-200 flex items-center gap-2 group font-semibold text-base">
                    <span className="w-2 h-4 bg-orange-500 rounded-full"></span>
                    Student Life
                  </Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Link href="/calendar" className="text-white hover:text-orange-300 bg-navy-800 p-2 rounded-md transition-colors duration-200 flex items-center gap-2 group font-semibold text-base">
                    <span className="w-2 h-4 bg-orange-500 rounded-full"></span>
                    School Calendar
                  </Link>
                </li>
                <li>
                  <Link href="/parents" className="text-white hover:text-orange-300 bg-navy-800 p-2 rounded-md transition-colors duration-200 flex items-center gap-2 group font-semibold text-base">
                    <span className="w-2 h-4 bg-orange-500 rounded-full"></span>
                    Parent Resources
                  </Link>
                </li>
                <li>
                  <Link href="/students" className="text-white hover:text-orange-300 bg-navy-800 p-2 rounded-md transition-colors duration-200 flex items-center gap-2 group font-semibold text-base">
                    <span className="w-2 h-4 bg-orange-500 rounded-full"></span>
                    Student Resources
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white hover:text-orange-300 bg-navy-800 p-2 rounded-md transition-colors duration-200 flex items-center gap-2 group font-semibold text-base">
                    <span className="w-2 h-4 bg-orange-500 rounded-full"></span>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="bg-orange-500 h-6 w-1 rounded-full inline-block mr-3"></span>
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start bg-navy-800 p-2 rounded-md">
                <MapPin className="h-5 w-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-white font-semibold text-base">Ha Tsolo<br />Maseru, Lesotho</span>
              </li>
              <li className="flex items-center bg-navy-800 p-2 rounded-md">
                <Phone className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-white font-semibold text-base">+266 5555 1234</span>
              </li>
              <li className="flex items-center bg-navy-800 p-2 rounded-md">
                <Mail className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-white font-semibold text-base">info@starclassic.edu.ls</span>
              </li>
            </ul>
            <div className="mt-6">
              <Button variant="outline" size="sm" className="border-2 border-orange-500 text-white bg-orange-500 hover:bg-orange-600 hover:text-white font-bold">
                View on Map <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="bg-orange-500 h-6 w-1 rounded-full inline-block mr-3"></span>
              School Hours
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between bg-navy-800 p-2 rounded-md">
                <span className="text-white font-semibold text-base">Monday - Friday:</span>
                <span className="text-orange-400 font-semibold text-base">7:30 AM - 3:30 PM</span>
              </li>
              <li className="flex justify-between bg-navy-800 p-2 rounded-md">
                <span className="text-white font-semibold text-base">Saturday:</span>
                <span className="text-orange-400 font-semibold text-base">8:00 AM - 12:00 PM</span>
              </li>
              <li className="flex justify-between bg-navy-800 p-2 rounded-md">
                <span className="text-white font-semibold text-base">Admin Office:</span>
                <span className="text-orange-400 font-semibold text-base">8:00 AM - 4:00 PM</span>
              </li>
            </ul>
            <div className="h-2 bg-orange-500 my-4 rounded-full"></div>
            <div className="bg-navy-800 p-3 rounded-md">
              <h4 className="font-bold mb-2 text-orange-400 text-lg">Emergency Contact</h4>
              <p className="text-white font-bold text-lg">+266 5555 5678</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t-2 border-orange-500 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-white mb-4 md:mb-0 font-semibold">
            &copy; {currentYear} Star Classic English Medium High School. All rights reserved.
          </p>
          <div className="flex space-x-6 text-base text-white">
            <Link href="/privacy" className="hover:text-orange-300 transition-colors duration-200 font-semibold">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-orange-300 transition-colors duration-200 font-semibold">Terms of Use</Link>
            <Link href="/sitemap" className="hover:text-orange-300 transition-colors duration-200 font-semibold">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 