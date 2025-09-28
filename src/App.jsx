export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center p-6">
      <div className="p-8 rounded-2xl shadow-xl bg-gray-900 border border-gray-800 max-w-md w-full">
        
        {/* === App Header === */}
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          React + Tailwind <span aria-hidden>🚀</span>
        </h1>
        
        {/* === Info-Text === */}
        <p className="mt-2 text-sm text-gray-300">
          Glückwunsch! Deine Basis-App läuft. 🎉 <br />
          Starte jetzt mit deiner eigenen Entwicklung.
        </p>

        {/* === Beispiel-Button (kannst du ersetzen) === */}
        <button
          className="mt-6 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] transition border border-indigo-400/30 shadow"
          onClick={() => alert('Hallo aus deinem Template!')}
        >
          Test-Button
        </button>

      </div>
    </div>
  )
}
