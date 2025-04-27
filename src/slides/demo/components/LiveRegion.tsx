import { ReactNode, AriaAttributes, JSX, AriaRole } from "react";
export type LiveRegionAttributes = Pick<
  AriaAttributes,
  "aria-live" | "aria-atomic" | "aria-relevant" | "aria-busy" | "aria-label"
>;

export const LiveRegion = ({
  children,
  tagName = "div",
  ...args
}: {
  children: ReactNode;
  tagName?: keyof JSX.IntrinsicElements;
  role?: AriaRole;
} & LiveRegionAttributes) => {
  const Tag = tagName;
  return (
    <Tag
      className="min-h-12 min-w-36 inline-block align-middle px-2 py-1 text-sm
      text-amber-900 bg-amber-200 rounded-md grow-1"
      {...args}
    >
      {children}
    </Tag>
  );
};
