import Image from 'next/image'

interface CategoryCardProps {
  title: string
  subtitle: string
  image: string
  imagePosition?: 'left' | 'right'
  isLarge?: boolean
}

export default function CategoryCard({ title, subtitle, image, imagePosition = 'left', isLarge = false }: CategoryCardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl ${
      isLarge ? 'min-h-[500px] lg:min-h-[580px]' : 'min-h-[280px]'
    }`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {image && (
          <Image 
            src={image} 
            alt={title} 
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20 group-hover:from-black/65 transition-all duration-300"></div>
      </div>
      
      {/* Content */}
      <div className={`relative h-full flex flex-col justify-end ${isLarge ? 'p-8 md:p-12' : 'p-6 md:p-8'}`}>
        <div className="text-center transform group-hover:translate-y-[-5px] transition-transform duration-300">
          <h3 className={`font-bold mb-3 text-white uppercase leading-tight drop-shadow-lg ${
            isLarge ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
          }`}>{title}</h3>
          <a href="#" className="inline-block text-white text-sm md:text-base font-semibold bg-[#1253e0] hover:bg-[#0d3fb8] px-6 py-2.5 rounded-full transition-all duration-200 shadow-lg">
            {subtitle}
          </a>
        </div>
      </div>
    </div>
  )
}
