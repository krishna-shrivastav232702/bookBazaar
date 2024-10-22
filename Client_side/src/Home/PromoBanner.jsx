import React from 'react'
import { Link } from 'react-router-dom'
import bookPic from '../assets/awardBooks.png'

const PromoBanner = () => {
    return (
        <div className='mt-4 py-6 bg-teal-100 px-4 lg:px-24'>
            <div className='flex flex-col md:flex-row justify-between items-center '>
                <div className='md:w-1/2'>
                    <h2 className='text-4xl font-bold mb-4 leading-snug'>2024 National Book Awards For Fiction</h2>
                    <Link to="https://www.goodreads.com/choiceawards/best-fiction-books-2023" className='mt-4 block'><button className='bg-red-600 text-white font-semibold px-5 py-2 rounded hover:bg-blue-700 transition-all duration-300'>Click Here</button></Link>
                </div>

                <div>
                    <img src={bookPic} className='w-80'/>
                </div>
            </div>
        </div>
    )
}

export default PromoBanner