import { motion } from "framer-motion";
import { ExternalLink, Award, Play, Mic } from "lucide-react";
import YouTubeLite from "@/components/YouTubeLite";
import { Badge } from "@/components/ui/badge";

const podcasts = [
  {
    title: "Building DigiReps® & Scaling Remote Teams",
    videoId: "eM5UImLqFU8",
    url: "https://youtu.be/eM5UImLqFU8?si=u13McsNzsLWKCcEy",
  },
  {
    title: "Entrepreneurship & Global Business Strategy",
    videoId: "B7QrhYaoBQg",
    url: "https://youtu.be/B7QrhYaoBQg?si=v8hgBPZ-0JJGamiD",
  },
  {
    title: "Leadership, Technology & the Future of Work",
    videoId: "jbCObAiOZiQ",
    url: "https://youtu.be/jbCObAiOZiQ?si=bMM-DvA7D9Dd1HG_",
  },
  {
    title: "The CxO Talk: Scaling DigiReps® & Globally Distributed Teams",
    videoId: "ast3S1y5Xgo",
    url: "https://www.youtube.com/live/ast3S1y5Xgo?si=f2hgcVbn37X0siwZ",
  },
];

const featuredItems = [
  {
    title: "From Personal Ambition to Borderless Businesses",
    source: "GritDaily",
    watermark: "GritDaily",
    url: "https://gritdaily.com/the-journey-of-muhammad-nabeel-shamim/",
  },
  {
    title: "Muhammad Nabeel Shamim Makes It To Forbes",
    source: "Business Bytes",
    watermark: "BYTES",
    url: "https://businessbytes.pk/blog/2025/09/22/pakistani-entrepreneur-muhammad-nabeel-shamim-makes-it-to-forbes/",
    featured: false,
  },
  // {
  //   title: "Forbes Business Council Member Profile",
  //   source: "Forbes Council",
  //   watermark: "FORBES",
  //   url: "https://councils.forbes.com/profile/Muhammad-Nabeel-Shamim-Founder-CEO-DigiReps/f15d004f-bae0-4bee-8276-1af1b187609e",
  // },
  {
    title: "Building Businesses and Shaping Modern Entrepreneurship",
    source: "Daily Pakistan Article",
    watermark: "Daily",
    url: "https://en.dailypakistan.com.pk/16-Oct-2024/muhammad-nabeel-shamim-building-businesses-and-shaping-modern-entrepreneurship",
  },
  {
    title: "Building a Cross-Border Blueprint",
    source: "CEO World Magazine",
    watermark: "CEO World",
    url: "https://ceoworld.biz/2026/08/13/how-nabeel-shamim-is-building-a-cross-border-blueprint-for-technology-enabled-workforces-and-revenue-operations/",
  },
  {
    title: "Featured in Startup Pakistan’s Entrepreneur Spotlight",
    source: "Startup Pakistan",
    watermark: "STARTUP",
    url: "https://startuppakistan.com.pk/pakistani-entrepreneur-muhammad-nabeel-shamim-makes-it-to-forbes/",
  },
  {
    title: "Muhammad Nabeel Shamim: A Name to Watch in Entrepreneurship & Technology",
    source: "FHM Pakistan",
    watermark: "FHM",
    url: "https://www.fhmpakistan.com/muhammad-nabeel-shamim-a-name-to-watch-in-entrepreneurship-technology-global/",
  },
  // {
  //   title: "Top 100 Entrepreneurs",
  //   source: "CXO Global Forum",
  //   watermark: "CXO",
  //   url: "https://www.cxoglobal.com",
  // },
  
  
  // {
  //   title: "Featured in PRWeb’s Press Release on Forbes Induction",
  //   source: "PRWeb",
  //   watermark: "PRWEB",
  //   url: "https://www.prweb.com/releases/digireps-founder--ceo-muhammad-n-shamim-inducted-into-forbes-business-council-302574419.html",
  // },
];

