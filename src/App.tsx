// App.tsx
import { useEffect, useState, useRef, useCallback } from "react";
import { SlideFrame } from "./components/SlideFrame";
import { slides } from "./slides";
import { MDXProvider } from "@mdx-js/react";
import { components } from "./MDXConfiguration";

export const App = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<HTMLDivElement[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const index = slideRefs.current.findIndex(
            (el) => el === visible.target
          );
          if (index !== -1) setCurrent(index);
        }
      },
      { threshold: 0.6 }
    );

    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSlide = useCallback(
    (delta: number) => {
      const next = Math.min(Math.max(current + delta, 0), slides.length - 1);
      const slide = slideRefs.current[next];
      if (!slide) return;
      // slide.scrollIntoView({ behavior: "smooth",  });
      const slideId = slide.querySelector("[id]")?.id;
      if (slideId) {
        const hash = `#${slideId}`;
        history.replaceState(null, "", hash);
      }
      setTimeout(() => {
        slide.querySelector<HTMLElement>("a,button,[tabindex]")?.focus();
      }, 300);
    },
    [current]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "j") {
        e.preventDefault();
        scrollToSlide(1);
      }
      if (e.key === "k") {
        e.preventDefault();
        scrollToSlide(-1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, scrollToSlide]);

  return (
    <>
    <main
      ref={containerRef}
      className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory"
    >
      <MDXProvider components={components}>
        {slides.map((Slide, i) => (
          <div
            key={i}
            ref={(el) => {
              slideRefs.current[i] = el!;
            }}
            className="snap-start w-full h-screen"
          >
            <SlideFrame>{Slide}</SlideFrame>
          </div>
        ))}
      </MDXProvider>
    </main>
    </>
  );
};
