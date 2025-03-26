'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Heart, Palette, BookOpen, Users } from 'lucide-react'

export function StudentLifePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-800/80"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529686342540-1b43aec0df75')] bg-no-repeat bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl py-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">Student Life</h1>
            <p className="text-xl text-white font-medium leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              Discover the vibrant community and enriching experiences at Star Classic EMH.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-navy-800">Life Beyond Academics</h2>
              <p className="mb-4">At Star Classic English Medium High School, we believe in nurturing well-rounded individuals through a rich variety of extracurricular activities and programs.</p>
              <p className="mb-4">Our students have opportunities to explore their interests, develop new skills, and build lasting friendships through various clubs, sports, and cultural activities.</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">View Calendar of Events</Button>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1529686342540-1b43aec0df75"
                alt="Students participating in activities"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-navy-800">Student Activities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="mr-2 text-orange-500" />
                  Sports
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Soccer</li>
                  <li>Basketball</li>
                  <li>Athletics</li>
                  <li>Netball</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="mr-2 text-orange-500" />
                  Arts & Culture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Drama Club</li>
                  <li>Choir</li>
                  <li>Art Club</li>
                  <li>Cultural Dance</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 text-orange-500" />
                  Academic Clubs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Debate Club</li>
                  <li>Science Club</li>
                  <li>Math Olympiad</li>
                  <li>Book Club</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Leadership */}
      <section className="py-12 bg-navy-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-navy-800">Student Leadership</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 text-orange-500" />
                  Student Council
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Our student council plays a vital role in school governance and organizing student activities. Members develop leadership skills while representing their peers.</p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">Learn About Elections</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="mr-2 text-orange-500" />
                  Community Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Students engage in various community service projects, developing social responsibility and making a positive impact in our community.</p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">View Projects</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-navy-800">Student Life Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc"
              alt="Sports activities"
              width={300}
              height={300}
              className="rounded-lg shadow-lg w-full h-[200px] object-cover hover:shadow-xl transition-shadow duration-300"
            />
            <Image
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc"
              alt="Arts performance"
              width={300}
              height={300}
              className="rounded-lg shadow-lg w-full h-[200px] object-cover hover:shadow-xl transition-shadow duration-300"
            />
            <Image
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f"
              alt="Community service"
              width={300}
              height={300}
              className="rounded-lg shadow-lg w-full h-[200px] object-cover hover:shadow-xl transition-shadow duration-300"
            />
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              alt="Academic activities"
              width={300}
              height={300}
              className="rounded-lg shadow-lg w-full h-[200px] object-cover hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-navy-800 text-white py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Get Involved!</h2>
          <p className="mb-8">Join our vibrant community and make the most of your school experience.</p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">View Activities Calendar</Button>
        </div>
      </section>
    </div>
  )
} 