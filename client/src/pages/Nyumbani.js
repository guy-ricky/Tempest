import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import KITC from '../assets/tree.jpg'
import HERO from '../assets/decor.jpg'
import COOK from '../assets/kit.png'
import SET from '../assets/dinner.png'
import TEA from '../assets/tea.png'
import RACK from '../assets/dishrack.png'
import { useMediaQuery } from '@react-hook/media-query';
import { FaShippingFast } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { CiCreditCard1 } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { TfiGift } from "react-icons/tfi";
import Featured from '../components/Featured';


const Nyumbani = () => {
    const matches = useMediaQuery('(min-width: 768px)')
  return (
    <>
    <section className='w-full mx-auto flex items-center mt-8 px-8'>
        <div className='shadow-2xl shadow-black w-full h-auto rounded-md mb-4'>
            <div className='flex md:grid grid-cols-2'>
            {matches ? (
                <Swiper
              modules={[Autoplay, EffectFade]}
              effect={'fade'}
              centeredSlides={true}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              className='hidden md:flex w-full h-full'
             >
              <SwiperSlide className='hidden md:flex'>
              <div className='relative h-72 hidden md:h-auto md:flex '>
              <img src={HERO} alt='hero' className='object-cover rounded-md h-72 md:h-auto'/>         
          <div className='absolute top-[10%] left-[5%] rounded drop-shadow-lg z-0 p-2 md:p-4'>
            <h4 className='text-md font-medium mb-5 text-[#bf4800]'>HOME ELEGANCE</h4>
            <h5 className='text-lg mt-1 font-bold md:text-3xl md:mt-8'>Seasonal Decor.</h5>
            <p className=' text-xs mt-6 sm:mt-4 sm:text-sm  font-medium text-[#131921]'>From as low as Kshs. 2500.<br/> Get this and more exclusive offers.</p>
            <Link className=' mt-10 sm:mt-8 sm:ml-8 bg-[#232f3e] text-white hover:text-[#232f3e] hover:font-medium py-[13px] px-[33px] rounded-3xl hover:bg-[#febd69]'>Shop Now</Link>
          </div>
          </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className='relative h-72 sm:h-auto'>
              <img src={KITC} alt='hero' className='object-cover rounded-md h-72 sm:h-auto'/>         
          <div className='absolute top-[10%] left-[5%] rounded drop-shadow-lg z-0 p-2 sm:p-4'>
            <h4 className='text-md font-medium mb-5 text-[#bf4800]'>ELEVATE YOUR SPACE.</h4>
            <h5 className='text-3xl font-bold mt-8'>Special Sale.</h5>
            <p className='mt-4 text-sm font-medium text-[#131921]'>Explore our curated collection, <br/> starting from just Kshs. 2500.</p>
            <Link className='mt-8 sm:ml-8 bg-[#232f3e] text-white hover:text-[#232f3e] hover:font-medium py-[13px] px-[33px] rounded-3xl hover:bg-[#febd69]'>Shop Now</Link>
          </div>
          </div>
              </SwiperSlide>     

          </Swiper>
            ):( <div className='relative h-72 sm:h-auto'>
            <img src={KITC} alt='hero' className='object-cover rounded-md h-72 sm:h-auto'/>         
        <div className='absolute top-[10%] left-[5%] rounded drop-shadow-lg z-0 p-2 sm:p-4'>
          <h4 className='text-md font-medium mb-5 text-[#bf4800]'>ELEVATE YOUR SPACE.</h4>
          <h5 className='text-3xl font-bold mt-8'>Special Sale.</h5>
          <p className='mt-4 text-sm font-medium text-[#131921]'>Explore our curated collection, <br/> starting from just Kshs. 2500.</p>
          <Link className='mt-8 sm:ml-8 bg-[#232f3e] text-white hover:text-[#232f3e] hover:font-medium py-[13px] px-[33px] rounded-3xl hover:bg-[#febd69]'>Shop Now</Link>
        </div>
        </div>)}

          <div className='hidden md:grid gap-y-3 gap-x-2 grid-cols-2 p-3'>
              <div className='grid grid-cols-2 bg-[#DADAD9] rounded-md h-37'>
              <div className=' z-0 p-4'>
            <h4 className='text-xs font-medium mb-5 text-[#bf4800]'>BEST SALE</h4>
            <h5 className='text-xs font-bold'>Dinner Sets.</h5>
            <p className='mt-4 text-xs font-medium text-[#131921]'>From as low as Kshs. 2500.</p>
           
          </div>
                <img src={SET} alt='hero2' className='w-32 h-32 mt-6'/>
              </div>
              
              <div className='grid grid-cols-2 bg-[#C0D8EC] rounded-md h-37'>
              <div className=' z-0 p-4'>
            <h4 className='text-xs font-medium mb-5 text-[#bf4800]'>NEW ARRIVALS</h4>
            <h5 className='text-xs font-bold'>Tea Sets.</h5>
            <p className='mt-4 text-xs font-medium text-[#131921]'>From as low as Kshs. 1500.</p>
           
          </div>
                <img src={TEA} alt='hero2' className='w-32 h-32 mt-6'/>
              </div>
              <div className='grid grid-cols-2 bg-[#BBC7CE] rounded-md h-37'>
              <div className=' z-0 p-4'>
            <h4 className='text-xs font-medium mb-5 text-[#bf4800]'>15% OFF</h4>
            <h5 className='text-xs font-bold'>Dish Racks.</h5>
            <p className='mt-4 text-xs font-medium text-[#131921]'>From as low as Kshs. 1500.</p>
           
          </div>
                <img src={RACK} alt='hero2' className='w-32 h-32 mt-6'/>
              </div>
             
              <div className='grid grid-cols-2 bg-[#95A3B3] rounded-md h-37'>
              <div className=' z-0 p-4'>
            <h4 className='text-xs font-medium mb-5 text-[#bf4800]'>SUPER SALE.</h4>
            <h5 className='text-xs font-bold'>Cooking-Pots.</h5>
            <p className='mt-4 text-xs font-medium text-[#131921]'>From as low as Kshs. 7500.</p>
           
          </div>
                <img src={COOK} alt='hero2' className='w-full h-32 mt-6'/>
              </div>
          </div>

            </div>
        </div>    
    </section>

    <section className='hidden lg:max-xl:flex items-center justify-between px-8 bg-gray-200'>
        <div className='mt-4 flex gap-14 items-center h-12 mb-4'>
        <div className='flex items-center gap-1'>
          <div><FaShippingFast className='text-2xl'/></div>
          <div className='grid gap-1 w-full'>
            <h1 className='font-bold text-xs'>Free Shipping</h1>
            <h1 className='text-xs'>From all orders over Kshs.10,000</h1>
          </div>
        </div>

        <div className='flex items-center gap-1'>
          <div><TfiGift className='text-2xl'/></div>
          <div className='grid gap-1'>
            <h1 className='font-bold text-xs'>Daily Surprise Offers</h1>
            <h1 className='text-xs'>Save up to 25% off</h1>
          </div>
        </div>

        <div className='flex items-center gap-1'>
          <div><BiSupport  className='text-2xl'/></div>
          <div className='grid gap-1'>
            <h1 className='font-bold text-xs'>Support 24/7</h1>
            <h1 className='text-xs'>Shop with an expert</h1>
          </div>
        </div>

        <div className='flex items-center gap-1'>
          <div><BiSolidOffer className='text-2xl'/></div>
          <div className='grid gap-1'>
            <h1 className='font-bold text-xs'>Affordable Prices</h1>
            <h1 className='text-xs'>Get retail prices</h1>
          </div>
        </div>

        <div className='flex items-center gap-1'>
          <div><CiCreditCard1 className='text-2xl'/></div>
          <div className='grid gap-1'>
            <h1 className='font-bold text-xs'>Secure Payments</h1>
            <h1 className='text-xs'>100% Protected Payments</h1>
          </div>
        </div>
      </div>

        </section>
        <Featured/>
    </>
  )
}

export default Nyumbani