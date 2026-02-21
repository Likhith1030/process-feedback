import { useEffect, useRef } from "react";

export default function AnimateIn({
  children,
  className = "",
  tag: Tag = "div",
  style,
  threshold = 0.15,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If already in viewport on mount, reveal immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag ref={ref} className={`pf-animate${className ? " " + className : ""}`} style={style}>
      {children}
    </Tag>
  );
}