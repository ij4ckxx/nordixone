"use client";
import * as Dialog from "@radix-ui/react-dialog";

import Image from "next/image";
import React from "react";

import { X } from "lucide-react";

interface CardProps {
  icon?: any;
  alt?: string;
  title?: string;
  content?: string;
}

interface GradientGridProps {
  productIdeas?: CardProps[];
}

interface GradientGridCardProps {
  card?: CardProps;
  trigger?: React.ReactNode;
}

const GradientGrid = ({ productIdeas }: GradientGridProps) => {
  return (
    <div className="md:p-[120px_72px] p-[100px_20px] sm:[100px_40px] bg-nor-secondary">
      <div className="flex flex-col gap-5 text-white">
        <div className="text-[40px] font-druk tracking-[1.5px] font-medium">
          WHERE IDEAS COME TO LIFE
        </div>
        <div className="flex flex-row justify-center items-center flex-wrap gap-5">
          {productIdeas?.map((card, index) => {
            return <GradientGridCard key={index} card={card} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default GradientGrid;

export function GradientGridCard({ card }: GradientGridCardProps) {
  return (
    <div className="cursor-pointer basis-full sm:basis-[calc(50%-20px)]  md:basis-[calc(33.33%-20px)] lg:basis-[calc(25%-20px)] basis:w-[250px] ">
      <GradientGridCardDialog
        card={card}
        trigger={
          <div className="bg-[linear-gradient(#0a1420,#27456a)] border-none shadow-none  gap-2.5 flex flex-col items-center text-sm justify-center h-fit  rounded-[8px] p-2.5  mb-5 ">
            <Image
              src={card?.icon}
              className="size-[75px] object-cover "
              width={75}
              height={75}
              alt={card?.alt || "Gradient image"}
            />
            {card?.title && (
              <div className="my-2.5 font-medium text-center">
                {card?.title}
              </div>
            )}
          </div>
        }
      />
    </div>
  );
}

export function GradientGridCardDialog({
  trigger,
  card,
}: GradientGridCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="w-full cursor-pointer">
        {trigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[19] bg-black/60" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95dvw] sm:w-[90dvw] md:w-[70dvw] p-5 sm:p-6 md:p-8 lg:p-10 z-20 rounded-[16px] bg-white overflow-auto max-h-[80dvh]">
          <Dialog.Title className="sr-only">Title</Dialog.Title>
          <div className="relative flex flex-col items-center sm:flex-row gap-4 sm:items-start pt-10 sm:pt-0">
            <Image
              src={card?.icon}
              className="size-[80px] sm:mt-10 lg:mt-0 object-cover "
              width={80}
              height={80}
              alt={card?.alt || "Gradient image"}
            />
            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-col-reverse lg:flex-row justify-between gap-1 items-center ">
                <div className="text-[48px] font-druk font-medium tracking-[2px] text-nor-secondary leading-[1] text-center sm:text-left">
                  {card?.title}
                </div>
                <Dialog.Close asChild className="cusor-pointer">
                  <button className="absolute top-0 sm:top-auto sm:static self-end lg:self-auto bg-[#142b46] hover:bg-nor-primary  text-white rounded-[30px] border-0 text-base p-[.375rem_.75rem] flex flex-row gap-1 duration-300 ease-in-out transition-colors items-center">
                    <span>Close</span>
                    <span className="size-[14px] flex justify-center items-center border border-white rounded-full p-[2px]">
                      <X className="size-[12px] text-white" />
                    </span>
                  </button>
                </Dialog.Close>
              </div>
              {card?.content && (
                <div className="text-sm text-center sm:text-left text-nor-secondary ">
                  {card?.content}
                </div>
              )}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
