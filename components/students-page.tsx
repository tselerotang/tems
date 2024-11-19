'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Calendar, Users, GraduationCap, Award } from 'lucide-react'

export function StudentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Student Portal</h1>
          <p className="text-xl">Your gateway to academic resources and student life at Thetsane.</p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Quick Links</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 text-blue-600" />
                  Class Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">View your daily class schedule and upcoming events.</p>
                <Button variant="outline">View Schedule</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Book className="mr-2 text-blue-600" />
                  Assignments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Access and submit your assignments online.</p>
                <Button variant="outline">View Assignments</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="mr-2 text-blue-600" />
                  Grades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Check your academic progress and grades.</p>
                <Button variant="outline">View Grades</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Resources */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-blue-800">Academic Resources</h2>
              <p className="mb-4">Access a wide range of learning resources to support your studies.</p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>Online Library Resources</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>Study Guides and Materials</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>Past Examination Papers</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>Tutorial Videos</span>
                </li>
              </ul>
              <Button>Access Resources</Button>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Students studying"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Student Services */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Student Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 text-blue-600" />
                  Counseling Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Access academic and personal counseling support.</p>
                <Button variant="outline">Book Appointment</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 text-blue-600" />
                  Career Guidance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Get help with career planning and university applications.</p>
                <Button variant="outline">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Student Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Clubs & Societies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Join various clubs and societies to explore your interests.</p>
                <Button variant="outline">Browse Clubs</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sports Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Participate in competitive sports and stay active.</p>
                <Button variant="outline">View Sports</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Events Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Stay updated with school events and activities.</p>
                <Button variant="outline">View Calendar</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="mb-8">Our student support team is here to assist you with any questions or concerns.</p>
          <Button size="lg" variant="secondary">Contact Support</Button>
        </div>
      </section>
    </div>
  )
} 