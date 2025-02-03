import React from 'react'

const Banner = ({image,title,subtitle}) => {
  return (
    <div className='container'>
        <div className='bg-[#f9f9f9] grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14'>
            {/* banner image section */}
            <div>
                <img src={image} alt='img' className='w-[300px] md:max-w-[500px] lg:min-w-[600px] h-full object-cover' />
            </div>
            {/* banner text section */}
            <div className='flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px] '>
                <h1 className='text-2xl lg:text-4xl font-bold capitalize font-playfair'>{title}</h1>
                <p>{subtitle}</p>
                <div>
                    <button className='bg-primary text-white py-1 px-3'>Explore More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner