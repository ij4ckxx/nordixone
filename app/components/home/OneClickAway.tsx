import React from 'react'

const OneClickAway = () => {
  return (
         <div className="bg-nor-secondary md:p-[120px_72px] p-[100px_20px] sm:[100px_40px] flex flex-col gap-5 -mt-[1px]">
        <div className="basis-full sm:basis-[60%] flex flex-col gap-1 w-fit text-white uppercase">
          <div className="text-[14px] ">WHAT WE CAN DO FOR YOU</div>
          <div className="sm:text-[38px] text-[30px] md:text-[48px] font-druk font-medium tracking-[2px]">
            Driven by Passion.
          </div>
        </div>
        <div className="sm:basis-[40%] basis-full self-end w-fit p-[30px] bg-[#afd6e8] text-nor-secondary font-semibold flex justify-start items-center rounded-[10px]">
          <div className="sm:max-w-[90%] max-w-full w-full md:max-w-[70%] text-[26px] sm:text-[36px]">
            One click away to Start!
          </div>
        </div>
      </div>

  )
}

export default OneClickAway
