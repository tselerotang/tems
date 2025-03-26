'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-800/80"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')] bg-no-repeat bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl py-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">About Our School</h1>
            <p className="text-xl text-white font-medium leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              Discover our rich history, values, and commitment to excellence in education.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-navy-800">Our History</h2>
              <p className="mb-4">Founded in 1995, Star Classic English Medium High School has been a cornerstone of educational excellence in Lesotho for over 25 years.</p>
              <p className="mb-4">What started as a small community school has grown into one of the region&apos;s most respected educational institutions, serving hundreds of students from diverse backgrounds.</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Learn More About Our Journey</Button>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643"
                alt="Historic photo of school"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-orange-500 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-navy-800">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p>To provide quality education that empowers students to become critical thinkers, lifelong learners, and responsible global citizens.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-500 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-navy-800">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p>To be the leading educational institution in Lesotho, recognized for academic excellence, character development, and innovative teaching methods.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-navy-800">School Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="p-1 rounded-full bg-gradient-to-r from-navy-800 to-orange-500 mx-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                    alt="Principal"
                    width={300}
                    height={300}
                    className="rounded-full w-32 h-32 object-cover"
                  />
                </div>
                <CardTitle className="text-center mt-4 text-navy-800">Dr. Sarah Johnson</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-orange-500 font-semibold">Principal</p>
                <p className="text-center mt-2">Leading our school with over 20 years of educational experience.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="p-1 rounded-full bg-gradient-to-r from-navy-800 to-orange-500 mx-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
                    alt="Vice Principal"
                    width={300}
                    height={300}
                    className="rounded-full w-32 h-32 object-cover"
                  />
                </div>
                <CardTitle className="text-center mt-4 text-navy-800">Mr. David Mokoena</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-orange-500 font-semibold">Vice Principal</p>
                <p className="text-center mt-2">Overseeing academic excellence and student development.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="p-1 rounded-full bg-gradient-to-r from-navy-800 to-orange-500 mx-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98"
                    alt="Head of Administration"
                    width={300}
                    height={300}
                    className="rounded-full w-32 h-32 object-cover"
                  />
                </div>
                <CardTitle className="text-center mt-4 text-navy-800">Mrs. Lisa Thabo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-orange-500 font-semibold">Head of Administration</p>
                <p className="text-center mt-2">Managing school operations and community relations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-navy-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-navy-800">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="group hover:border-orange-500 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-center group-hover:text-orange-500">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">Striving for the highest standards in everything we do.</p>
              </CardContent>
            </Card>
            <Card className="group hover:border-orange-500 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-center group-hover:text-orange-500">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">Maintaining strong moral principles and honesty.</p>
              </CardContent>
            </Card>
            <Card className="group hover:border-orange-500 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-center group-hover:text-orange-500">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">Embracing new ideas and methods in education.</p>
              </CardContent>
            </Card>
            <Card className="group hover:border-orange-500 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-center group-hover:text-orange-500">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">Fostering a supportive and inclusive environment.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
} 