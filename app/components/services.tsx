
'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Sparkles, MapPin, ShoppingBag, MessageCircle } from 'lucide-react'

interface Service {
  id: string
  title: string
  description: string
  features: string[]
  image: string
  icon: React.ReactNode
  whatsappMessage: string
}

const services: Service[] = [
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    description: 'Premium natural skincare and organic beauty products for your wellness journey',
    features: ['Organic skincare products', 'Natural beauty treatments', 'Wellness consultations', 'Premium cosmetics'],
    image: 'https://cdn.abacus.ai/images/ef5c7028-98e9-4c13-be2f-7201481b439c.png',
    icon: <Sparkles className="h-8 w-8" />,
    whatsappMessage: 'Hello! I\'m interested in your health & beauty services. Can you tell me more?'
  },
  {
    id: 'travel',
    title: 'Travel Services',
    description: 'Create unforgettable travel experiences to beautiful Caribbean destinations',
    features: ['Flight bookings', 'Hotel reservations', 'Tour packages', 'Travel insurance'],
    image: 'https://thumbs.dreamstime.com/b/beautiful-tropical-sunset-kaanapali-beach-maui-hawaii-warm-tropical-sunset-over-white-sands-kaanapali-beach-maui-367523009.jpg',
    icon: <MapPin className="h-8 w-8" />,
    whatsappMessage: 'Hi! I want to plan a trip and need help with travel arrangements. What packages do you offer?'
  },
  {
    id: 'food-distribution',
    title: 'Food Distribution',
    description: 'Quality food distribution services featuring fresh, authentic Haitian ingredients',
    features: ['Fresh produce delivery', 'Bulk food distribution', 'Catering services', 'Specialty ingredients'],
    image: 'https://cdn.abacus.ai/images/2c8908e7-d683-4d6e-9c98-421457cb4638.png',
    icon: <ShoppingBag className="h-8 w-8" />,
    whatsappMessage: 'Hello! I need information about your food distribution services. What products do you offer?'
  }
]

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.2 }
    )

    const cards = document.querySelectorAll('.service-card')
    cards.forEach(card => observerRef.current?.observe(card))

    return () => observerRef.current?.disconnect()
  }, [])

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/56965169459?text=${encodedMessage}`, '_blank')
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-6 py-2 mb-6">
            <Sparkles className="h-5 w-5 text-orange-600" />
            <span className="text-orange-800 font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Premium Services for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From natural beauty products to travel experiences and quality food distribution - 
            we provide excellence in every service for our community.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`service-card bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer ${
                visibleCards.has(service.id) ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Icon Overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 text-orange-600">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="h-2 w-2 bg-orange-500 rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* WhatsApp CTA */}
                <button
                  onClick={() => handleWhatsAppClick(service.whatsappMessage)}
                  className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors duration-300 group"
                >
                  <MessageCircle className="h-5 w-5" />
                  Get Info via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience Excellence?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Join thousands of satisfied customers who trust Bel Naturels for premium services. 
              Contact us today for personalized assistance!
            </p>
            <button
              onClick={() => handleWhatsAppClick('Hello Bel Naturels! I\'m interested in learning more about all your services. Can we discuss?')}
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Start Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
