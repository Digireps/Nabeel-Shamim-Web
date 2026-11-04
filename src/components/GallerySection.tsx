import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export interface GalleryItem {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  tag?: string;
  location?: string;
  description?: string;
  highlighted?: boolean;
  link?: {
    url: string;
    label: string;
  };
  aspectRatio?: '16/10' | '3/4' | '4/3';
  objectPosition?: string;
}

const galleryImages: GalleryItem[] = [
  { src: "/gallery/1.webp",  alt: "Nabeel Shamim presenting at a corporate event" },
  { 
    src: "/gallery/2.webp", 
    alt: "Muhammad Nabeel Shamim featured on the cover of FHM Pakistan magazine",
    title: "Featured on Cover of FHM Pakistan",
    subtitle: "FHM Pakistan • Cover Feature",
    tag: "Media Cover Story",
    location: "Karachi, Pakistan",
    description: "Featured on the cover of FHM Pakistan — chronicling the journey of building DigiReps® into one of America's fastest-growing remote workforce solutions, from Karachi to the global stage as a Forbes-recognized entrepreneur.",
    highlighted: true,
    link: {
      url: "https://www.fhmpakistan.com/muhammad-nabeel-shamim-a-name-to-watch-in-entrepreneurship-technology-global/",
      label: "Read Feature on FHM Pakistan"
    },
    aspectRatio: "16/10",
    objectPosition: "center 20%"
  },
  { src: "/gallery/3.webp",  alt: "Nabeel Shamim interacting with attendees at a tech summit" },
  { src: "/gallery/4.webp",  alt: "Nabeel Shamim speaking on leadership and entrepreneurship" },
  { 
    src: "/gallery/5.webp", 
    alt: "Inauguration ceremony of the Regional Head Office of DigiReps® at NASTP Silicon Valley, Karachi",
    title: "DigiReps® Regional Head Office Inauguration",
    subtitle: "NASTP Silicon Valley • Karachi",
    tag: "Executive Milestone",
    location: "NASTP Silicon Valley, Karachi, Pakistan",
    description: "Snaps & glimpses from the inauguration ceremony of the Regional Head Office of DigiReps® at NASTP Silicon Valley, Karachi — establishing regional infrastructure to scale global remote talent operations under the leadership of Founder & CEO Muhammad Nabeel Shamim.",
    highlighted: true
  },
  { src: "/gallery/6.webp",  alt: "Nabeel Shamim networking with industry leaders" },
  { src: "/gallery/7.webp",  alt: "Nabeel Shamim attending a Forbes Business Council event" },
  { 
    src: "/gallery/8.webp", 
    alt: "Muhammad Nabeel Shamim featuring on Adnan Faisal Podcast",
    title: "The DigiReps® Journey: Adnan Faisal Podcast",
    subtitle: "Adnan Faisal Podcast • FHM Pakistan",
    tag: "Media & Thought Leadership",
    location: "Karachi, Pakistan",
    description: "Muhammad Nabeel Shamim featured on the Adnan Faisal Podcast, diving into the journey of scaling DigiReps® into an international remote workforce powerhouse — exploring global talent infrastructure, operational grit, and empowering local professionals on world stages.",
    highlighted: true,
    link: {
      url: "https://www.youtube.com/watch?v=B7QrhYaoBQg",
      label: "Watch Full Episode on YouTube"
    }
  },
  { 
    src: "/gallery/9.webp", 
    alt: "Muhammad Nabeel Shamim with Mayor of Karachi Barrister Murtaza Wahab",
    title: "Business Venture Inauguration with the Mayor of Karachi",
    subtitle: "Civic Leadership • Karachi",
    tag: "Civic & Leadership Dialogue",
    location: "Karachi, Pakistan",
    description: "Muhammad Nabeel Shamim alongside the Mayor of Karachi, Barrister Murtaza Wahab: Inaugurating a new business venture and discussing urban development, youth digital enablement, and collaborative public-private initiatives to accelerate economic momentum across Karachi.",
    highlighted: true
},
  { src: "/gallery/10.webp", alt: "Nabeel Shamim giving an interview on business growth and leadership" },
  { 
    src: "/gallery/11.webp", 
    alt: "Muhammad Nabeel Shamim as Jury at Iqra University Youth Entrepreneur Showcase Season 08",
    title: "Youth Entrepreneur Showcase: Season 08",
    subtitle: "Iqra University • Karachi",
    tag: "Academic & Jury Keynote",
    location: "Iqra University North Campus, Karachi, Pakistan",
    description: "Invited as a jury member and keynote evaluator for Season 8 of the Youth Entrepreneur Showcase at Iqra University North Campus, Muhammad Nabeel Shamim, Head of Prodigy Solutions®, evaluated young entrepreneurs' pitches on market feasibility, cost and revenue structures, sustainable development goals (SDGs), and go-to-market execution—mentoring emerging entrepreneurial talent.",
    highlighted: true
  },
  { src: "/gallery/12.webp", alt: "Nabeel Shamim receiving a prestigious recognition award" },
  { src: "/gallery/13.png",  alt: "Nabeel Shamim posing with corporate team and colleagues" },
  { src: "/gallery/14.png",  alt: "Nabeel Shamim during a meeting with executive board members" },
  { 
    src: "/gallery/15.png", 
    alt: "Muhammad Nabeel Shamim with Vice President at United Bank Limited (UBL)",
    title: "Executive Session at United Bank Limited (UBL)",
    subtitle: "UBL Head Office • Karachi",
    tag: "Corporate Leadership & Innovation",
    location: "United Bank Limited, Karachi, Pakistan",
    description: "Honored to be invited by the Vice President at UBL for an engaging session with the team on leadership, business, innovation, and the mindset required for building high-performing teams — sharing entrepreneurial journeys, operational scaling insights, and strategies for sustainable growth.",
    highlighted: true
  },
  { src: "/gallery/16.png",  alt: "Nabeel Shamim discussing business strategies at a roundtable conference" },
  { 
    src: "/gallery/17.png",  
    alt: "Muhammad Nabeel Shamim mentoring and guiding young entrepreneurs",
    title: "Motivating & Guiding Young Entrepreneurs",
    subtitle: "Youth Mentorship • Iqra University",
    tag: "Youth Mentorship & Incubation",
    location: "Iqra University, Karachi, Pakistan",
    description: "Muhammad Nabeel Shamim engaging directly with student innovators, reviewing business model canvases, and mentoring the next generation of entrepreneurs on leadership mindset, product validation, and scaling ideas into sustainable ventures.",
    highlighted: true,
    aspectRatio: "16/10",
    objectPosition: "center 25%"
  },
  { 
    src: "/gallery/18.jpeg", 
    alt: "Nabeel Shamim in Manhattan, New York",
    aspectRatio: "3/4",
    objectPosition: "center 20%"
  },
  { 
    src: "/gallery/20.jpeg", 
    alt: "Muhammad Nabeel Shamim with Global Technology Leader, Bank of America",
    title: "With Global Technology Leader, Bank of America",
    subtitle: "Bank of America • New York",
    tag: "Executive Leadership & Global Tech",
    location: "New York, United States",
    description: "Muhammad Nabeel Shamim meeting with a Global Technology Leader from Bank of America — discussing cross-border technological enterprise operations, digital finance infrastructure, and scaling high-efficiency remote global talent models.",
    highlighted: true,
    aspectRatio: "16/10",
    objectPosition: "center 20%"
  },
  { 
    src: "/gallery/21.jpeg", 
    alt: "Nabeel Shamim participating in an international business discussion",
    aspectRatio: "3/4",
    objectPosition: "center 15%"
  },
  { 
    src: "/gallery/22.jpeg", 
    alt: "Nabeel Shamim with executives and entrepreneurs at a corporate gathering",
    aspectRatio: "3/4",
    objectPosition: "center 18%"
  },
  { 
    src: "/gallery/23.jpeg", 
    alt: "Muhammad Nabeel Shamim at Paklaunch Event at Houston Hall, New York City",
    title: "Paklaunch Event @ Houston Hall, NYC",
    subtitle: "Paklaunch • Houston Hall, NYC",
    tag: "Global Tech & Venture Ecosystem",
    location: "Houston Hall, New York, United States",
    description: "Muhammad Nabeel Shamim connecting with international entrepreneurs, tech founders, and investors at the Paklaunch gathering at Houston Hall, New York City — discussing tech-enabled cross-border ventures, startup growth, and ecosystem building.",
    highlighted: true,
    aspectRatio: "16/10",
    objectPosition: "center 25%"
  },
  { 
    src: "/gallery/24.jpeg", 
    alt: "Muhammad Nabeel Shamim speaking at Prodisols (Prodigy Solutions®) Annual Summit 2025",
    title: "Prodisols Annual Summit 2025",
    subtitle: "Prodigy Solutions® • NASTP",
    tag: "Annual Company Summit",
    location: "NASTP Silicon Valley, Karachi, Pakistan",
    description: "Muhammad Nabeel Shamim addressing the team and leadership at the Prodisols (Prodigy Solutions®) Annual Summit 2025 at NASTP — celebrating company milestones, excellence in cross-border tech delivery, and setting the strategic vision for the upcoming year.",
    highlighted: true,
    aspectRatio: "3/4",
    objectPosition: "center 22%"
  },
  { 
    src: "/gallery/25.jpeg", 
    alt: "Nabeel Shamim during an official business trip in the USA",
    aspectRatio: "3/4",
    objectPosition: "center 20%"
  },
  { 
    src: "/gallery/26.jpeg", 
    alt: "Muhammad Nabeel Shamim delivering keynote speech at ISNA Hackathon, Huntington Place",
    title: "Keynote Speech at ISNA Hackathon",
    subtitle: "ISNA Hackathon • Huntington Place",
    tag: "Keynote & Hackathon Mentorship",
    location: "Huntington Place, Detroit, Michigan, United States",
    description: "Muhammad Nabeel Shamim delivering a keynote address and serving as a judge and mentor at the ISNA Hackathon at Huntington Place — inspiring emerging tech founders, software builders, and innovators to solve real-world problems and scale scalable tech solutions.",
    highlighted: true,
    aspectRatio: "16/10",
    objectPosition: "center 45%"
  },
  { 
    src: "/gallery/27.jpeg", 
    alt: "Nabeel Shamim collaborating with executives at an enterprise forum",
    aspectRatio: "3/4",
    objectPosition: "center 18%"
  },
];

