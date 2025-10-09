// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#", label: "Start" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Preise" },
  { href: "#contact", label: "Kontakt" },
  { href: "#dashboard", label: "Dashboard" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // ESC zum Schließen + Scroll-Lock mobile
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Glassy Bar */}
      <div className="border-b border-white/10 bg-gray-900/80 backdrop-blur supports-[backdrop-filter]:bg-gray-900/70">
        {/* max width */}
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-14 items-center justify-between">
            {/* Brand */}
            <a
              href="#"
              className="inline-flex items-center gap-2 font-semibold tracking-tight"
            >
              <span
                aria-hidden="true"
                className="grid h-6 w-6 place-items-center rounded-md border border-indigo-500/30 bg-indigo-600 text-white text-xs shadow"
              >
                ⚡
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
                Karsten Consulting
              </span>
            </a>

            {/* Desktop-Nav */}
            <nav
              aria-label="Hauptnavigation"
              className="hidden md:flex items-center gap-6"
            >
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="relative text-gray-300 hover:text-white transition"
                >
                  {l.label}
                  {/* animated underline */}
                  <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              {/* CTA */}
              <a
                href="#login"
                className="ml-2 inline-flex items-center rounded-lg border border-indigo-500/30 bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white shadow hover:bg-indigo-500 active:scale-[0.98]"
              >
                Login
              </a>
            </nav>

            {/* Mobile Toggle */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-gray-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={() => setOpen((v) => !v)}
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
            >
              {/* Icon ohne extra Lib */}
              {open ? (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6l12 12M18 6l-12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* zarter Bottom-Glow */}
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Mobile Menu (animated) */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden border-b border-white/10 bg-gray-900/95 backdrop-blur"
          >
            <div className="space-y-1 px-4 pb-4 pt-2">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="block rounded-lg px-3 py-2 text-gray-200 hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#login"
                className="mt-2 block rounded-lg bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-500"
                onClick={() => setOpen(false)}
              >
                Login
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
