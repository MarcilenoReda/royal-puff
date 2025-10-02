import { FaStar } from 'react-icons/fa'
import Image from 'next/image'

interface ProductCardProps {
  name: string
  price: string
  image: string
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg transition-shadow duration-200 hover:shadow-lg bg-white border border-gray-200">
      {/* Image Container with Light Overlay */}
      <div className="relative h-72 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center p-6">
          {image ? (
            <Image 
              src={image} 
              alt={name} 
              width={250} 
              height={288} 
              className="object-contain h-full w-auto group-hover:scale-102 transition-transform duration-200"
            />
          ) : (
            <div className="w-32 h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 text-center bg-white">
        <h4 className="font-bold text-lg mb-2 text-gray-900">{name}</h4>
        
        {/* Star Rating */}
        <div className="flex justify-center space-x-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-sm" />
          ))}
        </div>
        
        {/* Price */}
        <p className="text-lg font-semibold text-gray-800 mb-4">{price}</p>
        
        {/* Button */}
        <button className="w-full bg-gray-900 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-150">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
