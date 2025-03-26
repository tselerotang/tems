'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Award, Users, Microscope, Globe } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AcademicsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-800/80"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7')] bg-no-repeat bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl py-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">Academic Programs</h1>
            <p className="text-xl text-white font-medium leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              Discover our comprehensive academic offerings designed to prepare students for success.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Approach */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-navy-800">Our Academic Approach</h2>
              <p className="mb-4">At Star Classic EMH, we believe in providing a well-rounded education that combines academic rigor with practical skills and character development.</p>
              <p className="mb-4">Our curriculum is designed to challenge students at every level, fostering critical thinking, creativity, and a love for lifelong learning.</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-300">Our Teaching Philosophy</Button>
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

      {/* Curriculum Levels */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-navy-800">Curriculum Levels</h2>
          
          <Tabs defaultValue="primary" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-navy-100">
                <TabsTrigger value="primary" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">Primary School</TabsTrigger>
                <TabsTrigger value="middle" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">Middle School</TabsTrigger>
                <TabsTrigger value="high" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">High School</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="primary" className="border-2 rounded-lg p-6 border-orange-500">
              <h3 className="text-2xl font-bold mb-4 text-navy-800">Primary School (Grades 1-6)</h3>
              <p className="mb-4">Our primary school program focuses on building strong foundations in literacy, numeracy, and critical thinking skills.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-navy-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-800">English Language Arts</h4>
                </div>
                <div className="bg-navy-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-800">Mathematics</h4>
                </div>
                <div className="bg-navy-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-800">Science</h4>
                </div>
                <div className="bg-navy-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-800">Social Studies</h4>
                </div>
                <div className="bg-navy-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-800">Arts & Music</h4>
                </div>
                <div className="bg-navy-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-800">Physical Education</h4>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="middle" className="border-2 rounded-lg p-6 border-orange-500">
              <h3 className="text-2xl font-bold mb-4 text-navy-800">Middle School (Grades 7-9)</h3>
              <p className="mb-4">The middle school program builds on the primary foundations while introducing more specialized subjects and deeper exploration of concepts.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-navy-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-800">Advanced English</h4>
                </div>
                <div className="bg-navy-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-800">Pre-Algebra & Algebra</h4>
                </div>
                <div className="bg-navy-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-800">Life Sciences</h4>
                </div>
                <div className="bg-navy-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-800">World Geography</h4>
                </div>
                <div className="bg-navy-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-800">Computer Science</h4>
                </div>
                <div className="bg-navy-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-800">Foreign Languages</h4>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="high" className="border-2 rounded-lg p-6 border-orange-500">
              <h3 className="text-2xl font-bold mb-4 text-navy-800">High School (Grades 10-12)</h3>
              <p className="mb-4">Our high school program prepares students for higher education with rigorous academic courses and college preparation.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-navy-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-800">Literature & Composition</h4>
                </div>
                <div className="bg-navy-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-800">Calculus & Statistics</h4>
                </div>
                <div className="bg-navy-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-800">Physics & Chemistry</h4>
                </div>
                <div className="bg-navy-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-800">World History</h4>
                </div>
                <div className="bg-navy-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-800">Advanced Computing</h4>
                </div>
                <div className="bg-navy-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-800">Economics & Business</h4>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="py-12 bg-navy-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-navy-800">Academic Excellence</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-navy-800">
                  <div className="bg-orange-500 p-2 rounded-full mr-3 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  Qualified Teachers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our faculty consists of experienced educators with advanced degrees in their fields, dedicated to student success.</p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-navy-800">
                  <div className="bg-orange-500 p-2 rounded-full mr-3 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>
                  </div>
                  Small Class Sizes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>We maintain low student-to-teacher ratios to ensure personalized attention and optimal learning environments.</p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-navy-800">
                  <div className="bg-orange-500 p-2 rounded-full mr-3 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                  </div>
                  Modern Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our school is equipped with state-of-the-art technology, science labs, and library resources to enhance learning.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Departments */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-navy-800">Academic Departments</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Book className="mr-2 text-navy-800" />
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
                  <Microscope className="mr-2 text-navy-800" />
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
                  <Globe className="mr-2 text-navy-800" />
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
      <section className="py-12 bg-navy-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-navy-800">Special Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 text-navy-800" />
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
                  <Users className="mr-2 text-navy-800" />
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

      {/* Call to Action */}
      <section className="bg-navy-700 text-white py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Academic Community?</h2>
          <p className="mb-8">Experience excellence in education at Star Classic English Medium High School.</p>
          <Button size="lg" variant="secondary">Apply Now</Button>
        </div>
      </section>
    </div>
  )
} 