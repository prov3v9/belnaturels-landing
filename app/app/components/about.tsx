
'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Heart, Users, Award, Clock } from 'lucide-react'

const stats = [
  { icon: <Users className="h-6 w-6" />, value: '1000+', label: 'Happy Customers' },
  { icon: <Award className="h-6 w-6" />, value: '3', label: 'Service Categories' },
  { icon: <Heart className="h-6 w-6" />, value: '100%', label: 'Natural Products' },
  { icon: <Clock className="h-6 w-6" />, value: '24/7', label: 'Customer Support' }
]

const values = [
  {
    title: 'Community First',
    description: 'We serve the Haitian community with pride, understanding your unique needs and cultural values.'
  },
  {
    title: 'Premium Quality',
    description: 'Only the finest natural products and services that meet our high standards of excellence.'
  },
  {
    title: 'Cultural Connection',
    description: 'Bridging cultures through authentic experiences and genuine community relationships.'
  },
  {
    title: 'Always Natural',
    description: 'Committed to natural, organic solutions that promote wellness and sustainability.'
  }
]

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const section = document.getElementById('about-section')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main About Content */}
        <div id="about-section" className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-6 py-2 mb-6">
              <Heart className="h-5 w-5 text-orange-600" />
              <span className="text-orange-800 font-medium">About Bel Naturels</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mezanmi! Welcome to Our Family
            </h2>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              At Bel Naturels, we believe in the power of community, natural beauty, and authentic experiences. 
              Our mission is simple: <strong>"Toujou Bel, Toujou Naturels"</strong> - Always Beautiful, Always Natural.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded with love for our Haitian community, we provide premium health & beauty products, 
              unforgettable travel experiences, and quality food distribution services. Every service we offer 
              is designed to celebrate our culture while meeting the highest standards of excellence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full text-orange-600 mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://cdn.abacus.ai/images/fd6e0ce6-6bcf-4630-81e5-bd5714ecff93.png"
                alt="Bel Naturels team - diverse Haitian community members"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Values & Promise
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These core values guide everything we do and every service we provide to our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission
            </h3>
            <p className="text-xl md:text-2xl leading-relaxed opacity-95">
              "To serve our Haitian community with premium natural products, exceptional travel experiences, 
              and quality food services while celebrating our culture and maintaining the highest standards of excellence. 
              We are committed to being <strong>Toujou Bel, Toujou Naturels</strong> in everything we do."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
