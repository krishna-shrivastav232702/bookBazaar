import React from 'react'
import { Link } from 'react-router-dom'


const FavBook = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className=' px-24 py-24 w-3/5  my-20 grid grid-cols-3  grid-rows-3  gap-3'>
        <div className='w-full  col-span-1 row-span-1  '>
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1710195716i/203163900.jpg" className="w-full h-full object-cover" />
        </div>
        <div className=' col-span-1 row-span-1 border-2'>
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1701980900i/61431922.jpg" className="w-full h-full object-cover" />
        </div>
        <div className=' col-span-1 row-span-1 border-2 '>
          <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1711665192l/62335396._SY475_.jpg" className="w-full h-full object-cover" />
        </div>
        <div className=' col-span-1 row-span-1 border-2 '>
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1702057336i/123257687.jpg" className="w-full h-full object-cover" />
        </div>
        <div className=' col-span-1 row-span-1 border-2 '>
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1678470633i/75396525.jpg" className="w-full h-full object-cover" />
        </div>
        <div className=' col-span-1 row-span-1 border-2 '>
          <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1696271265l/195790940._SY475_.jpg" className="w-full h-full object-cover" />
        </div>
        <div className=' col-span-1 row-span-1 border-2 '>
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1621347398i/57693172.jpg" className="w-full h-full object-cover" />
        </div>
        <div className=' col-span-1 row-span-1 border-2 '>
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1593013000i/53288434.jpg" className="w-full h-full object-cover" />
        </div>
        <div className=' col-span-1 row-span-1 border-2 '>
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1585632445i/52843028.jpg" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className='mx-20 my-20 md:w-1/2 space-y-6'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find your Favorite
          <span className='text-blue-700'> Book Here!</span>
        </h2>
        <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga dolorem itaque, dolores maxime architecto magnam soluta necessitatibus sequi ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, saepe.</p>
        {/* stats */}
        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
          <div>
            <h3 className='text-3xl font-bold '>800+</h3>
            <p className='text-base'>Book Listing</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold '>5000+</h3>
            <p className='text-base'>Registered Users</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold '>1200+</h3>
            <p className='text-base'>PDF Downloads</p>
          </div>
        </div>
        <Link to="/shop" className='mt-8 block'><button className='bg-red-600 text-white font-semi-bold px-5 py-2 rounded hover:bg-blue-700 transition-all duration-300'>Explore More</button></Link>
      </div>
    </div>
  )
}

export default FavBook