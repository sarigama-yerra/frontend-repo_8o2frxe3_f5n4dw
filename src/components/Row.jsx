import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Row({ title, items = [] }) {
  const scrollerRef = useRef(null);

  const scrollByAmount = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  if (!items.length) return null;

  return (
    <section className="relative">
      <h2 className="mb-3 px-4 text-lg font-semibold text-white sm:px-6 lg:px-8">
        {title}
      </h2>

      <div className="group relative">
        <button
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white opacity-0 transition-opacity hover:bg-black/80 group-hover:opacity-100"
          onClick={() => scrollByAmount(-1)}
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div
          ref={scrollerRef}
          className="scrollbar-hide relative flex gap-3 overflow-x-auto px-4 sm:px-6 lg:px-8"
        >
          {items.map((m) => (
            <div
              key={m.id}
              className="relative h-40 w-72 flex-none overflow-hidden rounded-md bg-gray-800/50 shadow ring-1 ring-white/10"
            >
              <img
                src={m.image}
                alt={m.title}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2 text-xs text-white">
                {m.title}
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white opacity-0 transition-opacity hover:bg-black/80 group-hover:opacity-100"
          onClick={() => scrollByAmount(1)}
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
