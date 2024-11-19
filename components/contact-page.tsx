'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with Thetsane English Medium School.</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-800">Get In Touch</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="flex items-start space-x-4 pt-6">
                    <Phone className="text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p>Main Office: +266 5555 1234</p>
                      <p>Admissions: +266 5555 5678</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start space-x-4 pt-6">
                    <Mail className="text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p>General Inquiries: info@thetsane.edu.ls</p>
                      <p>Admissions: admissions@thetsane.edu.ls</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start space-x-4 pt-6">
                    <MapPin className="text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Address</h3>
                      <p>123 Education Street</p>
                      <p>Thetsane, Maseru</p>
                      <p>Lesotho</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start space-x-4 pt-6">
                    <Clock className="text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Office Hours</h3>
                      <p>Monday - Friday: 7:30 AM - 4:30 PM</p>
                      <p>Saturday: 8:00 AM - 12:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <Input placeholder="John" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <Input placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input placeholder="+266 5555 1234" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <Input placeholder="How can we help you?" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea 
                        placeholder="Type your message here..." 
                        className="min-h-[150px]"
                      />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Find Us</h2>
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.794454604731!2d27.4834!3d-29.3167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDE5JzAwLjEiUyAyN8KwMjknMDAuMiJF!5e0!3m2!1sen!2s!4v1635959562000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
} 