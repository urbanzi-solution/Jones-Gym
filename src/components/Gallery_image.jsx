export default function GalleryImage() {
  return (
    <div className="p-4 md:p-6 lg:p-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
      {/* Gallery Item 1 */}
      <a className="relative group block overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.02]" href="#">
        <img 
          className="w-full aspect-[3/4] object-cover" 
          src="/images/user1.jpg" 
          alt="User profile" 
        />
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
          <p className="text-white font-medium text-xs md:text-sm">#123</p>
          <p className="text-white font-bold text-sm md:text-base truncate">User1</p>
        </div>
      </a>

      {/* Gallery Item 2 */}
      <a className="relative group block overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.02]" href="#">
        <img 
          className="w-full aspect-[3/4] object-cover" 
          src="/images/user2.jpg" 
          alt="User profile" 
        />
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
          <p className="text-white font-medium text-xs md:text-sm">#124</p>
          <p className="text-white font-bold text-sm md:text-base truncate">User2</p>
        </div>
      </a>

      <a className="relative group block overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.02]" href="#">
        <img 
          className="w-full aspect-[3/4] object-cover" 
          src="/images/user3.jpg" 
          alt="User profile" 
        />
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
          <p className="text-white font-medium text-xs md:text-sm">#124</p>
          <p className="text-white font-bold text-sm md:text-base truncate">User2</p>
        </div>
      </a>

      <a className="relative group block overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.02]" href="#">
        <img 
          className="w-full aspect-[3/4] object-cover" 
          src="/images/user4.jpg" 
          alt="User profile" 
        />
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
          <p className="text-white font-medium text-xs md:text-sm">#124</p>
          <p className="text-white font-bold text-sm md:text-base truncate">User2</p>
        </div>
      </a>

      {/* Add more items as needed */}
    </div>
  )
}