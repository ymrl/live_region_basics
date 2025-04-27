import { HTMLAttributes } from "react";
export const List = ({
  children,
  type = "ul",
  ...args
}: {
  children: React.ReactNode;
  type?: "ul" | "ol";
} & HTMLAttributes<HTMLUListElement | HTMLOListElement>) => {
  const ListTag = type === "ol" ? "ol" : "ul";
  return (
    <ListTag
      {...args}
      className={`mt-4 ml-8 ${
        type === "ul" ? "list-disc" : "list-decimal"
      } list-outside text-left text-base`}
    >
      {children}
    </ListTag>
  );
};

export const ListItem = ({
  children,
  ...args
}: {
  children: React.ReactNode;
} & HTMLAttributes<HTMLLIElement>) => (
    <li className="mt-2 text-base" {...args}>
      {children}
    </li>
);
