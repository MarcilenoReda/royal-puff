import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function ContactUsPage() {
  return (
    <main className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to experience premium e-liquids? We're here to help with any questions about our products or wholesale opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Let's Connect</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Choose your preferred way to reach us. We're always ready to help!
              </p>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="group p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FaPhone className="text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Phone</h3>
                      <a href="tel:+201112423995" className="text-gray-600 hover:text-blue-600 transition-colors text-lg">
                        +20 111 2423 995
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="group p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-green-200">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FaWhatsapp className="text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">WhatsApp</h3>
                      <a 
                        href="https://wa.me/201112423995" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-green-600 transition-colors text-lg"
                      >
                        +20 111 2423 995
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-purple-200">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FaEnvelope className="text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Email</h3>
                      <a href="mailto:info@royalpuff.com" className="text-gray-600 hover:text-purple-600 transition-colors text-lg">
                        royalpuffstore@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="group p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-red-200">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FaMapMarkerAlt className="text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Address</h3>
                      <p className="text-gray-600 text-lg">
                        123 Street<br />
                        Cairo, Egypt
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+201112423995"
                  className="group flex items-center justify-center space-x-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <FaPhone className="group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">Call Now</span>
                </a>
                <a 
                  href="https://wa.me/201112423995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <FaWhatsapp className="group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Send us a Message</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 bg-gray-50 hover:bg-white focus:bg-white shadow-sm"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 bg-gray-50 hover:bg-white focus:bg-white shadow-sm"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1253e0] focus:border-transparent outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1253e0] focus:border-transparent outline-none transition-colors"
                    placeholder="+20 123 456 7890"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1253e0] focus:border-transparent outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="wholesale">Wholesale Information</option>
                    <option value="product">Product Question</option>
                    <option value="support">Customer Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1253e0] focus:border-transparent outline-none transition-colors resize-vertical"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:ring-4 focus:ring-blue-200 outline-none"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Business Hours</h2>
            <p className="text-lg text-gray-600 mb-12">We're here when you need us</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">M-F</span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Monday - Friday</h3>
                <p className="text-gray-600 text-lg">9:00 AM - 8:00 PM</p>
              </div>
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Saturday</h3>
                <p className="text-gray-600 text-lg">10:00 AM - 6:00 PM</p>
              </div>
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Sunday</h3>
                <p className="text-gray-600 text-lg">Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
