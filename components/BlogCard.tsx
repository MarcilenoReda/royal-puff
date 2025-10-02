interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  image: string
  bgColor?: string
}

export default function BlogCard({ title, excerpt, date, image, bgColor = 'bg-black' }: BlogCardProps) {
  return (
    <div className="bg-white overflow-hidden hover-scale">
      <div className="relative">
        <div className={`w-full h-48 ${bgColor} flex items-center justify-center text-white font-bold`}>
          Blog Image
        </div>
        <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs">{date}</span>
      </div>
      <div className="p-6">
        <h4 className="font-bold mb-2">{title}</h4>
        <p className="text-sm text-gray-600 mb-4">{excerpt}</p>
        <a href="#" className="text-sm underline">Read More</a>
      </div>
    </div>
  )
}
