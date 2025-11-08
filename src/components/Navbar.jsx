import { useEffect, useState } from "react";
import { Search, Bell, User } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        scrolled ? "bg-black/80 backdrop-blur" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <a href="#" className="text-2xl font-extrabold tracking-tight text-red-600">
            FLIX
          </a>
          <nav className="hidden md:flex items-center gap-5 text-sm text-gray-200">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">Series</a>
            <a href="#" className="hover:text-white">Movies</a>
            <a href="#" className="hover:text-white">New & Popular</a>
            <a href="#" className="hover:text-white">My List</a>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-gray-200">
          <button aria-label="Search" className="hover:text-white">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Notifications" className="hover:text-white">
            <Bell className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded bg-gradient-to-br from-gray-400 to-gray-200 text-black grid place-items-center">
              <User className="h-4 w-4" />
            </div>
            <span className="hidden sm:block text-sm">Profile</span>
          </div>
        </div>
      </div>
    </header>
  );
}
