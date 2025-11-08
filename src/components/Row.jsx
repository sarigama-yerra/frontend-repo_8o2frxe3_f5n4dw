import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Simple, local demo dataset per row
const sampleData = [
  {
    id: 1,
    title: "Inception",
    img: "https://image.tmdb.org/t/p/w780/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
  },
  {
    id: 2,
    title: "Interstellar",
    img: "https://image.tmdb.org/t/p/w780/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    img: "https://image.tmdb.org/t/p/w780/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 4,
    title: "Dune",
    img: "https://image.tmdb.org/t/p/w780/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
  },
  {
    id: 5,
    title: "Joker",
    img: "https://image.tmdb.org/t/p/w780/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  },
  {
    id: 6,
    title: "Spider‑Man: Across the Spider‑Verse",
    img: "https://image.tmdb.org/t/p/w780/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
  },
  {
    id: 7,
    title: "Oppenheimer",
    img: "https://image.tmdb.org/t/p/w780/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  },
  {
    id: 8,
    title: "Barbie",
    img: "https://image.tmdb.org/t/p/w780/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
  },
  {
    id: 9,
    title: "Avatar: The Way of Water",
    img: "https://image.tmdb.org/t/p/w780/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
  },
  {
    id: 10,
    title: "John Wick 4",
    img: "https://image.tmdb.org/t/p/w780/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
  },
];

export default function Row({ title }) {
  const [items] = useState(sampleData);
  const scrollerRef = useRef(null);

  useEffect(() => {
    // no-op: using local data for now
  }, []);

  const scrollByAmount = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

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
                src={m.img}
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
