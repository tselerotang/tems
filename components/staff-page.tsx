'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Calendar, FileText, Users, Mail, Phone } from 'lucide-react'

export function StaffPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Staff Portal</h1>
          <p className="text-xl">Resources and information for Thetsane English Medium School staff.</p>
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
                  Staff Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Access academic calendar, meetings, and events schedule.</p>
                <Button variant="outline">View Calendar</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 text-blue-600" />
                  Forms & Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Download important forms and teaching resources.</p>
                <Button variant="outline">Access Resources</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 text-blue-600" />
                  Staff Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Access your school email account.</p>
                <Button variant="outline">Login to Email</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Staff Portal */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-blue-800">Staff Portal</h2>
              <p className="mb-4">Access all your teaching resources and administrative tools in one place.</p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>Submit grades and reports</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>Access lesson planning tools</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>View class schedules</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>Communicate with parents</span>
                </li>
              </ul>
              <Button>Login to Portal</Button>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
                alt="Teacher at desk"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Professional Development</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Book className="mr-2 text-blue-600" />
                  Training Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Explore upcoming workshops, seminars, and professional development courses.</p>
                <Button variant="outline">View Opportunities</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 text-blue-600" />
                  Mentorship Program
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Join our mentorship program to grow professionally and support colleagues.</p>
                <Button variant="outline">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">IT Support</h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <h3 className="font-semibold text-xl mb-4">Need Technical Assistance?</h3>
                  <p className="mb-4">Contact our IT support team for help with any technical issues.</p>
                  <div className="flex items-center justify-center space-x-4">
                    <Phone className="text-blue-600" />
                    <span>+266 5555 9999</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <Mail className="text-blue-600" />
                    <span>support@thetsane.edu.ls</span>
                  </div>
                  <Button className="mt-4">Submit Support Ticket</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
} 