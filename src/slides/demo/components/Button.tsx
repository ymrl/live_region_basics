import { MouseEventHandler, ReactNode } from "react";

export const Button = ({
  children,
  disabled,
  onClick,
}: {
  children: ReactNode;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => (
  <button
    className="min-h-12 inline-flex flex-row items-center px-2 py-1 text-sm
          border border-gray-300 bg-gray-100 rounded-md 
          active:bg-gray-300 active:border-gray-400
          disabled:bg-gray-50 disabled:text-gray-500
          grow-0"
    onClick={onClick}
    disabled={disabled}
    type="button"
  >
    {children}
  </button>
);
