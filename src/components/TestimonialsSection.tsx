import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Muhammad and his remote distributed teams have been handling our projects for a year now, delivering high-quality results. They check in regularly via Slack, join team meetings, and provide end-of-week reports. If you need a reliable remote solution, they are a true growth partner.",
    name: "George Schwartz",
    title: "Founder & CEO, Extension eCom",
    image: "/gallery/clients/George Schwartz - Extension eCom LLC.jpg.jpeg",
  },
  {
    quote: "Working with DigiReps® was a game-changer. Muhammad's hands-on leadership and commitment to quality delivered results far beyond our expectations.",
    name: "Alexander Toth",
    title: "CEO, Clear Brands",
    image: "/gallery/clients/Alexander Toth.jpeg",
  },
  {
    quote: "Muhammad brings a rare combination of entrepreneurial vision and operational excellence. His insights on scaling businesses are invaluable.",
    name: "Julie Sponagel",
    title: "VP, Artisun Solar",
    image: "/gallery/clients/Julie Sponagel.jpeg",
  },
  {
    quote: "A true leader who leads by example. Muhammad's work ethic and strategic thinking have made a lasting impact on everyone who works with him.",
    name: "Dave Eames",
    title: "Founder & CEO, Black Diamond Radio",
    image: "/gallery/clients/Dave Eames - CEO of Black Diamond Radio.jpeg",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const t = testimonials[current];

  // Helper function to highlight specific keywords
  const highlightText = (text: string) => {
    if (!text) return text;
    const parts = text.split(/(DigiReps®|DigiReps|Muhammad)/g);
    return parts.map((part, i) => 
      part === "DigiReps®" || part === "DigiReps" || part === "Muhammad" ? (
        <span key={i} className="text-primary font-bold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const next = useCallback(() => {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  }, []);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      next();
    }, 4500);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <section 
      id="testimonials" 
      className="py-40 bg-[#050505] text-white overflow-hidden relative"
      aria-label="Client testimonials and endorsements for Muhammad Nabeel Shamim"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-primary/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Heading, Client Avatars, & Controls */}
          <div className="lg:col-span-4 flex flex-col justify-between items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-black tracking-[0.6em] text-primary uppercase mb-6 block">
                Endorsements
              </span>
              <h2 className="text-6xl md:text-7xl font-light tracking-tighter leading-none text-white">
                Voices of <br />
                <span className="font-black italic text-zinc-800">Trust.</span>
              </h2>
            </motion.div>

            <div className="flex flex-col gap-6 mt-12 md:mt-20">
              {/* Client Avatar Selector */}
              <div className="flex items-center gap-3">
                {testimonials.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    aria-label={`View endorsement from ${item.name}`}
                    className={`relative w-11 h-11 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                      current === idx
                        ? "ring-2 ring-primary scale-110 shadow-lg shadow-primary/20 opacity-100"
                        : "opacity-40 hover:opacity-80 ring-1 ring-white/20 hover:scale-105"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-1 p-1 bg-white/[0.03] border border-white/5 rounded-full w-fit">
                <button 
                  onClick={prev}
                  aria-label="Previous endorsement"
                  className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors text-zinc-500 hover:text-white cursor-pointer"
                >
                  <ChevronLeft size={18} />
                </button>
                <div className="w-px h-5 bg-white/10" />
                <button 
                  onClick={next}
                  aria-label="Next endorsement"
                  className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors text-zinc-500 hover:text-white cursor-pointer"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Active Endorsement */}
          <div className="lg:col-span-8 relative flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-10"
              >
                <p className="text-2xl sm:text-3xl md:text-5xl lg:text-[3.25rem] font-medium leading-[1.2] tracking-tight text-zinc-100">
                  "{highlightText(t.quote)}"
                </p>

                {/* Client Profile Card */}
                <div className="flex items-center gap-5 sm:gap-6 pt-6 border-t border-white/10">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex-shrink-0 bg-zinc-900 group">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">{t.name}</h4>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mt-1">
                      {t.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Number indicator */}
            <div className="mt-12 sm:mt-16 flex items-center gap-4 justify-end">
              <span className="text-[10px] font-black font-mono text-primary">0{current + 1}</span>
              <div className="w-24 h-[1px] bg-zinc-800 relative">
                <motion.div 
                  className="absolute inset-0 bg-primary origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: (current + 1) / testimonials.length }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <span className="text-[10px] font-black font-mono text-zinc-700">0{testimonials.length}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
