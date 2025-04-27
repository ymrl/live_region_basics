import type { ComponentProps } from "react";
import type { MDXProvider } from "@mdx-js/react";
import { Blockquote, Code, Link, List, ListItem, Paragraph } from "./components/elements";

export const components: ComponentProps<typeof MDXProvider>["components"] = {
  a: Link,
  ul: ({ children, ...args }) => (
    <List {...args} type="ul">
      {children}
    </List>
  ),
  ol: ({ children, ...args }) => (
    <List {...args} type="ol">
      {children}
    </List>
  ),
  li: ListItem,
  p: Paragraph,
  blockquote: Blockquote,
  pre: ({ children, ...args }) => (
    <pre
      className="p-2 border-gray-200 border-4 text-left text-sm font-mono overflow-x-auto [&>code]:bg-white"
      {...args}
    >
      {children}
    </pre>
  ),
  code: Code,
  figure: ({ children, ...args }) => (
    <figure className="mt-4 w-full" {...args}>
      {children}
    </figure>
  ),
} as const;
