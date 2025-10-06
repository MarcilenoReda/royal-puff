import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FaAward, FaLeaf, FaHeart, FaUsers, FaRocket, FaShieldAlt } from 'react-icons/fa'

export default function AboutUsPage() {
  return (
    <main className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Royal Puff</h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Crafting premium e-liquids with passion, precision, and an unwavering commitment to excellence since our inception.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Royal Puff was born from a simple yet powerful vision: to create the finest e-liquids that deliver 
                  an unparalleled vaping experience. What started as a passion project between two friends has evolved 
                  into a premium brand trusted by vapers worldwide.
                </p>
                <p>
                  We believe that vaping is more than just an alternative – it's a lifestyle, a community, and an art form. 
                  Every bottle we craft represents our dedication to quality, innovation, and the pursuit of the perfect flavor profile.
                </p>
                <p>
                  From our carefully sourced ingredients to our meticulous blending process, every step in our journey 
                  reflects our commitment to excellence and our respect for the vaping community.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl text-gray-400 mb-4">🏭</div>
                  <p className="text-gray-600 font-medium">Our Premium Manufacturing Facility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do, from product development to customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl text-gray-900 mb-4">
                <FaAward />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                We use only the finest ingredients and maintain the highest manufacturing standards to ensure every bottle meets our exacting quality criteria.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl text-gray-900 mb-4">
                <FaLeaf />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Natural Ingredients</h3>
              <p className="text-gray-600">
                Our commitment to natural, high-grade ingredients ensures pure, authentic flavors that deliver a clean and satisfying vaping experience.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl text-gray-900 mb-4">
                <FaHeart />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Passion Driven</h3>
              <p className="text-gray-600">
                Every blend is crafted with love and attention to detail, reflecting our genuine passion for creating exceptional vaping experiences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl text-gray-900 mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Focus</h3>
              <p className="text-gray-600">
                We're more than a brand – we're part of the vaping community, listening to feedback and continuously improving our products.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl text-gray-900 mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly push boundaries, experimenting with new flavors and techniques to bring you the most exciting vaping experiences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl text-gray-900 mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety First</h3>
              <p className="text-gray-600">
                Your safety is our priority. All our products undergo rigorous testing and comply with the highest industry safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Founders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The visionary duo behind Royal Puff, bringing together expertise, passion, and a shared dream of excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Fady Emad */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <div className="text-6xl text-gray-500">👨‍💼</div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-2 rounded-full">
                  <span className="font-semibold">Co-Founder</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Fady Emad</h3>
              <p className="text-gray-600 mb-4 font-medium">Co-Founder & CEO</p>
              <p className="text-gray-700 leading-relaxed">
                With a background in business development and a passion for innovation, Fady brings strategic vision 
                and leadership to Royal Puff. His commitment to quality and customer satisfaction drives our company's 
                growth and success in the competitive e-liquid market.
              </p>
            </div>
            
            {/* Marcileno Reda */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <div className="text-6xl text-gray-500">👨‍🔬</div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-2 rounded-full">
                  <span className="font-semibold">Co-Founder</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Marcileno Reda</h3>
              <p className="text-gray-600 mb-4 font-medium">Co-Founder & Master Blender</p>
              <p className="text-gray-700 leading-relaxed">
                Marcileno is the creative force behind our exceptional flavor profiles. With an expert palate and 
                deep understanding of flavor chemistry, he crafts each blend with precision and artistry, ensuring 
                every Royal Puff product delivers an unforgettable vaping experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl leading-relaxed mb-8">
              "To revolutionize the vaping experience by creating premium e-liquids that combine exceptional quality, 
              innovative flavors, and uncompromising safety standards, while building a community of passionate vapers 
              who share our commitment to excellence."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                <p className="text-gray-300">Unique Flavors</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">50K+</div>
                <p className="text-gray-300">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">5★</div>
                <p className="text-gray-300">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Join the Royal Puff Family</h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the difference that passion, quality, and innovation make. Discover your perfect flavor today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/products" 
                className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg"
              >
                Explore Our Products
              </a>
              <a 
                href="/contact-us" 
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-900 hover:text-white transition-colors duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// Generate metadata for SEO
export const metadata = {
  title: 'About Us - Royal Puff Vapes | Premium E-Liquids',
  description: 'Learn about Royal Puff, founded by Fady Emad and Marcileno Reda. Discover our story, values, and commitment to creating premium e-liquids with exceptional quality and innovative flavors.',
}
