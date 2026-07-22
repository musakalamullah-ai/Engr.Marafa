import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer, viewport } from "@/animations/variants";
import { aspirants, type Aspirant, type AspirantStatus } from "@/data/aspirants";

const statusColors: Record<AspirantStatus, string> = {
  Confirmed: "bg-emerald-500/15 text-emerald-700 border border-emerald-500/30",
  "Screening Passed": "bg-blue-500/15 text-blue-700 border border-blue-500/30",
  Declared: "bg-amber-500/15 text-amber-700 border border-amber-500/30",
  "Awaiting Clearance": "bg-gray-500/15 text-gray-600 border border-gray-400/30",
};

const officeFilters = ["All", "Senate", "House of Representatives", "State House of Assembly"];

function AspirantCard({ aspirant }: { aspirant: Aspirant }) {
  return (
    <motion.div
      variants={scaleIn}
      className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border flex flex-col"
    >
      {/* Portrait */}
      <div className="overflow-hidden aspect-[3/4] bg-muted relative">
        <img
          src={aspirant.photo}
          alt={aspirant.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Status badge on image */}
        <div className="absolute top-3 right-3">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm ${statusColors[aspirant.status]}`}
          >
            {aspirant.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-bold text-foreground leading-snug mb-1">{aspirant.name}</h3>
        <p className="text-sm font-semibold text-primary mb-0.5">{aspirant.office}</p>
        <p className="text-xs text-muted-foreground mb-4">{aspirant.constituency}</p>

        <button
          className="mt-auto w-full py-2.5 rounded-xl border border-primary text-primary text-sm font-semibold
            hover:bg-primary hover:text-white transition-all duration-200 group-hover:shadow-md"
          onClick={() => {}}
          aria-label={`View profile of ${aspirant.name}`}
        >
          View Profile
        </button>
      </div>
    </motion.div>
  );
}

export default function Aspirants() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All" ? aspirants : aspirants.filter((a) => a.office === activeFilter);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#051336] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2a5e]/90 via-[#051336] to-primary/70" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 75% 30%, rgba(255,255,255,0.15) 0%, transparent 55%), radial-gradient(circle at 20% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto"
        >
          <span className="inline-block bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            NDC · Zamfara State
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            NDC{" "}
            <span className="text-primary">Aspirants</span>
          </h1>
          <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto">
            A new generation of leaders stepping forward to represent Zamfara State under the
            Nigeria Democratic Congress — at the Senate, federal, and state legislative levels.
          </p>
        </motion.div>
      </section>

      {/* Filter bar */}
      <section className="py-10 bg-background border-b border-border sticky top-[72px] z-30 backdrop-blur-sm bg-background/90">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-muted-foreground mr-2">Filter by:</span>
            {officeFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  activeFilter === filter
                    ? "bg-primary text-white border-primary shadow-md"
                    : "bg-card text-foreground/70 border-border hover:border-primary hover:text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
            <span className="ml-auto text-xs text-muted-foreground font-medium">
              {filtered.length} aspirant{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </section>

      {/* Aspirant grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          {filtered.length === 0 ? (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-center py-20 text-muted-foreground"
            >
              No aspirants found for this category.
            </motion.div>
          ) : (
            <motion.div
              key={activeFilter}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {filtered.map((aspirant) => (
                <AspirantCard key={aspirant.id} aspirant={aspirant} />
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-16 bg-primary/5 border-t border-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
              Are you an NDC aspirant in Zamfara?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Join the movement for democratic representation. Reach out to the NDC Zamfara State
              secretariat to register your candidacy.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-full shadow-md hover:bg-primary/90 transition-colors"
            >
              Contact the Secretariat
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
