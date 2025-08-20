
'use client'

import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook } from 'lucide-react'

const contactInfo = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: 'WhatsApp',
    details: 'Available 24/7',
    action: 'Message Us',
    href: 'https://wa.me/56965169459',
    primary: true
  },
  {
    icon: <Facebook className="h-6 w-6" />,
    title: 'Facebook',
    details: 'Follow our updates',
    action: 'Visit Page',
    href: 'https://www.facebook.com/profile.php?id=61573944415547',
    primary: false
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: 'Email',
    details: 'info@belnaturels.com',
    action: 'Send Email',
    href: 'mailto:info@belnaturels.com',
    primary: false
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: 'Service Areas',
    details: 'Haitian Community',
    action: 'View Coverage',
    href: '#services',
    primary: false
  }
]

const quickActions = [
  {
    title: 'Book Health & Beauty Consultation',
    message: 'Hello! I would like to book a consultation for health & beauty services. What are your available times?'
  },
  {
    title: 'Plan a Trip',
    message: 'Hi! I want to plan a vacation and need help with travel arrangements. Can you help me with packages and pricing?'
  },
  {
    title: 'Food Distribution Services',
    message: 'Hello! I\'m interested in your food distribution services. Can you tell me about available products and delivery options?'
  },
  {
    title: 'General Information',
    message: 'Hi Bel Naturels! I\'d like to learn more about all your services. Can we schedule a time to discuss?'
  }
]

export default function Contact() {
  const [selectedAction, setSelectedAction] = useState<string | null>(null)

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/56965169459?text=${encodedMessage}`, '_blank')
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-900 to-amber-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <MessageCircle className="h-5 w-5 text-white" />
            <span className="text-white font-medium">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Contact us today for personalized service and let us help you with all your needs. 
            Our team is here to provide exceptional support!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Contact Methods</h3>
            
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : '_self'}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`block p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  contact.primary 
                    ? 'bg-green-500 hover:bg-green-600 shadow-lg' 
                    : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${contact.primary ? 'bg-white/20' : 'bg-orange-500'}`}>
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{contact.title}</h4>
                    <p className="text-white/80">{contact.details}</p>
                  </div>
                  <div className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                    {contact.action}
                  </div>
                </div>
              </a>
            ))}

            {/* Business Hours */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-orange-500 rounded-full">
                  <Clock className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-lg">Service Hours</h4>
              </div>
              <div className="space-y-2 text-white/80">
                <div className="flex justify-between">
                  <span>WhatsApp Support</span>
                  <span>24/7 Available</span>
                </div>
                <div className="flex justify-between">
                  <span>Consultations</span>
                  <span>Mon-Sat: 9AM-8PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Travel Planning</span>
                  <span>Mon-Fri: 9AM-6PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Food Distribution</span>
                  <span>Mon-Sat: 8AM-6PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Quick Actions</h3>
            
            <div className="space-y-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleWhatsAppClick(action.message)}
                  onMouseEnter={() => setSelectedAction(action.title)}
                  onMouseLeave={() => setSelectedAction(null)}
                  className="w-full p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 text-left group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-5 w-5 text-green-400" />
                      <span className="font-medium">{action.title}</span>
                    </div>
                    <div className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                      Send WhatsApp →
                    </div>
                  </div>
                  {selectedAction === action.title && (
                    <div className="mt-2 text-sm text-white/80 animate-fade-in">
                      Preview: "{action.message.substring(0, 100)}..."
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-bold mb-3">Start Your Journey Today!</h4>
              <p className="text-white/90 mb-4">
                Join our community of satisfied customers. Contact us now for personalized service and exceptional experiences.
              </p>
              <button
                onClick={() => handleWhatsAppClick('Hello Bel Naturels! I\'m ready to start my journey with your services. Can we discuss how you can help me?')}
                className="w-full bg-white text-green-600 py-3 px-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Contact Us via WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-white/70 text-lg">
            <strong>Mezanmi!</strong> We're here to serve our community with love and excellence. 
            <br />
            <em>Toujou Bel, Toujou Naturels</em> - Always Beautiful, Always Natural ‼️
          </p>
        </div>
      </div>
    </section>
  )
}
