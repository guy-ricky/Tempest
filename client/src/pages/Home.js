import React from 'react'
import HERO from '../assets/decor.jpg'
import COOK from '../assets/kit.png'
import SET from '../assets/dinner.png'
import TEA from '../assets/tea.png'
import RACK from '../assets/dishrack.png'
import KITC from '../assets/tree.jpg'
import ORG from '../assets/orga.png'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { FaShippingFast } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { CiCreditCard1 } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { TfiGift } from "react-icons/tfi";

const Home = () => {
  return (
    <>
    <section className='w-[85%] mx-auto flex items-center pt-[200px] pb-10 md:w-[90%]'>
      <div className='shadow-2xl shadow-black w-full h-auto rounded-md'>
        <div className='grid grid-cols-2'>

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
              className='w-full h-full'
             >
              <SwiperSlide>
              <div className='relative'>
              <img src={HERO} alt='hero' className='object-cover rounded-md'/>         
          <div className='absolute top-[10%] left-[5%] rounded drop-shadow-lg z-0 p-4'>
            <h4 className='text-md font-medium mb-5 text-[#bf4800]'>HOME ELEGANCE</h4>
            <h5 className='text-3xl font-bold mt-8'>Seasonal Decor.</h5>
            <p className='mt-4 text-sm font-medium text-[#131921]'>From as low as Kshs. 2500.<br/> Get this and more exclusive offers.</p>
            <Link className='mt-8 ml-8 bg-[#232f3e] text-white hover:text-[#232f3e] hover:font-medium py-[13px] px-[33px] rounded-3xl hover:bg-[#febd69]'>Shop Now</Link>
          </div>
          </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className='relative'>
              <img src={KITC} alt='hero' className='object-cover rounded-md'/>         
          <div className='absolute top-[10%] left-[5%] rounded drop-shadow-lg z-0 p-4'>
            <h4 className='text-md font-medium mb-5 text-[#bf4800]'>ELEVATE YOUR SPACE.</h4>
            <h5 className='text-3xl font-bold mt-8'>Special Sale.</h5>
            <p className='mt-4 text-sm font-medium text-[#131921]'>Explore our curated collection, <br/> starting from just Kshs. 2500.</p>
            <Link className='mt-8 ml-8 bg-[#232f3e] text-white hover:text-[#232f3e] hover:font-medium py-[13px] px-[33px] rounded-3xl hover:bg-[#febd69]'>Shop Now</Link>
          </div>
          </div>
              </SwiperSlide>
       

          </Swiper>

          <div className='grid gap-y-3 gap-x-2 grid-cols-2 p-3'>
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
    <section className=' flex items-center bg-gray-200 '>
      <div className='items-center w-[92%] mx-auto'>      
      <div className='mt-4 flex space-x-14 items-center h-12 mb-4'>
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

      <div className='mt-4 flex space-x-0 items-center h-auto mb-4 bg-white rounded-md'>
        
        <Link to="/dinnersets" className='bg-white hover:shadow-2xl hover:shadow-black hover:rounded-md'>
        <div className='flex items-center gap-1 w-56 h-36 rounded-md border border-gray-300'>         
          <div className='grid gap-1 w-full pl-4'>
            <h1 className='font-bold text-xs'>Dinner Sets</h1>
            <h1 className='text-xs'>24 sets.</h1>
          </div>
          <div className='w-2/3 h-auto px-2'>
            <img src={SET} alt="set"/>
          </div>
        </div>
        </Link>
     
        <Link to="/dinnersets" className=' bg-white hover:shadow-2xl hover:shadow-black hover:rounded-md'>
        <div className='flex items-center gap-1 w-56 h-36 rounded-md border border-gray-300'>         
          <div className='grid gap-1 w-full pl-4'>
            <h1 className='font-bold text-xs'>Dish Racks</h1>
            <h1 className='text-xs'>23 pieces.</h1>
          </div>
          <div className='w-2/3 h-auto px-2'>
            <img src={RACK} alt="set"/>
          </div>
        </div>
        </Link>

        <Link to="/dinnersets" className='bg-white hover:shadow-2xl hover:shadow-black hover:rounded-md'>
        <div className='flex items-center gap-1 w-56 h-36 rounded-md border border-gray-300'>         
          <div className='grid gap-1 w-full pl-4'>
            <h1 className='font-bold text-xs'>Tea Sets</h1>
            <h1 className='text-xs'>14 sets.</h1>
          </div>
          <div className='w-2/3 h-auto px-2'>
            <img src={TEA} alt="set"/>
          </div>
        </div>
        </Link>

        <Link to="/dinnersets" className='bg-white hover:shadow-2xl hover:shadow-black hover:rounded-md'>
        <div className='flex items-center gap-1 w-56 h-36 rounded-md border border-gray-300 '>         
          <div className='grid gap-1 w-full pl-4'>
            <h1 className='font-bold text-xs'>Cooking Sets</h1>
            <h1 className='text-xs'>19 sets.</h1>
          </div>
          <div className='w-full h-auto px-2'>
            <img src={COOK} alt="set"/>
          </div>
        </div>
        </Link>

        <Link to="/dinnersets" className='bg-white hover:shadow-2xl hover:shadow-black hover:rounded-md'>
        <div className='flex items-center gap-1 w-56 h-36 rounded-md  border border-gray-300'>         
          <div className='grid gap-1 w-full pl-4'>
            <h1 className='font-bold text-xs'>Organizers</h1>
            <h1 className='text-xs'>50 pieces.</h1>
          </div>
          <div className='w-full h-auto px-2'>
            <img src={ORG} alt="set"/>
          </div>
        </div>
        </Link>

      </div>
      </div>
    </section>

   
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
               <IoMdClose />
          ) : (
            <FaBars/>
          )}
        </IconButton>
    </>
  )
}

export default Home