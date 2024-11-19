'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ClipboardCheck, GraduationCap, Users } from 'lucide-react'

export function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Admissions</h1>
          <p className="text-xl">Join our community of learners and begin your journey to excellence.</p>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Application Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ClipboardCheck className="mr-2 text-blue-600" />
                  Step 1
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Submit Application</h3>
                <p>Complete the online application form and submit required documents.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 text-blue-600" />
                  Step 2
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Assessment</h3>
                <p>Schedule and complete entrance assessment and interview.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="mr-2 text-blue-600" />
                  Step 3
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Decision</h3>
                <p>Receive admission decision within two weeks of assessment.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 text-blue-600" />
                  Step 4
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Enrollment</h3>
                <p>Complete enrollment process and join our school community.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-blue-800">Admission Requirements</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>Completed application form</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>Previous academic records</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>Birth certificate or passport</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>Two recent passport-sized photographs</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                  <span>Letter of recommendation (for transfers)</span>
                </li>
              </ul>
              <Button className="mt-6" variant="outline">Download Requirements Checklist</Button>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1516979187457-637abb4f9353"
                alt="Student studying"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & Fees */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Tuition & Fees</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Primary Level</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-4">M15,000</div>
                <ul className="space-y-2">
                  <li>Grades 1-6</li>
                  <li>All core subjects</li>
                  <li>Basic materials</li>
                  <li>Sports activities</li>
                </ul>
                <Button className="w-full mt-4">Apply Now</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Junior Secondary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-4">M18,000</div>
                <ul className="space-y-2">
                  <li>Forms A-C</li>
                  <li>Extended curriculum</li>
                  <li>Lab facilities</li>
                  <li>Sports & clubs</li>
                </ul>
                <Button className="w-full mt-4">Apply Now</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Senior Secondary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-4">M22,000</div>
                <ul className="space-y-2">
                  <li>Forms D-E</li>
                  <li>Advanced courses</li>
                  <li>Career guidance</li>
                  <li>University prep</li>
                </ul>
                <Button className="w-full mt-4">Apply Now</Button>
              </CardContent>
            </Card>
          </div>
          <p className="text-center mt-8 text-sm text-gray-600">* Fees are per term. Additional costs may apply for specific programs and activities.</p>
        </div>
      </section>

      {/* Financial Aid */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Financial Aid Available</h2>
          <p className="mb-8 max-w-2xl mx-auto">We believe that quality education should be accessible to all deserving students. Merit-based scholarships and need-based financial aid are available.</p>
          <Button variant="outline">Learn About Financial Aid</Button>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="mb-8">Our admissions team is here to help guide you through the process.</p>
          <Button size="lg" variant="secondary">Contact Admissions</Button>
        </div>
      </section>
    </div>
  )
} 