import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//react icons

import { FaStar } from "react-icons/fa6"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


//from flow-bite-react
import { Avatar } from "flowbite-react";

const Review = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    // Fixed the `onAutoplayTimeLeft` function: no JSX return, just updates progress
    const onAutoplayTimeLeft = (swiper, time, progress) => {
        if (progressCircle.current) {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
        }
        if (progressContent.current) {
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    // JSX should be returned from the `Review` component function
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
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
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft} // Updated to correct callback function
                    className="mySwiper"
                >
                    <SwiperSlide className='py-6 shadow-xl px-1 bg-white rounded-lg border'>
                        <div className='flex flex-col items-center'>
                            <div >
                            <Avatar rounded className='mb-6'/>
                            </div>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* text */}
                            <div className='flex flex-col items-center'>
                                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, nulla dicta asperiores deserunt quis tempore aut voluptas perferendis. Facilis in modi doloribus tenetur laudantium doloremque dolorum praesentium placeat voluptatem ducimus.</p>
                               
                                <h5 className='text-lg font-medium'>Jensen Huang</h5>
                                <p className='text-base'>CEO, NVIDIA</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-6 shadow-xl px-1 bg-white rounded-lg border '>
                        <div className='flex flex-col items-center'>
                            <div >
                            <Avatar img="data:image/jpeg;base64,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" alt="avatar of Jese" rounded className='w-10 mb-6' />
                            </div>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* text */}
                            <div className='flex flex-col items-center'>
                                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, nulla dicta asperiores deserunt quis tempore aut voluptas perferendis. Facilis in modi doloribus tenetur laudantium doloremque dolorum praesentium placeat voluptatem ducimus.</p>
                               
                                <h5 className='text-lg font-medium'>Mukesh Ambani</h5>
                                <p className='text-base'>Chairman, Reliance Limited</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-6 shadow-xl px-1 bg-white rounded-lg border'>
                        <div className='flex flex-col items-center'>
                            <div >
                            <Avatar img="https://imageio.forbes.com/specials-images/imageserve/63dc1b4b3ae18f6e229afec8/Sam-Altman--OpenAI-s-CEO/0x0.jpg?format=jpg&crop=1440,1440,x0,y0,safe&width=1440" alt="avatar of Jese" rounded className='w-10 mb-6' />
                            </div>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* text */}
                            <div className='flex flex-col items-center'>
                                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, nulla dicta asperiores deserunt quis tempore aut voluptas perferendis. Facilis in modi doloribus tenetur laudantium doloremque dolorum praesentium placeat voluptatem ducimus.</p>
                               
                                <h5 className='text-lg font-medium'>Sam Altman</h5>
                                <p className='text-base'>CEO, OpenAi</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide className='py-6 shadow-xl px-1 bg-white rounded-lg border'>
                        <div className='flex flex-col items-center'>
                            <div >
                            <Avatar  rounded className='w-10 mb-6' />
                            </div>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* text */}
                            <div className='flex flex-col items-center'>
                                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, nulla dicta asperiores deserunt quis tempore aut voluptas perferendis. Facilis in modi doloribus tenetur laudantium doloremque dolorum praesentium placeat voluptatem ducimus.</p>
                               
                                <h5 className='text-lg font-medium'>Sundar Pichai</h5>
                                <p className='text-base'>CEO, Google</p>
                            </div>
                        </div>
                    </SwiperSlide>
                   
                </Swiper>
            </div>
        </div>
    );
};

export default Review;
