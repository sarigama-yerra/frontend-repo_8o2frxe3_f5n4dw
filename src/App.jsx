import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Row from "./components/Row";
import Footer from "./components/Footer";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function App() {
  const [rows, setRows] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRows = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/rows`);
        const data = await res.json();
        setRows(data || {});
      } catch (e) {
        console.error(e);
        setRows({});
      } finally {
        setLoading(false);
      }
    };
    fetchRows();
  }, []);

  const categories = Object.keys(rows);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />

        <div className="space-y-8 mt-8">
          {loading && (
            <div className="px-4 sm:px-6 lg:px-8 text-gray-400">Loading…</div>
          )}
          {!loading && categories.length === 0 && (
            <div className="px-4 sm:px-6 lg:px-8 text-gray-400">
              No content yet.
            </div>
          )}
          {categories.map((cat) => (
            <Row key={cat} title={cat} items={rows[cat]} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
