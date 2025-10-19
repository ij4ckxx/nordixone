import React from 'react'
import AnimatedButton from '../form-comp/AnimatedButton'

const HomeBanner = () => {
  return (
    <div className="flex justify-center items-center home-page-banner min-h-[calc(100dvh-100px)]">
        {/*  first component  */}
        <div className="w-full sm:w-[80%] md:w-[80%] lg:w-[70%] xl:w-[80%] pt-[3rem] px-[1rem] flex flex-col text-center gap-2 text-white uppercase">
          <div className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-medium font-druk">
            Delivering Intelligence & Driving Innovation.
          </div>
          <div className="text-[1.5rem] sm:text-[2rem] lg:text-[2.4rem] font-medium font-druk">
            By building AI-led digital platforms
          </div>
          <div className="mt-5">
            <AnimatedButton className="w-fit">Contact Us</AnimatedButton>
          </div>
        </div>
      </div>
  )
}

export default HomeBanner
