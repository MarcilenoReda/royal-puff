import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import products from '@/data/products.json'

export const metadata = {
  title: 'All Products - Royal Puff Vapes | Premium E-Liquids Collection',
  description: 'Browse our complete collection of premium e-liquids. From tobacco blends to fruity flavors, find your perfect vaping experience with Royal Puff.',
  metadataBase: new URL('https://royalpuff.com'),
}

export default function ProductsPage() {
  return (
    <main className="bg-white">
      <Header />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">All Products</h1>
          <p className="text-lg text-gray-600 text-center mb-12">Browse our full collection of premium e-liquids.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
