"use client";
import * as Dialog from "@radix-ui/react-dialog";

interface Props {
  trigger?: React.ReactNode | string;
  children?: React.ReactNode | string;
}

const RadixDialog = ({ trigger, children }: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="">{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content
          className=" fixed inset-0 z-[1000]
            overflow-y-auto
            flex justify-center items-start"
        >
          <Dialog.Title className="sr-only">Title</Dialog.Title>
          <div
            className="relative w-full 
              bg-[#0a1420] rounded-[20px]
              text-white shadow-xl"
          >
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default RadixDialog;
