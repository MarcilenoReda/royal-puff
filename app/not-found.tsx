import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                Go Home
              </button>
            </Link>
            <Link href="/products">
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-200">
                Browse Products
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}

export const metadata = {
  title: '404 - Page Not Found | Royal Puff Vapes',
  description: 'The page you are looking for could not be found.',
}
