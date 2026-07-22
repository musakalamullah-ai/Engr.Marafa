import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer, viewport } from "@/animations/variants";
import { partyLeadership, type PartyLeader } from "@/data/partyLeadership";

const statusBadge: Record<string, string> = {
  National: "bg-primary/10 text-primary border border-primary/20",
  State: "bg-emerald-500/10 text-emerald-700 border border-emerald-500/20",
};

function LeaderCard({ leader }: { leader: PartyLeader }) {
  return (
    <motion.div
      variants={scaleIn}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-border"
    >
      {/* Portrait */}
      <div className="overflow-hidden aspect-[3/4] bg-muted">
        <img
          src={leader.photo}
          alt={leader.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Glass overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none rounded-2xl" />

      {/* Content pinned to bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <span
          className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 ${statusBadge[leader.level]}`}
        >
          {leader.level} · {leader.state}
        </span>
        <h3 className="text-lg font-bold leading-snug mb-1">{leader.name}</h3>
        <p className="text-sm font-semibold text-primary-foreground/80 mb-2">{leader.position}</p>
        <p className="text-xs text-white/70 leading-relaxed line-clamp-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          {leader.shortDescription}
        </p>
      </div>
    </motion.div>
  );
}

export default function PartyLeadership() {
  const national = partyLeadership.filter((l) => l.level === "National");
  const state = partyLeadership.filter((l) => l.level === "State");

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#051336] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-[#051336] to-[#0a2a5e] opacity-90" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto"
        >
          <span className="inline-block bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Nigeria Democratic Congress
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Party{" "}
            <span className="text-primary bg-clip-text">Leadership</span>
          </h1>
          <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto">
            Meet the distinguished officers guiding the NDC at national and state levels — dedicated
            public servants committed to democratic governance and the prosperity of all Nigerians.
          </p>
        </motion.div>
      </section>

      {/* Section intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="max-w-2xl mx-auto text-center mb-4"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              The NDC is built on the foundation of integrity, unity, and service. Our leadership
              structures at both national and Zamfara State levels reflect our commitment to
              inclusive, transparent party governance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* National Leadership */}
      <section className="py-8 pb-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <span className="text-sm font-bold text-primary uppercase tracking-widest">
                National Officers
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              National Leadership
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              The principal officers directing the NDC at the federal level.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {national.map((leader) => (
              <LeaderCard key={leader.id} leader={leader} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* State Leadership */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="h-1 w-12 bg-emerald-500 rounded-full" />
              <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">
                Zamfara State Officers
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              State Leadership
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              The dedicated officers driving NDC's vision across Zamfara State's 14 Local Government
              Areas.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {state.map((leader) => (
              <LeaderCard key={leader.id} leader={leader} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
