// "use client";

// import * as Dialog from "@radix-ui/react-dialog";
// import { X } from "lucide-react";
// import { cn } from "@/lib/utils";

// export function Modal({ trigger, children }: any) {
//   return (
//     <Dialog.Root>
//       <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

//       <Dialog.Portal>
//         <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

//         <Dialog.Content
//           className={cn(
//             "fixed left-1/2 top-1/2 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white dark:bg-neutral-900 p-6 shadow-xl"
//           )}
//         >
//           <Dialog.Close className="absolute right-4 top-4">
//             <X className="w-5 h-5" />
//           </Dialog.Close>

//           {children}
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// }

"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

/**
 * Modal Component
 * ----------------
 * - Reusable Radix Dialog wrapper
 * - Props: title, children, open, setOpen
 * - Clean, responsive and accessible
 */

interface ModalProps {
  title: string;
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Modal({ title, children, open, setOpen }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Overlay className="fixed inset-0 bg-black/30" />
      <Dialog.Content className="fixed top-1/2 left-1/2 w-96 max-w-full -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <Dialog.Title className="text-lg font-semibold">{title}</Dialog.Title>
        <Dialog.Close className="absolute top-3 right-3 cursor-pointer">
          <X />
        </Dialog.Close>
        <div className="mt-4">{children}</div>
      </Dialog.Content>
    </Dialog.Root>
  );
}