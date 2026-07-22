import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fadeUp } from "@/animations/variants";
import { useSEO } from "@/hooks/useSEO";
import { NetlifyForm } from "@/components/forms/NetlifyForm";
import { Heart, Megaphone, Users } from "lucide-react";

const skillFormValues = [
  "Data Entry", "Community Outreach", "Social Media",
  "Transportation", "Event Management", "Medical Support",
  "Legal Aid", "Teaching", "Photography"
];

const interestFormValues = [
  "Education", "Healthcare", "Youth", "Women",
  "Agriculture", "Infrastructure", "General Support"
];

const lgas = [
  "Anka", "Bakura", "Bungudu", "Gusau", "Kaura Namoda",
  "Maru", "Shinkafi", "Talata Mafara", "Tsafe", "Zurmi"
];

export default function Volunteer() {
  useSEO({ title: "Join the Movement - Volunteer" });
  const { t } = useTranslation();

  const skillLabels = t("volunteer.page.skills", { returnObjects: true }) as string[];
  const interestLabels = t("volunteer.page.interests", { returnObjects: true }) as string[];

  const benefits = [
    { icon: Users, title: t("volunteer.page.benefit_community_title"), desc: t("volunteer.page.benefit_community_desc") },
    { icon: Megaphone, title: t("volunteer.page.benefit_voice_title"), desc: t("volunteer.page.benefit_voice_desc") },
    { icon: Heart, title: t("volunteer.page.benefit_change_title"), desc: t("volunteer.page.benefit_change_desc") }
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            {t("volunteer.page.hero_pre")} <span className="text-accent">{t("volunteer.page.hero_accent")}</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            {t("volunteer.page.hero_desc")}
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <motion.div variants={fadeUp}>
                <h2 className="text-3xl font-extrabold text-foreground mb-6">{t("volunteer.page.why_title")}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  {t("volunteer.page.why_desc")}
                </p>
                
                <div className="space-y-8">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                        <b.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-2">{b.title}</h4>
                        <p className="text-muted-foreground">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border">
                <h3 className="text-2xl font-bold text-foreground mb-8">{t("volunteer.page.form_title")}</h3>
                
                <NetlifyForm 
                  name="volunteer" 
                  submitText={t("volunteer.page.form_submit")}
                  successMessage={t("volunteer.page.form_success")}
                >
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">{t("volunteer.page.label_name")}</label>
                        <input type="text" name="name" required className="w-full rounded-xl border-border px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">{t("volunteer.page.label_phone")}</label>
                        <input type="tel" name="phone" required className="w-full rounded-xl border-border px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary outline-none" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">{t("volunteer.page.label_email")}</label>
                        <input type="email" name="email" className="w-full rounded-xl border-border px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">{t("volunteer.page.label_lga")}</label>
                        <select name="lga" required className="w-full rounded-xl border-border px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary outline-none">
                          <option value="">{t("volunteer.page.placeholder_lga")}</option>
                          {lgas.map(lga => (
                            <option key={lga} value={lga}>{lga}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-foreground mb-3 border-t pt-6">{t("volunteer.page.label_skills")}</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {skillFormValues.map((skill, i) => (
                          <label key={skill} className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" name={`skill-${skill}`} value="yes" className="rounded text-primary focus:ring-primary" />
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                              {skillLabels[i] ?? skill}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-foreground mb-3 border-t pt-6">{t("volunteer.page.label_interests")}</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {interestFormValues.map((interest, i) => (
                          <label key={interest} className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" name={`interest-${interest}`} value="yes" className="rounded text-primary focus:ring-primary" />
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                              {interestLabels[i] ?? interest}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </NetlifyForm>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
