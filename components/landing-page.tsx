'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Phone, Mail, Search, Calendar, Book, Users, Award, Menu } from 'lucide-react'

export function LandingPageComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-blue-800 text-white py-2">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-2 sm:mb-0">
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <span>+266 5555 1234</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2" />
              <span>info@thetsane.edu.ls</span>
            </div>
          </div>
          <nav className="hidden sm:block">
            <ul className="flex space-x-4">
              <li><Link href="/students" className="hover:underline">Students</Link></li>
              <li><Link href="/parents" className="hover:underline">Parents</Link></li>
              <li><Link href="/staff" className="hover:underline">Staff</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <nav className="bg-white shadow-md py-4 relative">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-xl sm:text-2xl font-bold text-blue-800">
            Thetsane English<br className="sm:hidden" /> Medium School
          </div>
          <ul className="hidden md:flex space-x-6">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link href="/academics" className="hover:text-blue-600">Academics</Link></li>
            <li><Link href="/admissions" className="hover:text-blue-600">Admissions</Link></li>
            <li><Link href="/student-life" className="hover:text-blue-600">Student Life</Link></li>
          </ul>
          <div className="flex items-center">
            <Button 
              size="icon" 
              variant="ghost" 
              className="md:hidden mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
            <Button size="icon" variant="ghost">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
            <div className="container mx-auto px-4 py-2">
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/" 
                    className="block py-2 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="block py-2 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/academics" 
                    className="block py-2 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Academics
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/admissions" 
                    className="block py-2 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/student-life" 
                    className="block py-2 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Student Life
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        <section className="bg-blue-700 text-white py-12 sm:py-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Welcome to Thetsane English Medium School</h1>
              <p className="mb-6">Empowering minds, shaping futures, and fostering excellence in education.</p>
              <Button size="lg" variant="secondary">Learn More</Button>
            </div>
            <div className="w-full md:w-1/2">
              <Image 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7" 
                alt="Students in a classroom at Thetsane English Medium School" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-blue-800">Why Choose Thetsane English Medium School?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Book className="mr-2 text-blue-600" />
                    Quality Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our curriculum is designed to challenge and inspire students, preparing them for success in higher education and beyond.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 text-blue-600" />
                    Supportive Community
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We foster a close-knit, inclusive environment where every student feels valued and supported in their academic journey.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="mr-2 text-blue-600" />
                    Extracurricular Excellence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>From sports to arts and community service, we offer a wide range of activities to help students develop their talents and interests.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-blue-800">Upcoming Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 text-blue-600" />
                    Open House
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Join us on May 15th for our annual Open House. Tour the campus, meet teachers, and learn about our programs.</p>
                  <Button className="mt-4">Register</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 text-blue-600" />
                    Science Fair
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our students showcase their innovative projects at the Science Fair on June 5th. All are welcome to attend!</p>
                  <Button className="mt-4">Learn More</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 text-blue-600" />
                    Sports Day
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Cheer on our athletes at the annual Sports Day on July 10th. A day of friendly competition and school spirit!</p>
                  <Button className="mt-4">View Schedule</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-blue-800">Student Life at Thetsane</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Image 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
                  alt="Students participating in a group project" 
                  width={500} 
                  height={300} 
                  className="rounded-lg shadow-lg mb-4 w-full h-[300px] object-cover"
                />
                <h3 className="text-xl font-bold mb-2">Collaborative Learning</h3>
                <p>Our students engage in hands-on, project-based learning that fosters creativity and teamwork.</p>
              </div>
              <div>
                <Image 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754" 
                  alt="Students performing in a school play" 
                  width={500} 
                  height={300} 
                  className="rounded-lg shadow-lg mb-4 w-full h-[300px] object-cover"
                />
                <h3 className="text-xl font-bold mb-2">Arts and Culture</h3>
                <p>We encourage students to express themselves through various artistic and cultural activities.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-700 text-white py-12 sm:py-16">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Join the Thetsane Family</h2>
            <p className="mb-8">Applications for the upcoming academic year are now open. Take the first step towards a bright future!</p>
            <Button size="lg" variant="secondary">Apply Now</Button>
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          <div>
            <h3 className="text-xl font-bold mb-4 border-b pb-2">Contact Us</h3>
            <address className="not-italic space-y-2">
              <p>Thetsane English Medium School</p>
              <p>123 Education Street</p>
              <p>Maseru, Lesotho</p>
              <p>Phone: +266 5555 1234</p>
              <p>Email: info@thetsane.edu.ls</p>
            </address>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 border-b pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">School Calendar</Link></li>
              <li><Link href="#" className="hover:underline">Curriculum</Link></li>
              <li><Link href="#" className="hover:underline">Admissions Process</Link></li>
              <li><Link href="#" className="hover:underline">Parent Portal</Link></li>
              <li><Link href="#" className="hover:underline">Student Handbook</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 border-b pb-2">Follow Us</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Facebook</Link></li>
              <li><Link href="#" className="hover:underline">Twitter</Link></li>
              <li><Link href="#" className="hover:underline">Instagram</Link></li>
              <li><Link href="#" className="hover:underline">LinkedIn</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 border-b pb-2">Newsletter</h3>
            <p className="mb-4">Stay updated with school news and events. Subscribe to our newsletter.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Your email" className="flex-grow" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-blue-700 flex flex-col sm:flex-row justify-between items-center px-4">
          <p className="text-sm mb-4 sm:mb-0">© 2024 Thetsane English Medium School. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:opacity-80">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </Link>
            <Link href="#" className="hover:opacity-80">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </Link>
            <Link href="#" className="hover:opacity-80">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}