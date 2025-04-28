import { useId } from "react";

export const SlideBase = ({
  children,
  title,
  level = 2,
  id,
}: {
  children: React.ReactNode;
  title: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  id?: string;
}) => {
  const Heading = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  const generatedId = useId();
  const slideId = id || generatedId;
  const titleId = `slide-title-${slideId}`;
  return (
    <section
      className="flex flex-col justify-start items-start w-full min-h-full text-left p-8"
      id={id}
      // Safari + VoiceOver で次のスライドに行けなくなってしまったので、regionロールにするのをやめている
      // （section要素はアクセシブルネームを与えることでregionロールになる）
      // aria-labelledby={titleId}
      // aria-roledescription="スライド"
    >
      <Heading className="text-xl font-bold" id={titleId}>
        <a
          href={`#${slideId}`}
          className="display-block
          focus-visible:outline-gray-400
          focus-visible:outline-dashed
          focus-visible:outline-2
          focus-visible:outline-offset-4
          "
        >
          {title}
        </a>
      </Heading>
      {children}
    </section>
  );
};
