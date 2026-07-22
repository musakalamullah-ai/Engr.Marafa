import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { useSEO } from "@/hooks/useSEO";
import { programs } from "@/data/programs";
import { ProgramCard } from "@/components/common/ProgramCard";
import { cn } from "@/utils";

const scholarshipImg = "/images/program-scholarship.jpg";
const ictImg = "/images/program-ict.jpg";
const medicalImg = "/images/program-medical.jpg";
const businessImg = "/images/program-business.jpg";
const agricImg = "/images/program-agric.jpg";
const womenImg = "/images/program-women.jpg";
const leadershipImg = "/images/program-leadership.jpg";
const vocationalImg = "/images/program-vocational.jpg";

const programImages: Record<string, string> = {
  "scholarship-program": scholarshipImg,
  "ict-skills-training": ictImg,
  "medical-outreach": medicalImg,
  "business-grants": businessImg,
  "agric-support": agricImg,
  "women-empowerment": womenImg,
  "leadership-fellowship": leadershipImg,
  "vocational-training": vocationalImg,
};

export default function Programs() {
  useSEO({ title: "Community Programs" });
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");

  const filters = [
    { label: t("programs.page.filter_all"), value: "all" },
    { label: t("programs.page.filter_open"), value: "open" },
    { label: t("programs.page.filter_coming_soon"), value: "coming-soon" },
    { label: t("programs.page.filter_completed"), value: "completed" },
  ];

  const filteredPrograms = programs.filter(p => {
    if (filter === "all") return true;
    if (filter === "open") return p.status === "open" || p.status === "featured";
    return p.status === filter;
  });

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            {t("programs.page.hero_pre")} <span className="text-accent">{t("programs.page.hero_accent")}</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            {t("programs.page.hero_desc")}
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm",
                  filter === f.value 
                    ? "bg-primary text-white" 
                    : "bg-white text-foreground hover:bg-slate-100"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <motion.div 
            key={filter}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredPrograms.map(program => (
              <motion.div key={program.id} variants={fadeUp}>
                <ProgramCard 
                  {...program} 
                  image={programImages[program.id]}
                />
              </motion.div>
            ))}
          </motion.div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-20 text-muted-foreground text-lg">
              {t("programs.page.empty")}
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
