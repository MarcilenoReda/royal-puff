import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import products from '@/data/products.json'

interface ProductDetailPageProps {
  params: {
    id: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const productId = parseInt(params.id)
  const product = products.find(p => p.id === productId)

  if (!product) {
    notFound()
  }

  // Default values for products without extended details
  const defaultDescription = `Experience the premium quality of ${product.name}. This carefully crafted e-liquid delivers exceptional flavor and satisfaction with every puff.`
  const defaultCategory = "Premium E-Liquid"
  const defaultNicotine = "3mg, 6mg, 12mg"
  const defaultVgPg = "70/30"
  const defaultSize = "30ml"
  const defaultFeatures = ["Premium Quality", "Smooth Throat Hit", "Rich Flavor", "Long Lasting"]

  return (
    <main className="bg-white min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-gray-900 transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-lg">
              <div className="flex h-full w-full items-center justify-center p-8">
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-full w-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="flex h-96 w-48 items-center justify-center rounded-lg bg-gray-200 text-gray-400">
                    No Image Available
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
                {(product as any).category || defaultCategory}
              </p>
            </div>

            <div className="text-3xl font-bold text-gray-900">
              {product.price}
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                {(product as any).description || defaultDescription}
              </p>
            </div>

            {/* Product Specifications */}
            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Specifications</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-medium text-gray-500">Nicotine Strength</span>
                  <p className="text-gray-900 font-medium">{(product as any).nicotine || defaultNicotine}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">VG/PG Ratio</span>
                  <p className="text-gray-900 font-medium">{(product as any).vg_pg || defaultVgPg}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Bottle Size</span>
                  <p className="text-gray-900 font-medium">{(product as any).size || defaultSize}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Category</span>
                  <p className="text-gray-900 font-medium">{(product as any).category || defaultCategory}</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
              <div className="grid grid-cols-2 gap-3">
                {((product as any).features || defaultFeatures).map((feature: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-6">
              <button className="w-full bg-gray-900 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg">
                Add to Cart
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                <Link href="/contact-us">
                  <button className="w-full border-2 border-gray-900 text-gray-900 py-3 px-6 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-200">
                    Contact Us
                  </button>
                </Link>
                <Link href="/products">
                  <button className="w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:border-gray-400 hover:text-gray-900 transition-colors duration-200">
                    Back to Products
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== productId)
              .map(relatedProduct => (
                <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
                  <div className="group cursor-pointer">
                    <div className="aspect-square rounded-lg overflow-hidden bg-white border border-gray-200 mb-4 group-hover:shadow-lg transition-shadow duration-300">
                      <div className="flex h-full w-full items-center justify-center p-4">
                        {relatedProduct.image ? (
                          <img 
                            src={relatedProduct.image} 
                            alt={relatedProduct.name} 
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="flex h-32 w-16 items-center justify-center rounded bg-gray-200 text-gray-400 text-xs">
                            No Image
                          </div>
                        )}
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 font-medium">{relatedProduct.price}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProductDetailPageProps) {
  const productId = parseInt(params.id)
  const product = products.find(p => p.id === productId)
  
  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.name} - Royal Puff Vapes`,
    description: (product as any).description || `Premium ${product.name} e-liquid available at Royal Puff Vapes. High quality vaping products with exceptional flavor.`,
  }
}
