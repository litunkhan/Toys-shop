/* eslint-disable no-unused-vars */
import React from 'react';
import banner from './bannerimage.webp'
const Offsell = () => {
    return (
        <div className='my-16'>
              <section className="bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${banner})`}}>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl leading-10 font-extrabold text-gray-200 sm:text-5xl sm:leading-none md:text-6xl">
            30% off on all latest baby toys!
          </h2>
          <p className="mt-3 text-xl text-black font-bold sm:mt-4 sm:text-2xl">
            Limited time offer. Grab the perfect toys for your little ones now!
          </p>
          <button className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 sm:w-auto">
            Buy Now
          </button>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Offsell;