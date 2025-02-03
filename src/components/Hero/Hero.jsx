import React from 'react'
import HeroImg from '../../assets/dumbell.png'

const Hero = () => {
    return (
        <>
            <section>
                <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
                    {/* brand info */}
                    <div className='flex flex-col justify-center py-14 md:py-0 font-playfair'>
                        <div className='text-center md:text-left space-y-6'>
                            <h1 className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal'>Gym gives you a perfect <span className='text-primary'>Health</span>{" "}</h1>
                            <p className='text-gray-600 xl:max-w-[500px]'>It is along established fact that s reader will be by
                                readable content of a page when are the best product.
                            </p>
                            {/* button section */}
                            <div className='flex justify-center gap-8 md:justify-start'>
                                <button className='border border-primary px-5 py-1 rounded hover:bg-primary hover:text-white duration-300 font-semibold text-primary'>Order Now</button>
                                <button className='bg-gray-600 text-white px-5 py-1 rounded duration-300 font-semibold shadow shadow-gray-600'>Watch Now</button>
                            </div>
                        </div>
                    </div>
                    {/* hero image */}
                    <div className='flex justify-center items-center'>
                        <img src={HeroImg} alt='image' className='w-[350px] md:w-[550px] xl:w-[700px]' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero