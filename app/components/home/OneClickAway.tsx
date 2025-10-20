import React from "react";
import RadixDialog from "../radix-ui/RadixDialog";
import GetStarted from "../get-started/GetStarted";

const OneClickAway = () => {
  return (
    <div className="bg-nor-secondary md:p-[120px_72px] p-[100px_20px] sm:[100px_40px] flex flex-col gap-5 -mt-[1px]">
      <div className="basis-full sm:basis-[60%] flex flex-col gap-1 w-fit text-white uppercase">
        <div className="text-[14px] ">WHAT WE CAN DO FOR YOU</div>
        <div className="sm:text-[38px] text-[30px] md:text-[48px] font-druk font-medium tracking-[2px]">
          Driven by Passion.
        </div>
      </div>
      <div className="sm:basis-[40%] basis-full self-end w-fit bg-[#afd6e8] rounded-[10px]">
        <RadixDialog
          trigger={
            <div className="cursor-pointer hover:scale-95 duration-300 ease-in-out transition-transform active:scale-95  p-[30px]  text-nor-secondary font-semibold flex justify-start items-center ">
              <div className="sm:max-w-[90%] max-w-full w-full md:max-w-[70%] text-[26px] sm:text-[36px]">
                One click away to Start!
              </div>
            </div>
          }
          children={<GetStarted />}
        />
      </div>
    </div>
  );
};

export default OneClickAway;