// 4 sets for seamless infinite loop with forward/backward jumps
const loopedImages = [
  ...galleryImages,
  ...galleryImages,
  ...galleryImages,
  ...galleryImages,
];

const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const posRef = useRef<number>(0);
  const isHoveredRef = useRef<boolean>(false);
  const isManualScrollingRef = useRef<boolean>(false);
  const manualTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Lock body scroll when lightbox/modal is open
  useEffect(() => {
    document.body.style.overflow = selectedItem ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedItem]);

  // Escape key closes modal
  useEffect(() => {
    if (!selectedItem) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setSelectedItem(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedItem]);

  // Set initial scroll position to start of set 2 (buffered in both directions)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const initPos = () => {
      const singleSetWidth = el.scrollWidth / 4;
      if (singleSetWidth > 0 && el.scrollLeft === 0) {
        el.scrollLeft = singleSetWidth;
        posRef.current = singleSetWidth;
      }
    };

    const timer = setTimeout(initPos, 80);
    return () => clearTimeout(timer);
  }, []);

  // Continuous auto-scroll loop via RAF (frame-rate independent)
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();
    const speed = 40; // pixels per second

    const step = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      const el = scrollRef.current;
      if (el && !isHoveredRef.current && !isManualScrollingRef.current && selectedItem === null) {
        posRef.current += speed * delta;

        const singleSetWidth = el.scrollWidth / 4;
        if (singleSetWidth > 0) {
          if (posRef.current >= singleSetWidth * 2.5) {
            posRef.current -= singleSetWidth;
            el.scrollLeft -= singleSetWidth;
          } else if (posRef.current <= singleSetWidth * 0.5) {
            posRef.current += singleSetWidth;
            el.scrollLeft += singleSetWidth;
          }
        }
        el.scrollLeft = posRef.current;
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [selectedItem]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;

    isManualScrollingRef.current = true;
    if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);

    const scrollAmount = window.innerWidth < 768 ? 340 : 460;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });

    manualTimeoutRef.current = setTimeout(() => {
      if (el) {
        posRef.current = el.scrollLeft;
        const singleSetWidth = el.scrollWidth / 4;
        if (singleSetWidth > 0) {
          if (el.scrollLeft >= singleSetWidth * 2.5) {
            el.scrollLeft -= singleSetWidth;
            posRef.current = el.scrollLeft;
          } else if (el.scrollLeft <= singleSetWidth * 0.5) {
            el.scrollLeft += singleSetWidth;
            posRef.current = el.scrollLeft;
          }
        }
      }
      isManualScrollingRef.current = false;
    }, 550);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-zinc-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* Heading */}
      <div className="max-w-4xl mx-auto px-6 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-8 bg-zinc-200" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 font-bold">Visual Narrative</p>
            <div className="h-[1px] w-8 bg-zinc-200" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1d1d1f]">
            Moments & <span className="text-primary italic font-light">Milestones.</span>
          </h2>
        </motion.div>
      </div>

      {/* Gallery strip */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrollable track with hidden scrollbars */}
        <div
          ref={scrollRef}
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; }}
          onScroll={() => {
            if (!isManualScrollingRef.current && scrollRef.current) {
              posRef.current = scrollRef.current.scrollLeft;
            }
          }}
          className="overflow-x-auto no-scrollbar w-full py-6 select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="gallery-loop-track">
            {loopedImages.map((item, index) => {
              const isHighlighted = !!item.highlighted;
              const aspectClass =
                item.aspectRatio === '3/4'
                  ? 'aspect-[3/4]'
                  : item.aspectRatio === '4/3'
                  ? 'aspect-[4/3]'
                  : 'aspect-[16/10]';

              return (
                <div
                  key={index}
                  onClick={() => setSelectedItem(item)}
                  className={`gallery-card group/item ${aspectClass}`}
                >
                  <div className="absolute inset-px rounded-[1.7rem] border border-white/60 z-10 pointer-events-none" />

                  {/* HIGHLIGHTED BADGE (ONLY ON MARKED IMAGE) */}
                  {isHighlighted && (
                    <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-white shadow-lg pointer-events-none transition-transform duration-300 group-hover/item:scale-105">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-[9px] font-medium tracking-[0.16em] uppercase text-zinc-200">
                        Highlighted
                      </span>
                    </div>
                  )}

                  {/* HOVER OVERLAY (ONLY ON HIGHLIGHTED IMAGE) */}
                  {isHighlighted && (
                    <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col justify-end p-5 sm:p-6 text-white opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 ease-out pointer-events-none">
                      <div className="flex items-center gap-2 mb-1.5 min-w-0">
                        <span className="h-px w-5 bg-primary shrink-0" />
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary truncate">
                          {item.subtitle || item.location || "Executive Milestone"}
                        </span>
                      </div>
                      <h3 className="text-base md:text-lg font-bold tracking-tight text-white leading-snug line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-300 mt-1 line-clamp-1 font-normal">
                        {item.tag || "Executive Highlight"}
                      </p>
                      <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-medium text-primary">
                        <span>Click to view details</span>
                        <span>→</span>
                      </div>
                    </div>
                  )}

                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: item.objectPosition || 'center center' }}
                    className="w-full h-full object-cover grayscale-[0.25] group-hover/item:grayscale-0 transition-[filter] duration-500 ease-out"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* MANUAL NAVIGATION ARROWS (BOTTOM CENTER) */}
      <div className="mt-10 flex justify-center items-center gap-4 relative z-10">
        <button
          onClick={() => handleManualScroll('left')}
          aria-label="Previous gallery images"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 flex items-center justify-center text-zinc-700 hover:text-primary shadow-sm hover:shadow-md hover:border-primary/40 transition-all active:scale-95 cursor-pointer group"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={() => handleManualScroll('right')}
          aria-label="Next gallery images"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 flex items-center justify-center text-zinc-700 hover:text-primary shadow-sm hover:shadow-md hover:border-primary/40 transition-all active:scale-95 cursor-pointer group"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* LIGHTBOX / DETAIL MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setSelectedItem(null)}
          >
            {/* CLOSE BUTTON */}
            <button
              className="absolute top-6 right-6 md:top-8 md:right-8 text-white/60 hover:text-white transition-colors z-[1020] p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md active:scale-95"
              onClick={() => setSelectedItem(null)}
              aria-label="Close"
            >
              <X size={22} strokeWidth={2} />
            </button>

            {/* IF HIGHLIGHTED: EDITORIAL SPLIT MODAL EXACTLY AS ATTACHED SCREENSHOT */}
            {selectedItem.highlighted ? (
              <motion.div
                initial={{ scale: 0.94, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.94, opacity: 0, y: 10 }}
                transition={{ type: "spring", damping: 28, stiffness: 240 }}
                className="relative w-full max-w-4xl bg-[#0c0d11] border border-white/10 rounded-[2rem] shadow-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 z-[1010]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* LEFT: IMAGE */}
                <div className={`relative w-full md:w-1/2 flex-shrink-0 rounded-2xl overflow-hidden bg-black/40 border border-white/5 ${selectedItem.aspectRatio === '3/4' ? 'aspect-[3/4] max-h-[50vh] md:max-h-[60vh]' : 'aspect-[16/11]'}`}>
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    style={{ objectPosition: selectedItem.objectPosition || 'center center' }}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* RIGHT: DETAILS */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="h-[2px] w-6 bg-primary rounded-full" />
                    <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary">
                      {selectedItem.tag || "Executive Milestone"}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-2.5">
                    {selectedItem.title}
                  </h2>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 mb-5">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{selectedItem.location}</span>
                  </div>

                  <div className="h-px w-full bg-white/10 mb-5" />

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {selectedItem.description}
                  </p>

                  {selectedItem.link && (
                    <a
                      href={selectedItem.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-xs font-semibold text-white transition-all w-fit group/btn"
                    >
                      <span>{selectedItem.link.label}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-primary group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            ) : (
              /* REGULAR LIGHTBOX FOR STANDARD IMAGES */
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ type: "spring", damping: 28, stiffness: 220 }}
                className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-black/60 flex items-center justify-center p-2"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  className="max-w-full max-h-[82vh] w-auto h-auto object-contain rounded-2xl"
                />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
