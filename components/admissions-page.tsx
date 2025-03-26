'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Calendar, Phone, Clock, Users } from 'lucide-react'

export function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-800/80"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644')] bg-no-repeat bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl py-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">Admissions</h1>
            <p className="text-xl text-white font-medium leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              Join our community of learners and begin your educational journey with us.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-navy-800">Begin Your Journey</h2>
              <p className="mb-4">At Star Classic English Medium High School, we welcome students from diverse backgrounds who are eager to learn and grow in a supportive environment.</p>
              <p className="mb-4">Our admissions process is designed to be straightforward and supportive, ensuring that families find the right fit for their children&apos;s educational needs.</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Apply Now</Button>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1581078426770-6d336e5de7bf"
                alt="Students walking in campus"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Process */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-navy-800">Our Admissions Process</h2>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
              <h3 className="font-bold text-navy-800 mb-2">Application</h3>
              <p className="text-sm">Complete and submit the online application form</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
              <h3 className="font-bold text-navy-800 mb-2">Documentation</h3>
              <p className="text-sm">Submit required documents including transcripts</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
              <h3 className="font-bold text-navy-800 mb-2">Assessment</h3>
              <p className="text-sm">Complete entrance assessments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">4</div>
              <h3 className="font-bold text-navy-800 mb-2">Interview</h3>
              <p className="text-sm">Family interview with admissions team</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">5</div>
              <h3 className="font-bold text-navy-800 mb-2">Decision</h3>
              <p className="text-sm">Receive admissions decision</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Levels */}
      <section className="py-12 bg-navy-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-navy-800">Grade Levels</h2>
          <Tabs defaultValue="primary" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white">
                <TabsTrigger value="primary" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                  Primary (Grades 1-6)
                </TabsTrigger>
                <TabsTrigger value="middle" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                  Middle (Grades 7-9)
                </TabsTrigger>
                <TabsTrigger value="high" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                  High School (Grades 10-12)
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="primary" className="border-2 rounded-lg p-6 border-orange-500 bg-white">
              <h3 className="text-2xl font-bold mb-4 text-navy-800">Primary School Admissions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold mb-2 text-navy-800">Requirements</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Completed application form</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Birth certificate</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Previous school records (if applicable)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Health records and immunization history</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-navy-800">Assessment</h4>
                  <p className="mb-4">Primary school applicants participate in age-appropriate assessments to evaluate readiness and placement.</p>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                    Download Primary Application Form
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="middle" className="border-2 rounded-lg p-6 border-orange-500 bg-white">
              <h3 className="text-2xl font-bold mb-4 text-navy-800">Middle School Admissions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold mb-2 text-navy-800">Requirements</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Completed application form</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Academic transcripts from previous 2 years</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Teacher recommendation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Health records and immunization history</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-navy-800">Assessment</h4>
                  <p className="mb-4">Middle school applicants complete assessments in English and Mathematics to determine appropriate placement.</p>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                    Download Middle School Application Form
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="high" className="border-2 rounded-lg p-6 border-orange-500 bg-white">
              <h3 className="text-2xl font-bold mb-4 text-navy-800">High School Admissions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold mb-2 text-navy-800">Requirements</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Completed application form</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Academic transcripts from previous 3 years</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Two teacher recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Personal essay</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-navy-800">Assessment</h4>
                  <p className="mb-4">High school applicants complete comprehensive assessments in core subjects and participate in an interview.</p>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                    Download High School Application Form
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Tuition and Fees */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-navy-800">Tuition and Fees</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-t-4 border-orange-500">
              <CardHeader className="text-center">
                <CardTitle className="text-navy-800">Primary School</CardTitle>
                <div className="text-3xl font-bold my-4 text-navy-800">₹ 38,000<span className="text-base font-normal">/year</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="text-orange-500 mr-2 h-5 w-5" />
                    <span>Tuition</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-orange-500 mr-2 h-5 w-5" />
                    <span>Textbooks</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-orange-500 mr-2 h-5 w-5" />
                    <span>Standard Supplies</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-orange-500 mr-2 h-5 w-5" />
                    <span>Facility Fees</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white">View Detailed Fees</Button>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-orange-500">
              <CardHeader className="text-center">
                <CardTitle className="text-navy-800">Middle School</CardTitle>
                <div className="text-3xl font-bold my-4 text-navy-800">₹ 45,000<span className="text-base font-normal">/year</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="text-orange-500 mr-2 h-5 w-5" />
                    <span>Tuition</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-orange-500 mr-2 h-5 w-5" />
                    <span>Textbooks</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-orange-500 mr-2 h-5 w-5" />
                    <span>Lab Fees</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-orange-500 mr-2 h-5 w-5" />
                    <span>Technology Access</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white">View Detailed Fees</Button>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-orange-500">
              <CardHeader className="text-center">
                <CardTitle className="text-navy-800">High School</CardTitle>
                <div className="text-3xl font-bold my-4 text-navy-800">₹ 52,000<span className="text-base font-normal">/year</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="text-orange-500 mr-2 h-5 w-5" />
                    <span>Tuition</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-orange-500 mr-2 h-5 w-5" />
                    <span>Textbooks</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-orange-500 mr-2 h-5 w-5" />
                    <span>Advanced Lab Access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-orange-500 mr-2 h-5 w-5" />
                    <span>College Counseling</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white">View Detailed Fees</Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">*Additional fees may apply for extracurricular activities, transportation, and meals. Financial aid and scholarships are available for qualifying families.</p>
            <Button variant="outline" className="border-orange-500 text-navy-800 hover:bg-orange-500 hover:text-white">Financial Aid Information</Button>
          </div>
        </div>
      </section>

      {/* Contact and Tours */}
      <section className="py-12 bg-navy-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-navy-800">Visit Our Campus</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="text-2xl text-navy-800">Schedule a Campus Tour</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">We invite prospective families to visit our campus and experience our dynamic learning environment firsthand.</p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-navy-800">Tour Days</h4>
                      <p>Tuesday and Thursday mornings, 9:00 AM to 11:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-navy-800">Open House Events</h4>
                      <p>Monthly on the first Saturday, 10:00 AM to 1:00 PM</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white">Book a Tour Now</Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="text-2xl text-navy-800">Contact Admissions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Our admissions team is here to guide you through the application process and answer any questions.</p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-navy-800">Phone</h4>
                      <p>+266 5555 1234 ext. 201</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-navy-800">Office Hours</h4>
                      <p>Monday to Friday, 8:00 AM to 4:00 PM</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white">Email Admissions Office</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-navy-800 text-white py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Application?</h2>
          <p className="max-w-2xl mx-auto mb-8">Join our community of learners and start your journey toward academic excellence and personal growth.</p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Apply Now</Button>
        </div>
      </section>
    </div>
  )
} 