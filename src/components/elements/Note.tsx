import { ReactNode, HTMLAttributes } from "react";
export const Note = ({
  children,
  ...args
}: {
  children: ReactNode;
} & HTMLAttributes<HTMLParagraphElement>) => (
  <p className="text-sm text-gray-600 mt-4" {...args}>
    {children}
  </p>
);