const pressLogos = [
  { src: "/gallery/GritDaily.png", alt: "GritDaily publication on Muhammad Nabeel Shamim" },
  { src: "/gallery/Forbes.png", alt: "Forbes publication featuring Muhammad Nabeel Shamim" },
  { src: "/gallery/DailyPakistan.png", alt: "Daily Pakistan article on Muhammad Nabeel Shamim" },
  { src: "/gallery/CeoWorld.png", alt: "CEO World Magazine feature on Nabeel Shamim" },
  { src: "/gallery/StartupPakistan.png", alt: "Startup Pakistan spotlight on entrepreneur Nabeel Shamim" },
  { src: "/gallery/FHM.png", alt: "FHM Pakistan feature on Nabeel Shamim" },
  { src: "/gallery/Business-Bytes.png", alt: "Business Bytes press report on Muhammad Nabeel Shamim" },
  { src: "/gallery/Loug.png", alt: "Loug media interview with Nabeel Shamim" },
  { src: "/gallery/Metatainment.png", alt: "Metatainment news coverage on Nabeel Shamim" },
];

const loopedPressLogos = [
  ...pressLogos,
  ...pressLogos,
  ...pressLogos,
  ...pressLogos,
];

const PressSection = () => {
  return (
    <section id="press" className="py-24 md:py-32 relative bg-[#050505] text-white overflow-hidden" aria-label="Press coverage and media features for Nabeel Shamim">
      <article>
        {/* Subtle background ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">
              Media
            </h2>
            <p className="text-3xl md:text-5xl font-black tracking-tight text-white">
              Press & Publications
            </p>
          </motion.div>

          {/* As Featured In strip - Moving tagline / marquee */}
          <motion.div
            className="flex flex-col items-center gap-6 mb-20 w-full overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Featured In</span>
            
            <div className="relative w-full overflow-hidden py-3">
              {/* Left & Right gradient edge fades for smooth entrance/exit */}
              <div className="absolute inset-y-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

              {/* Moving Track */}
              <div
                className="press-ticker-track"
                style={{ willChange: "transform" }}
              >
                {loopedPressLogos.map((logo, index) => (
                  <div
                    key={`${logo.src}-${index}`}
                    className="flex items-center justify-center mx-8 sm:mx-12 shrink-0 py-1"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-5 sm:h-6 md:h-7 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          {/* Featured highlight cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-7">
            {featuredItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between p-6 sm:p-7 md:p-8 rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden min-h-[260px] md:min-h-[280px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                {/* Radial Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Watermark in background */}
                <span className="absolute -bottom-4 -right-4 text-6xl md:text-7xl font-black text-white/[0.02] group-hover:text-primary/[0.05] select-none pointer-events-none transition-all duration-700 leading-none uppercase">
                  {item.watermark}
                </span>

                <div className="relative z-10 flex flex-col">
                  {/* Card Header: Source + Featured Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="h-px w-6 bg-primary/60 group-hover:w-10 transition-all duration-500 shrink-0" />
                      <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-bold truncate">
                        {item.source}
                      </p>
                    </div>
                    {item.featured && (
                      <Badge className="bg-primary text-black font-extrabold text-[9px] uppercase tracking-wider gap-1 border-none px-2.5 py-0.5 shadow-md shadow-primary/20 shrink-0">
                        <Award size={10} />
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Footer action */}
                <div className="relative z-10 mt-6 pt-2 flex items-center gap-2 text-zinc-400 group-hover:text-primary transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-widest">Review Feature</span>
                  <ExternalLink size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Podcasts & Interviews */}
          <motion.div
            className="text-center mt-32 mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Mic size={18} className="text-primary" />
              <h3 className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
                On Air
              </h3>
            </div>
            <p className="text-3xl md:text-4xl font-black tracking-tight text-white">
              Podcasts & Interviews
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {podcasts.map((pod, i) => (
              <motion.div
                key={i}
                className="group relative rounded-[2rem] overflow-hidden border border-white/5 bg-white/[0.02] hover:border-primary/30 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="relative aspect-video">
                  <YouTubeLite videoId={pod.videoId} title={pod.title} />
                </div>

                <div className="p-6">
                  <h4 className="font-bold text-white text-base leading-snug mb-4 group-hover:text-primary transition-colors">
                    {pod.title}
                  </h4>
                  <a
                    href={pod.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors"
                  >
                    <Play size={12} className="fill-current" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Watch on YouTube</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default PressSection;