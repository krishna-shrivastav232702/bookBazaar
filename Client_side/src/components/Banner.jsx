import React from "react";
import BannerCard from "../BannerCard/BannerCard";

const Banner = () => {
    return (
        <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
            <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
                {/* left side */}
                <div className="space-y-6 md:w-1/2">
                    <h2 className="text-5xl font-bold leading-tight text-black">Elevate Your Shelf.<br/> <span className="text-blue-700">Explore Exceptional Books</span></h2>
                    <p className="md:w-4/5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab aliquam quaerat asperiores minima maiores accusantium facilis ea, corrupti excepturi. Laudantium.
                        Lorem ipsum dolor sit amet.
                    </p>
                    <div>
                        <input type="search" name="search" id="search" placeholder="Search a book" className="py-2 px-10 rounded-s-sm outline-none "  />
                        <button className="bg-red-600 px-6 py-2 text-white font-medium hover:bg-blue-700 transition-all ease-in duration-200">Search</button>
                    </div>
                </div>
                {/* Right side */}
                <div>
                    <BannerCard/>
                </div>
            </div>
        </div>
    )
}

export default Banner;