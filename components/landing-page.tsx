'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Users, Award, Calendar, ArrowRight, ChevronRight } from 'lucide-react'

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow">
        {/* Hero Section with Parallax Effect */}
        <section className="relative h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7" 
              alt="Students in a classroom at Star Classic English Medium High School" 
              fill
              className="object-cover brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-navy-800/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                Welcome to Star Classic English Medium High School
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                Empowering minds, shaping futures, and fostering excellence in education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-blue hover:bg-white/10">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-navy-800">Why Choose Star Classic EMH?</h2>
              <p className="text-gray-600 text-lg">
                We provide a nurturing environment where students can thrive academically, socially, and personally.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-shadow duration-300 border-2 hover:border-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="p-3 bg-navy-100 rounded-full mr-4 group-hover:bg-orange-500 transition-colors duration-300">
                      <Book className="h-6 w-6 text-navy-800 group-hover:text-white" />
                    </div>
                    Quality Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Our curriculum is designed to challenge and inspire students, preparing them for success in higher education and beyond.</p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-shadow duration-300 border-2 hover:border-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="p-3 bg-navy-100 rounded-full mr-4 group-hover:bg-orange-500 transition-colors duration-300">
                      <Users className="h-6 w-6 text-navy-800 group-hover:text-white" />
                    </div>
                    Supportive Community
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">We foster a close-knit, inclusive environment where every student feels valued and supported in their academic journey.</p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-shadow duration-300 border-2 hover:border-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="p-3 bg-navy-100 rounded-full mr-4 group-hover:bg-orange-500 transition-colors duration-300">
                      <Award className="h-6 w-6 text-navy-800 group-hover:text-white" />
                    </div>
                    Extracurricular Excellence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">From sports to arts and community service, we offer a wide range of activities to help students develop their talents and interests.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-navy-800">Upcoming Events</h2>
              <p className="text-gray-600 text-lg">
                Join us for exciting events that bring our school community together.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="p-3 bg-navy-100 rounded-full mr-4">
                      <Calendar className="h-6 w-6 text-navy-800" />
                    </div>
                    Open House
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Join us on May 15th for our annual Open House. Tour the campus, meet teachers, and learn about our programs.</p>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 transition-colors duration-300">
                    Register <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="p-3 bg-navy-100 rounded-full mr-4">
                      <Calendar className="h-6 w-6 text-navy-800" />
                    </div>
                    Science Fair
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Our students showcase their innovative projects at the Science Fair on June 5th. All are welcome to attend!</p>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 transition-colors duration-300">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="p-3 bg-navy-100 rounded-full mr-4">
                      <Calendar className="h-6 w-6 text-navy-800" />
                    </div>
                    Sports Day
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Cheer on our athletes at the annual Sports Day on July 10th. A day of friendly competition and school spirit!</p>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 transition-colors duration-300">
                    View Schedule <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Student Life Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-navy-800">Student Life at Star Classic</h2>
              <p className="text-gray-600 text-lg">
                Experience a vibrant and enriching educational journey that goes beyond the classroom.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <Image 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
                    alt="Students participating in a group project" 
                    width={500} 
                    height={300} 
                    className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-navy-800">Collaborative Learning</h3>
                <p className="text-gray-600 text-lg">Our students engage in hands-on, project-based learning that fosters creativity and teamwork.</p>
              </div>
              <div className="group">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <Image 
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754" 
                    alt="Students performing in a school play" 
                    width={500} 
                    height={300} 
                    className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-navy-800">Arts & Culture</h3>
                <p className="text-gray-600 text-lg">We celebrate creativity through various artistic and cultural activities throughout the year.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-navy-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join our community of learners and discover the opportunities that await you at Star Classic English Medium High School.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};