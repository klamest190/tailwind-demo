import Navbar from "./components/Navbar";

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
        <h1
          className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.2]
             text-transparent bg-clip-text bg-gradient-to-r
             from-indigo-400 via-purple-400 to-pink-400 mb-4 pb-1"
        >
          Hallo mein Projekt
        </h1>

        <p className="text-gray-400 text-lg">
          Willkommen in deiner neuen App von Karsten Mendix GmbH 🚀
        </p>
      </main>
    </div>
  );
}
