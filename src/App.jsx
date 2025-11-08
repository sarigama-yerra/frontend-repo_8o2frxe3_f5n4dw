import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Row from "./components/Row";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />

        <div className="space-y-8 mt-8">
          <Row title="Popular on FLIX" />
          <Row title="Trending Now" />
          <Row title="Top Picks for You" />
          <Row title="Because you watched Sci‑Fi" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
