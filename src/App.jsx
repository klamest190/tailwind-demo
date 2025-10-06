import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import {
  Bell,
  Rocket,
  Workflow,
  Database,
  ShieldCheck,
  GitBranch,
  Gauge,
  CloudCog,
} from "lucide-react";

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
          Karsten Mendix Consulting GmbH
        </motion.h1>

        <p className="text-gray-400 text-lg flex items-center gap-2">
          Low-Code, der wirkt: Skalierbare Integrationen & Compliance-Apps in
          Mendix
          <Rocket className="h-5 w-5"></Rocket>
          <Bell className="h-5 w-5"></Bell>
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <button className="px-5 py-2.5 rounded-xl bg-indigo-500/20 border border-indigo-400/40 hover:bg-indigo-500/30 transition">
            Projekt anfragen
          </button>
        </div>

        <section className="px-6 py-32 max-w-3xl mx-auto text-center space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-4xl font-semibold text-indigo-300"
          >
            Moderne Mendix-Lösungen für Compliance, ERP-Anbindung & Datenflüsse
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-gray-400 leading-relaxed text-lg"
          >
            Wir planen, bauen und betreiben Mendix-Applikationen, die Ihre
            Geschäftsprozesse messbar schneller machen. Ob
            REST/SOAP-Schnittstellen, JSON/XML-Mappings, OAuth2/Signaturen oder
            saubere Domain-Modelle – wir liefern robuste Implementierungen mit
            klarer Fehlerbehandlung und nachvollziehbarem Logging für Audit &
            Betrieb.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-gray-400 leading-relaxed text-lg"
          >
            Daten in Bewegung: Wir orchestrieren große Importe (z. B. 20 000
            Artikel) mit 500er-Batching, TaskQueue-Verarbeitung,
            Staging-Entities und performanten OQL-Abfragen. Ergebnis: Stabiler
            Durchsatz, kurze Antwortzeiten und keine „Big-Commit“-Risiken –
            inklusive Monitoring für Durchlaufzeiten und Fehlerraten.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-gray-400 leading-relaxed text-lg"
          >
            Compliance by Design: EUDR (DDS), REACH, RoHS, SCIP, ELV – wir
            modellieren Stammdaten, BOM-Strukturen und Meldeobjekte so, dass
            UUIDs, Digests und Referenzen konsistent bleiben. Von
            Artikel-/Lieferanten-/BOM-Importen bis zur API-Kommunikation mit
            Behörden- oder OEM-Systemen: revisionssicher, testbar und
            mandantenfähig.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-gray-400 leading-relaxed text-lg"
          >
            Integration Patterns, die halten: Synchron/asynchron, Webhooks,
            Retries mit Backoff, Idempotenz-Keys, Statuscodes (201/207/422) und
            saubere Fehlerpfade. Wir binden ERP/PLM (z. B. SAP/Zeiss-ERP) an,
            normalisieren Daten und liefern klare Mappings – wartbar,
            dokumentiert und CI-fähig.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-gray-400 leading-relaxed text-lg"
          >
            Nutzerzentriert & sicher: Rollenbasierte Oberflächen, responsive
            Seiten, Audit-Trails und granulare Rechte gehören zum Standard.
            Dashboards zeigen den Fluss: Queue-Backlogs, Batch-Durchsatz,
            SLA-Erfüllung und Fehlertypen – damit Betrieb & Fachbereich die
            gleiche Sprache sprechen.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-gray-400 leading-relaxed text-lg"
          >
            Zukunftssichere Architektur: Unsere Anwendungen basieren auf klar
            getrennten Modulen, stabilen Domain-Schichten und konfigurierbaren
            REST-Endpunkten. Durch Logging, Retry-Mechanismen und
            Queue-Governance bleibt die Integrität auch bei hohen Datenmengen
            erhalten. Wir denken in Skalierbarkeit – von lokalem Pilot bis
            Enterprise-Deployment in der Cloud.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-gray-400 leading-relaxed text-lg"
          >
            Partnerschaftlich & pragmatisch: Wir verstehen Fachbereiche, aber
            denken wie Entwickler. Ob Zeiss, Continental oder Mittelstand –
            unsere Lösungen entstehen im Dialog, mit Fokus auf nachhaltigem
            Nutzen. Unser Ziel ist nicht nur Software, sondern ein System, das
            Ihr Team versteht, trägt und weiterentwickelt – auch in fünf Jahren
            noch stabil und performant.
          </motion.p>
        </section>
      </main>
    </div>
  );
}
