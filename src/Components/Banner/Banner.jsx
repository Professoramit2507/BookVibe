import React from 'react';
import bookimage from '../Imgaes/pngwing 1.png';

const Banner = () => {
  return (
    <div className="bg-[#F3F3F3] rounded-2xl border border-gray-200 mx-auto mt-10 mb-10 max-w-[1100px] px-6 py-10 md:px-12 md:py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10 shadow-sm">
      
      {/* Left Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Books to freshen up <br /> your bookshelf
        </h1>

        <button className="mt-6 bg-[#23BE0A] hover:bg-green-600 cursor-pointer text-white text-sm md:text-base font-semibold rounded-lg px-6 py-3 transition-all duration-300 shadow-md">
          View The List
        </button>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end">
        <img
          src={bookimage}
          alt="Book cover"
          className="w-40 sm:w-52 md:w-64 lg:w-72 drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
