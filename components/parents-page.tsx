'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Calendar, Bell, FileText, Users } from 'lucide-react'

export function ParentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Parents & Guardians</h1>
          <p className="text-xl">Supporting your child&apos;s educational journey at Thetsane.</p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Parent Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 text-blue-600" />
                  School Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Stay updated with important dates, events, and school holidays.</p>
                <Button variant="outline">View Calendar</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="mr-2 text-blue-600" />
                  Announcements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Access important school announcements and updates.</p>
                <Button variant="outline">View Updates</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 text-blue-600" />
                  Forms & Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Download necessary forms and school documents.</p>
                <Button variant="outline">Access Forms</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Parent Portal */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-blue-800">Parent Portal</h2>
              <p className="mb-4">Access your child&apos;s academic progress, attendance records, and communicate with teachers through our secure parent portal.</p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>View grades and progress reports</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>Track attendance and schedules</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>Message teachers directly</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>Access homework assignments</span>
                </li>
              </ul>
              <Button>Login to Portal</Button>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="Parent using laptop"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Parent Association */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Parent Association</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 text-blue-600" />
                  Get Involved
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Join our active parent community and contribute to school development through various initiatives and events.</p>
                <Button variant="outline">Join Association</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Book className="mr-2 text-blue-600" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li>Parent-Teacher Conference - March 15</li>
                  <li>Family Fun Day - April 2</li>
                  <li>Parent Workshop - April 20</li>
                </ul>
                <Button variant="outline">View All Events</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Need Support?</h2>
          <p className="mb-8">Our parent support team is here to help you navigate your child&apos;s educational journey.</p>
          <Button size="lg" variant="secondary">Contact Support</Button>
        </div>
      </section>
    </div>
  )
} 