// src/components/Navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/80 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      {/* Skip-Link für Accessibility (mit Tab erreichbar) */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:m-2 focus:rounded-md focus:bg-indigo-600 focus:px-3 focus:py-2 focus:text-white"
      >
        Zum Inhalt springen
      </a>

      {/* Innenabstand + Maxbreite */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="inline-flex items-center gap-2 font-semibold tracking-tight">
            {/* Mini-Icon (nur Deko) */}
            <span
              aria-hidden="true"
              className="grid h-6 w-6 place-items-center rounded-md border border-indigo-500/30 bg-indigo-600 text-white text-xs"
            >
              ⚡
            </span>
            <span>React + Tailwind</span>
          </a>

          {/* Desktop-Nav */}
          <nav aria-label="Hauptnavigation" className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-300 hover:text-white">Start</a>
            <a href="#" className="text-gray-300 hover:text-white">Features</a>
            <a href="#" className="text-gray-300 hover:text-white">Preise</a>
            <a href="#" className="text-gray-300 hover:text-white">Kontakt</a>
            <a href="#" className="text-gray-300 hover:text-white">Dashboard</a>
          </nav>

          {/* Rechte Seite: CTA + Burger */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden md:inline-flex rounded-lg border border-indigo-500/30 bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 active:scale-[0.98]"
            >
              Login
            </a>

            {/* Mobile Menü-Button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border border-gray-700 bg-gray-800/70 p-2 md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={() => setOpen((v) => !v)}
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label="Menü öffnen/schließen"
            >
              {/* Hamburger / X Icon */}
              <svg
                className={`h-5 w-5 ${open ? "hidden" : "block"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-5 w-5 ${open ? "block" : "hidden"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile-Menü (klappt unter der Leiste auf) */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-gray-800 bg-gray-900/95">
          <div className="space-y-1 px-4 pb-4 pt-2">
            <a className="block rounded-lg px-3 py-2 text-gray-200 hover:bg-gray-800" href="#">Start</a>
            <a className="block rounded-lg px-3 py-2 text-gray-200 hover:bg-gray-800" href="#">Features</a>
            <a className="block rounded-lg px-3 py-2 text-gray-200 hover:bg-gray-800" href="#">Preise</a>
            <a className="block rounded-lg px-3 py-2 text-gray-200 hover:bg-gray-800" href="#">KontaktX</a>
            <a className="block rounded-lg px-3 py-2 font-medium text-white bg-indigo-600 hover:bg-indigo-500" href="#">
              Login
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
