import { Play, Info } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-0">
        <img
          src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=2062&auto=format&fit=crop"
          alt="Hero background"
          className="h-[70vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-40 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-xl space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Unlimited movies, TV shows, and more.
          </h1>
          <p className="text-gray-200 sm:text-lg">
            Watch anywhere. Cancel anytime. Ready to watch? Enter your email to create or restart your membership.
          </p>
          <div className="flex gap-3">
            <button className="inline-flex items-center gap-2 rounded bg-white px-4 py-2 font-semibold text-black hover:bg-gray-200">
              <Play className="h-5 w-5 fill-black" /> Play
            </button>
            <button className="inline-flex items-center gap-2 rounded bg-gray-500/30 px-4 py-2 font-semibold text-white ring-1 ring-white/30 hover:bg-gray-500/40">
              <Info className="h-5 w-5" /> More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
