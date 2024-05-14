import React from 'react'
import VerticalTabs from './Vertical';


const Featured = () => {
  return (
    <section className=' bg-gray-300 mx-auto'>
        <div className='px-8 pt-8'>
            <h1 className='text-[#131921] text-center font-bold text-md'>Featured Products</h1>
            </div>          
        <div className='flex flex-row flex-wrap px-8 py-4 gap-4 justify-between'>
          <VerticalTabs/>       
        </div>
    </section>
  )
}

export default Featured