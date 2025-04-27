import { AnchorHTMLAttributes, ReactNode } from "react";
export const Link = ({
  children,
  ...args
}: {
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    {...args}
    className="text-blue-800 underline decoration-solid
               hover:text-blue-900 hover:decoration-double"
  >
    {children}
  </a>
);
