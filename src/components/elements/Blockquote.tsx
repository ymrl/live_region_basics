import { ReactNode, HTMLAttributes } from "react";

export const Blockquote = ({
  children,
  ...args
}: {
  children: ReactNode;
} & HTMLAttributes<HTMLElement>) => (
  <blockquote
    className="mt-4 pl-4 border-l-gray-200 border-l-8 text-left"
    {...args}
  >
    {children}
  </blockquote>
);
