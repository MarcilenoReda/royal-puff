
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CategoryCard from '@/components/CategoryCard'
import ProductCard from '@/components/ProductCard'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Side - Large Card */}
            <CategoryCard 
              title="TOBACCO CAFÉ COLLECTION" 
              subtitle="View Category"
              image="/images/tobaccocafe.jpg" 
              imagePosition="left"
              isLarge={true}
            />
            
            {/* Right Side - Grid with 3 cards */}
            <div className="grid grid-cols-1 gap-6">
              {/* Top Card - Award Winning E-Liquids */}
              <CategoryCard 
                title="TOBACCO BUTTER COLLECTION" 
                subtitle="View Products"
                image="/images/Tobacco butter30.jpg" 
                imagePosition="right"
                isLarge={false}
              />
              
              {/* Bottom Row - Two Cards Side by Side */}
              <div className="grid grid-cols-2 gap-6">
                {/* Disposable Devices */}
                <CategoryCard 
                  title="MANGO KIWI COLLECTION" 
                  subtitle="View Products"
                  image="/images/mangokiwi.jpg" 
                  imagePosition="left"
                  isLarge={false}
                />
                
                {/* Contact */}
                <CategoryCard 
                  title="TOBACCO BISCUITS COLLECTION" 
                  subtitle="View Products"
                  image="/images/tobaccobis.jpg" 
                  imagePosition="right"
                  isLarge={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">FEATURED PRODUCTS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ProductCard 
              name="TOBACCO BUTTER" 
              price="125L.E" 
              image="/images/Tobacco butter30.jpg"
            />
            <ProductCard 
              name="TOBACCO CAFÉ" 
              price="125L.E" 
              image="/images/tobaccocafe.jpg"
            />
            <ProductCard 
              name="MANGO KIWI" 
              price="125L.E" 
              image="/images/mangokiwi.jpg"
            />
            <ProductCard 
              name="TOBACCO BISCUITS" 
              price="125L.E" 
              image="/images/tobaccobis.jpg"
            />
          </div>
        </div>
      </section>

      {/* Join the Family / Wholesale Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Join the Family */}
            <div className="relative bg-white p-12 text-center gold-gradient overflow-hidden">
              <div className="absolute right-0 bottom-0 h-full w-64 opacity-30">
                <div className="h-full flex items-end justify-end">
                  <div className="text-9xl text-yellow-600">🌳</div>
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">JOIN THE FAMILY!</h3>
                <p className="mb-6">
                  Sign up to receive exclusive offers, product updates, and vaping tips delivered straight to your inbox!
                </p>
                <button className="btn-primary">Subscribe Now</button>
              </div>
            </div>
            
            {/* Wholesale */}
            <div className="relative bg-white p-12 text-center overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-64 opacity-20">
                <div className="h-full flex items-center justify-start">
                  <div className="text-9xl text-yellow-600">📦</div>
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Royal Puff WHOLESALE</h3>
                <p className="mb-6">
                  Interested in carrying Royal Puff products? Join our wholesale program today!
                </p>
                <button className="btn-primary">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">BEST SELLERS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ProductCard 
              name="TOBACCO BUTTER" 
              price="125L.E" 
              image="/images/Tobacco butter30.jpg"
            />
            <ProductCard 
              name="TOBACCO CAFÉ" 
              price="125L.E" 
              image="/images/tobaccocafe.jpg"
            />
            <ProductCard 
              name="MANGO KIWI" 
              price="125L.E" 
              image="/images/mangokiwi.jpg"
            />
            <ProductCard 
              name="TOBACCO BISCUITS" 
              price="125L.E" 
              image="/images/tobaccobis.jpg"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
