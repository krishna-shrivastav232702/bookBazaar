import React, { useRef, useState,useContext } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { MdFavoriteBorder } from "react-icons/md"

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useDispatchFavorites } from '../components/FavoriteContext';
import { AuthContext } from "../contacts/AuthProvider";

import { FaCartShopping } from 'react-icons/fa6'

import { useDispatchCart, useCart } from './ContextReducer';

const BookCards = ({ books, headLine }) => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const dispatch = useDispatchFavorites();
    const { user } = useContext(AuthContext);

    // Fixed the `onAutoplayTimeLeft` function: no JSX return, just updates progress
    const onAutoplayTimeLeft = (swiper, time, progress) => {
        if (progressCircle.current) {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
        }
        if (progressContent.current) {
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };


    const handleFavorite = async (book) => {
        await dispatch({
            type: "ADD",
            id: book._id,
            title: book.bookTitle,
            author: book.authorName,
            image: book.imageURL,
        });
        alert("book added successfully");
        // navigate('/shop');
    };



    return (
        <div className='my-16 px-4 lg:px-24'>
            <h2 className='text-5xl text-center font-bold text-black my-5 mb-8'>{headLine}</h2>

            {/* cards */}
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    // centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft} // Updated to correct callback function
                    className="mySwiper"
                >
                    {
                        books.map(book => <SwiperSlide key={book._id}>
                            <Link to={`/book/${book._id}`}>
                                <div className='relative'>
                                    <img src={book.imageURL} />
                                    <div className='absolute top-2 right-1  p-2 rounded'>
                                        {user ? (<>
                                            <Link to="/favorite">
                                                <button className="bg-red-600 font-semibold text-white py-2 px-2 h-8 rounded hover:bg-blue-700 transition-all" onClick={() => handleFavorite(book)}><MdFavoriteBorder /></button>
                                            </Link>
                                        </>) :
                                            (<>
                                                <Link to="/login">
                                                    <button className="bg-red-600 font-semibold text-white py-2 px-2 h-8 rounded hover:bg-blue-700 transition-all" ><MdFavoriteBorder /></button>
                                                </Link>
                                            </>)
                                        }
                                    </div>
                                </div>
                                <div>
                                    <h3 className='font-bold text-xl'>{book.bookTitle}</h3>
                                    <p>{book.authorName}</p>
                                </div>
                            </Link>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default BookCards