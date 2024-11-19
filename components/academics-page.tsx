'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Award, Users, Microscope, Globe } from 'lucide-react'

export function AcademicsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Academic Programs</h1>
          <p className="text-xl">Excellence in education through comprehensive and innovative learning.</p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-blue-800">Our Curriculum</h2>
              <p className="mb-4">Our curriculum is designed to challenge and inspire students, combining traditional academic excellence with modern educational approaches.</p>
              <p className="mb-4">We follow the Cambridge International Curriculum, preparing students for IGCSE and A-Level examinations.</p>
              <Button variant="outline">Download Curriculum Guide</Button>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45"
                alt="Students in classroom"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Departments */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Academic Departments</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Book className="mr-2 text-blue-600" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>English Language and Literature</li>
                  <li>Sesotho Studies</li>
                  <li>French (Optional)</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Microscope className="mr-2 text-blue-600" />
                  Sciences
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Biology</li>
                  <li>Chemistry</li>
                  <li>Physics</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="mr-2 text-blue-600" />
                  Humanities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>History</li>
                  <li>Geography</li>
                  <li>Religious Studies</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Special Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 text-blue-600" />
                  Advanced Placement Program
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Our AP program offers college-level courses to high-achieving students, providing them with advanced academic challenges and potential college credits.</p>
                <Button variant="outline">Learn More</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 text-blue-600" />
                  Learning Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Personalized support for students who need additional help or have different learning styles, ensuring every student reaches their full potential.</p>
                <Button variant="outline">View Details</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-800">Academic Excellence</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p>IGCSE Pass Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <p>Students Achieving A*-B Grades</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p>University Acceptance Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Academic Community?</h2>
          <p className="mb-8">Experience excellence in education at Thetsane English Medium School.</p>
          <Button size="lg" variant="secondary">Apply Now</Button>
        </div>
      </section>
    </div>
  )
} 