import Link from 'next/link'

interface ProductCardProps {
  id: number
  name: string
  price: string
  image: string
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-xl">
      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden bg-white">
        <div className="flex h-full w-full items-center justify-center p-4">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex h-64 w-32 items-center justify-center rounded-lg bg-gray-200 text-gray-400">
              No Image
            </div>
          )}
        </div>
        
      </div>
      
      {/* Content */}
      <div className="p-5 text-center">
        <h4 className="mb-3 text-lg font-bold text-gray-800 truncate">{name}</h4>
        
        {/* Price */}
        <p className="mb-4 text-xl font-semibold text-gray-900">{price}</p>
        
        {/* Button */}
        <Link href={`/products/${id}`}>
          <button className="w-full rounded-lg bg-gray-900 py-2.5 px-6 font-semibold text-white transition-colors duration-200 hover:bg-gray-800">
            View Details
          </button>
        </Link>
      </div>
    </div>
  )
}
