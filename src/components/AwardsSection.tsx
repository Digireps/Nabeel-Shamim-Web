import { motion } from "framer-motion";
import { Trophy, Award, Medal, TrendingUp, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const awards = [
  {
    title: "Top 100 Entrepreneurs",
    organization: "By CxO Global Forum",
    category: "Global Innovation",
    year: "2026",
    description:
      "Honored among the top 100 business minds in Pakistan for driving tech-enabled remote workforce modernization and growth strategies for globally distributed teams.",
    highlight: true,
    url: "https://www.linkedin.com/posts/mnabeelshamim_cxoglobalforum-forbes-top100entrepreneurs-activity-7423090351701319680-74of",
    icon: Award,
  },
  {
    title: "Leadership & Industry Excellence Award",
    organization: "By Connected Pakistan",
    category: "Technology & Leadership",
    year: "August 2026",
    description:
      "Conferred at Konnect-X, Pakistan's Premium Tech Conference, honoring visionary leadership, tech workforce innovation, and impactful contributions to scaling global digital enterprises.",
    highlight: false,
    url: "https://www.linkedin.com/posts/mnabeelshamim_konnect-ugcPost-7489711719905341440-CML0/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAApo16YBEfp58R4oQYOHWUYpAihID2Eqaj0",
    icon: TrendingUp,
  },
  {
    title: "Forbes Business Council Induction",
    organization: "Forbes Business Council",
    category: "Executive Leadership",
    year: "September 2025",
    description:
      "Inducted into the invitation-only Forbes Council, an international community for C-level executives, for pioneering cross-border workforce infrastructure.",
    highlight: true,
    url: "https://councils.forbes.com/profile/Muhammad-Nabeel-Shamim-Founder-CEO-DigiReps/f15d004f-bae0-4bee-8276-1af1b187609e",
    icon: Trophy,
  },
];

const AwardsSection = () => {
  return (
    <section
      id="awards"
      className="py-24 md:py-32 relative bg-white text-zinc-900 overflow-hidden border-t border-zinc-100"
      aria-label="Awards, recognitions and honors received by Muhammad Nabeel Shamim"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 mb-4">
            <Trophy size={13} className="text-primary" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-primary font-bold">
              Honors & Accolades
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#1d1d1f] mb-4">
            Awards & <span className="text-primary italic font-light">Recognition.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-500 text-sm md:text-base leading-relaxed">
            Celebrating key milestones of leadership, international business excellence, and high-impact serial entrepreneurship.
          </p>
        </motion.div>

        {/* Featured Award Stage / Visual Highlight */}
        <div className="grid lg:grid-cols-12 gap-6 mb-8">
          {/* Main Visual Feature Card */}
          <motion.div
            className="lg:col-span-5 relative group rounded-2xl md:rounded-3xl overflow-hidden bg-white border border-zinc-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-primary/40 transition-all duration-500 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/3] lg:aspect-auto lg:flex-1 lg:min-h-[280px] overflow-hidden bg-zinc-100">
              <img
                src="/gallery/awards.jpeg"
                alt="Muhammad Nabeel Shamim receiving prestigious entrepreneurship recognition award"
                className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="p-6 md:p-8 flex-shrink-0 bg-white">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary block mb-2">
                Moments of Recognition
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-[#1d1d1f] mb-3">
                Global Entrepreneurial Impact
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Recognized in national and international forums for empowering emerging talent and architecting sustainable cross-border workforce systems.
              </p>
              <div className="flex items-center gap-4 text-xs font-semibold text-zinc-400 pt-3 border-t border-zinc-100">
                <span className="text-zinc-700">Executive Leadership</span>
                <span>•</span>
                <span className="text-zinc-700">Global Summits</span>
              </div>
            </div>
          </motion.div>

          {/* Awards Grid List */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5 md:gap-6">
            {awards.map((award, i) => {
              const Icon = award.icon;
              return (
                <motion.a
                  key={i}
                  href={award.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl md:rounded-3xl bg-white border border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-primary/40 transition-all duration-500 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Top Header */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                        <Icon size={18} />
                      </div>
                    </div>

                    <div className="space-y-1 mb-3">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold block">
                        {award.organization} • {award.year}
                      </span>
                      <h4 className="text-lg md:text-xl font-bold text-[#1d1d1f] group-hover:text-primary transition-colors leading-snug">
                        {award.title}
                      </h4>
                    </div>

                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                      {award.description}
                    </p>
                  </div>

                  {/* Footer link */}
                  <div className="relative z-10 mt-6 pt-3 border-t border-zinc-100 flex items-center justify-between text-zinc-400 group-hover:text-primary transition-colors">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                      {award.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-zinc-900 group-hover:text-primary">
                      <span>Verify</span>
                      <ExternalLink size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
