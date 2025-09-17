import React from 'react'
import Accenture from "../assets/accenture_logo.svg"
import Adobe from "../assets/adobe_logo.svg"
import Microsoft from "../assets/microsoft_logo.svg"
import Paypal from "../assets/paypal_logo.svg"
import Walmart from "../assets/walmart_logo.svg"

export const Companies = () => {
  return (
    <div className='md:pt-24 pt-12'>
        <p className='text-base text-center font-extrabold'>Trusted by learners from</p>
        <div className='flex items-center justify-center flex-wrap gap-6 md:gap-16 md:mt-8 mt-5 md:mb-20'>
            <img src={Accenture} alt="accenture" className='w-20 md:w-28' />
            <img src={Adobe} alt="adobe" className='w-20 md:w-28' />
            <img src={Microsoft} alt="microsoft" className='w-20 md:w-28' />
            <img src={Paypal} alt="paypal" className='w-20 md:w-28' />
            <img src={Walmart} alt="walmart" className='w-20 md:w-28' />
        </div>
    </div>
  )
}
