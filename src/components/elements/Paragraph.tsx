import { ReactNode, HTMLAttributes } from "react";
export const Paragraph = ({
  children,
  ...args
}: {
  children: ReactNode;
} & HTMLAttributes<HTMLParagraphElement>) => (
  <p className="text-base mt-4" {...args}>
    {children}
  </p>
);
