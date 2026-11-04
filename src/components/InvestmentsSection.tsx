import { motion } from "framer-motion";
import { Building2, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const ventures = [
  {
    name: "DigiReps®",
    description: "Remote Workforce Solutions",
    details: "Connecting elite global talent with US-based enterprises.",
    url: "https://digireps.co"
  },
  {
    name: "Prodigy Solutions®",
    description: "Business Development Agency",
    details: "Strategic biz-dev & IT company",
    url: "https://www.prodisols.com/"
  },
  // {
  //   name: "Digify Global",
  //   description: "Digital Growth & Strategy",
  //   details: "Expanding digital footprints for global brands.",
  //   url: "https://digifyglobal.com/"
  // },
  {
    name: "NB Digital Trading",
    description: "E-Commerce & Assets",
    details: "Strategic trading and digital asset management.",
    url: "#"
  },
  {
    name: "3N & Co",
    description: "Strategic Consulting",
    details: "Consortium of small ventures.",
    url: "#"
  },
  {
    name: "CollabZone.pk",
    description: "Innovation Hub",
    details: "Executive coworking spaces and tech incubation.",
    url: "https://www.facebook.com/collabzone.pk?mibextid=wwXIfr"
  },
  {
    name: "Sapphire Solutions",
    description: "Enterprise Tech",
    details: "Scalable BPO and outsourcing solutions.",
    url: "https://www.facebook.com/sapphiresolutions1"
  },
];

const InvestmentsSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Triple items only on desktop for seamless infinite marquee loop
  const displayedVentures = isMobile ? ventures : [...ventures, ...ventures, ...ventures];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 450; // Matches card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="investments" className="py-32 bg-[#FBFBFD] overflow-hidden">
      {/* Centered Heading: Design preserved */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[11px] uppercase tracking-[0.4em] text-zinc-400 font-bold mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#1d1d1f]">
            Ventures & Companies
          </h2>
        </motion.div>
      </div>

      {/* Moving Track */}
      <div className="relative flex">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <motion.div
            className="flex gap-8 px-4"
            style={{ 
              willChange: 'transform', 
              contain: 'layout style paint',
              transform: 'translate3d(0, 0, 0)',
              WebkitTransform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
            animate={isMobile ? false : { x: ["0%", "-33.333%"] }}
            transition={isMobile ? undefined : {
              ease: "linear",
              duration: 35,
              repeat: Infinity
            }}
            whileHover={isMobile ? undefined : { animationPlayState: "paused" }}
          >
            {displayedVentures.map((company, i) => (
              <motion.a
                key={i}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/card flex-shrink-0 w-[350px] md:w-[400px] relative bg-white rounded-[2.5rem] p-10 border border-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500 block"
                style={{
                  transform: 'translate3d(0, 0, 0)',
                  WebkitTransform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              >
                <div 
                  className="absolute top-10 right-10 opacity-[0.03] group-hover/card:opacity-[0.07] transition-opacity"
                  style={{
                    transform: 'translate3d(0, 0, 0)',
                    WebkitTransform: 'translate3d(0, 0, 0)'
                  }}
                >
                  <Building2 size={100} />
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center mb-8 border border-zinc-100 group-hover/card:bg-primary/10 group-hover/card:border-primary/20 transition-colors">
                    <Building2 size={24} className="text-zinc-400 group-hover/card:text-primary transition-colors" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2 flex items-center gap-2">
                    {company.name}
                    <ArrowUpRight size={18} className="text-zinc-300 group-hover/card:text-primary transition-all" />
                  </h3>

                  <p className="text-primary font-bold text-xs uppercase tracking-widest mb-4">
                    {company.description}
                  </p>

                  <p className="text-zinc-500 leading-relaxed">
                    {company.details}
                  </p>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary group-hover/card:w-1/3 transition-all duration-500 rounded-t-full" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Apple-style Edge Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#FBFBFD] via-[#FBFBFD]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#FBFBFD] via-[#FBFBFD]/80 to-transparent z-20 pointer-events-none" />
      </div>

      {/* Navigation Buttons: Centered at Bottom */}
      <div className="mt-20 flex justify-center gap-6">
        <button
          onClick={() => handleScroll('left')}
          className="w-14 h-14 rounded-full border border-zinc-200 bg-white flex items-center justify-center shadow-sm hover:border-primary hover:text-primary transition-all active:scale-95"
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => handleScroll('right')}
          className="w-14 h-14 rounded-full border border-zinc-200 bg-white flex items-center justify-center shadow-sm hover:border-primary hover:text-primary transition-all active:scale-95"
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default InvestmentsSection;