import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import { Bell, Rocket } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Top-Navbar */}
      <Navbar />

      {/* Main-Content */}
      <main
        id="content"
        className="px-6 pt-20 min-h-[80vh] flex flex-col items-center justify-center text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.2]
             text-transparent bg-clip-text bg-gradient-to-r
             from-indigo-400 via-purple-400 to-pink-400 mb-4 pb-1"
        >
          Hallo mein Projekt
        </motion.h1>

        <p className="text-gray-400 text-lg flex items-center gap-2">
          Willkommen in deiner neuen App von Karsten Mendix GmbH
          <Rocket className="h-5 w-5"></Rocket>
          <Bell className="h-5 w-5"></Bell>
        </p>
      </main>
    </div>
  );
}
