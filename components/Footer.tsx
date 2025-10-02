import { FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">ABOUT US</h3>
            <p className="text-sm text-gray-300 mb-4">
              At Royal Puff we are passionate about delivering the finest vaping experience. 
              Our award-winning e-liquids are crafted with precision and care.
            </p>
            <div className="flex space-x-4">
              <FaFacebook className="cursor-pointer hover:text-[#1253e0] transition-colors" />
              <FaInstagram className="cursor-pointer hover:text-[#1253e0] transition-colors" />
              <FaYoutube className="cursor-pointer hover:text-[#1253e0] transition-colors" />
              <FaTiktok className="cursor-pointer hover:text-[#1253e0] transition-colors" />
              <FaLinkedin className="cursor-pointer hover:text-[#1253e0] transition-colors" />
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">CONTACT</h3>
            <p className="text-sm text-gray-300 mb-2">
              We&apos;d love to hear from you! Contact us for any questions or inquiries.
            </p>
            <p className="text-sm text-gray-300 mb-2">
              <strong>Address:</strong> Cairo, Egypt
            </p>
            <p className="text-sm text-gray-300 mb-2">
              <strong>Email:</strong> royalpuffstore@gmail.com
            </p>
            <p className="text-sm text-gray-300">
              <strong>Phone:</strong> +20 155 707 3339
            </p>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">SIGNUP FOR NEWSLETTER</h3>
            <p className="text-sm text-gray-300 mb-4">
              Sign up to receive the latest news, product updates, and exclusive offers from Ripe Vapes!
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-2 text-black border rounded-sm"
              />
              <button className=" rounded-sm bg-white text-black px-6 py-2 font-semibold hover:bg-gray-200 transition-colors">
                CLICK TO SIGNUP
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>
            © 2025 Royal Puff Marcileno reda . All rights reserved. | 
            <a href="#" className="underline ml-1">Privacy Policy</a> | 
            <a href="#" className="underline ml-1">Terms of Service</a>
          </p>
          <p className="mt-2">
            *This product is not intended for use by or sale to persons under the age of 21. 
            This product should be used only as directed on the label. It should not be used if you are pregnant or nursing. 
            Consult with a physician before use if you have a serious medical condition or use prescription medications. 
            A Doctor&apos;s advice should be sought before using this and any supplemental dietary product.
          </p>
        </div>
      </div>
    </footer>
  )
}
