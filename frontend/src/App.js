import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Logo from "./components/Logo";

// Code splitting
const Home = lazy(() => import("./pages/Home"));
const AddResource = lazy(() => import("./pages/AddResource"));
const EditResource = lazy(() => import("./pages/EditResource"));

export default function App() {
  const [open, setOpen] = useState(false);

  const navLink = ({ isActive }) =>
    [
      "px-3 py-2 rounded-md text-sm font-medium transition",
      isActive
        ? "text-blue-700 bg-blue-100"
        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100",
    ].join(" ");

  return (
    <Router>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Logo />

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-2">
              <NavLink to="/" className={navLink} end>
                Home
              </NavLink>
              <NavLink to="/add" className={navLink}>
                Add Resource
              </NavLink>
              {/* CTA */}
              <NavLink
                to="/add"
                className="ml-2 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow hover:bg-blue-700 transition"
              >
                <span>+ Add</span>
              </NavLink>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                {open ? (
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile nav */}
          {open && (
            <div className="md:hidden pb-3">
              <nav className="flex flex-col gap-1">
                <NavLink to="/" className={navLink} end onClick={() => setOpen(false)}>
                  Home
                </NavLink>
                <NavLink to="/add" className={navLink} onClick={() => setOpen(false)}>
                  Add Resource
                </NavLink>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-4 py-8">
        <Suspense fallback={<p className="text-gray-600">Loading…</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddResource />} />
            <Route path="/edit/:id" element={<EditResource />} />
          </Routes>
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-sm text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Study Resources Hub</p>
          <p className="text-gray-400">Smart · Warm · Helpful</p>
        </div>
      </footer>
    </Router>
  );
}
