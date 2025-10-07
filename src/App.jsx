import Navbar from "./components/Navbar";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Rocket,
  Bell,
  Database,
  ShieldCheck,
  Workflow,
  GitBranch,
  CloudCog,
  Gauge,
  Globe,
} from "lucide-react";

// Progress-Balken hier lokal berechnen
const { scrollYProgress } = useScroll();
const scaleX = useSpring(scrollYProgress, {
  stiffness: 120,
  damping: 20,
  mass: 0.2,
});

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  });

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Spacer, damit der fixed-Header nichts überlappt */}
      <div className="h-14" aria-hidden />

      {/* Hero Section */}
      <main
        id="content"
        className="px-6 pt-10 min-h-[60vh] flex flex-col items-center justify-center text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.2]
             text-transparent bg-clip-text bg-gradient-to-r
             from-indigo-400 via-purple-400 to-pink-400 mb-4 pb-1"
        >
          Karsten Mendix Consulting GmbH
        </motion.h1>

        <p className="text-gray-400 text-lg flex items-center gap-2">
          Low-Code, der wirkt: Skalierbare Integrationen & Compliance-Apps in
          Mendix
          <Rocket className="h-5 w-5" />
          <Bell className="h-5 w-5" />
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <button className="px-5 py-2.5 rounded-xl bg-indigo-500/20 border border-indigo-400/40 hover:bg-indigo-500/30 transition">
            Projekt anfragen
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            Demo ansehen
          </button>
        </div>

        <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </main>

      {/* Content Section */}
      <section className="px-6 pt-8 pb-20 max-w-3xl mx-auto text-left space-y-16">
        {/* Abschnitt 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-start gap-4"
        >
          <Database className="h-14 w-14 text-indigo-400" />
          <h2 className="text-3xl font-semibold text-indigo-300">
            Skalierbare Datenflüsse
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Wir orchestrieren große Importe (z. B. 20 000 Artikel) mit
            500er-Batching, TaskQueue-Verarbeitung, Staging-Entities und
            performanten OQL-Abfragen. Stabiler Durchsatz, kurze Antwortzeiten –
            inklusive Monitoring für Durchlaufzeiten und Fehlerraten.
          </p>
        </motion.div>

        {/* Abschnitt 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-start gap-4"
        >
          <ShieldCheck className="h-14 w-14 text-indigo-400" />
          <h2 className="text-3xl font-semibold text-indigo-300">
            Compliance by Design
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            EUDR (DDS), REACH, RoHS, SCIP, ELV: Wir modellieren Stammdaten und
            BOM-Strukturen so, dass UUIDs, Digests und Referenzen konsistent
            bleiben. Von Artikel-/Lieferanten-/BOM-Importen bis zur
            API-Kommunikation mit Behörden- oder OEM-Systemen – revisionssicher,
            testbar und mandantenfähig.
          </p>
        </motion.div>

        {/* Abschnitt 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-start gap-4"
        >
          <Workflow className="h-14 w-14 text-indigo-400" />
          <h2 className="text-3xl font-semibold text-indigo-300">
            Integration Patterns, die halten
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Synchron/asynchron, Webhooks, Retries mit Backoff, Idempotenz-Keys
            und klare Statuscodes. Wir binden ERP/PLM-Systeme (z. B.
            SAP/Zeiss-ERP) an, normalisieren Daten und liefern CI-fähige,
            wartbare Mappings.
          </p>
        </motion.div>

        {/* Abschnitt 4 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-start gap-4"
        >
          <GitBranch className="h-14 w-14 text-indigo-400" />
          <h2 className="text-3xl font-semibold text-indigo-300">
            Nutzerzentriert & sicher
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Rollenbasierte Oberflächen, responsive Seiten, Audit-Trails und
            granulare Rechte gehören zum Standard. Dashboards zeigen den Fluss:
            Queue-Backlogs, Batch-Durchsatz, SLA-Erfüllung und Fehlertypen –
            damit Betrieb und Fachbereich die gleiche Sprache sprechen.
          </p>
        </motion.div>

        {/* Abschnitt 5 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-start gap-4"
        >
          <CloudCog className="h-14 w-14 text-indigo-400" />
          <h2 className="text-3xl font-semibold text-indigo-300">
            Zukunftssichere Architektur
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Unsere Anwendungen basieren auf klar getrennten Modulen, stabilen
            Domain-Schichten und konfigurierbaren REST-Endpunkten. Logging,
            Retry-Mechanismen und Queue-Governance sichern Integrität – von
            lokalem Pilot bis Enterprise-Cloud.
          </p>
        </motion.div>

        {/* Abschnitt 6 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-start gap-4"
        >
          <Gauge className="h-14 w-14 text-indigo-400" />
          <h2 className="text-3xl font-semibold text-indigo-300">
            Partnerschaftlich & pragmatisch
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Wir verstehen Fachbereiche, denken wie Entwickler. Ob Zeiss,
            Continental oder Mittelstand – unsere Lösungen entstehen im Dialog
            mit Fokus auf nachhaltigem Nutzen. Ziel: Ein System, das Ihr Team
            versteht, trägt und weiterentwickelt – auch in fünf Jahren noch
            performant.
          </p>
        </motion.div>

        {/* Abschnitt 7 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-start gap-4"
        >
          <Globe className="h-14 w-14 text-indigo-400" />
          <h2 className="text-3xl font-semibold text-indigo-300">
            Vernetzt denken, nachhaltig handeln
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Digitalisierung endet nicht an Landesgrenzen. Wir entwickeln
            Mendix-Lösungen, die international skalieren – mit Fokus auf
            Datenintegrität, Transparenz und nachhaltige Lieferketten. Von
            europäischen EUDR-Pflichten bis zu globalen Partner-APIs: wir
            verbinden Technologie und Verantwortung.
          </p>
        </motion.div>
      </section>

      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 bottom-0 h-[2px] origin-left
             bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
             z-50 pointer-events-none"
      />
    </div>
  );
}
