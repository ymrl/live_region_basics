import { ReactNode, HTMLAttributes } from "react";

export const Code = ({ children, ...args }:{
  children: ReactNode;
} & HTMLAttributes<HTMLElement>
) => (
    <code
      className="text-sm font-mono text-gray-800 bg-gray-100 rounded px-1 py-2"
      {...args}
    >
      {children}
    </code>
  )