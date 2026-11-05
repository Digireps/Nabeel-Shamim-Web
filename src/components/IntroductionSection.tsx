import { Button } from "@/components/ui/button";
import { motion, HTMLMotionProps } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";
const intro = "/intro.png";

// Fixed Type Error by adding explicit typing
const fadeIn: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const IntroductionSection = () => {
  return (
    <section id="introduction" className="py-32 md:py-48 bg-[#050505] overflow-hidden" aria-label="About Muhammad Nabeel Shamim">
      <article>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div {...fadeIn} className="mb-20">
          <div className="flex items-center gap-4 mb-4">
             <div className="h-px w-12 bg-primary/40" />
             <span className="text-[10px] font-black tracking-[0.5em] text-primary uppercase">
               The Founder
             </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-[-0.04em] text-white">
            Driven by impact. <br />
            <span className="text-zinc-600">Defined by results.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Image Column */}
          <motion.div 
            {...fadeIn} 
            className="lg:col-span-5 relative"
            // Overriding the default transition to add delay
            transition={{ ...fadeIn.transition, duration: 1, delay: 0.1 }}
          >
            <div className="relative aspect-[4/6] rounded-[2.5rem] overflow-hidden bg-zinc-900 shadow-2xl border border-white/5">
              <img 
                src={intro} 
                alt="Muhammad Nabeel Shamim" 
                width={640}
                height={960}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105 opacity-90 hover:opacity-100" 
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            {...fadeIn} 
            className="lg:col-span-7 pt-4"
            transition={{ ...fadeIn.transition, duration: 1, delay: 0.2 }}
          >
            <div className="space-y-10">
              <h3 className="text-3xl font-semibold tracking-tight text-zinc-100 leading-snug">
                Muhammad Nabeel Shamim is a results-driven entrepreneur who impacts thousands of lives globally.
              </h3>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-5">
                  <p className="text-lg text-zinc-400 leading-relaxed font-medium italic">
                    "Coming from underprivileged beginnings, by 28, Muhammad had already made a fortune not just for himself but for the clients he served through strategic and relentless execution."
                  </p>
                  <p className="text-zinc-300/80 leading-relaxed text-sm">
                    As Founder & CEO of DigiReps®, Nabeel Shamim is on a mission to transform how businesses leverage remote talent. By identifying hiring inefficiencies, he built an ecosystem that delivers elite sales, support, and tech professionals while drastically reducing operational overhead.
                  </p>
                  <p className="text-zinc-300/80 leading-relaxed text-sm">
                    Nabeel also founded several other ventures. He invests, consults, and mentor startups as well.
                  </p>
                </div>
                
                <div className="space-y-6 pt-1">
                  <p className="text-zinc-500 leading-relaxed text-sm">
                    Before DigiReps®, he scaled Prodigy Solutions® into a top-tier biz-dev and full-service IT company, helping numerous U.S. businesses achieve Inc. 5000 status through high-impact strategies.
                  </p>
                  
                  {/* Stats Card */}
                  <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                    <p className="text-sm font-bold text-zinc-400 mb-1">Top Venture</p>
                    <p className="text-3xl font-black text-primary tracking-tighter">DigiReps®</p>
                    <p className="text-xs text-zinc-600 mt-2 uppercase tracking-widest font-bold">Currently valued at $3.2M</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <Button
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-7 font-bold text-base transition-all shadow-lg shadow-primary/20 border-none"
                  asChild
                >
                  <a href="https://digireps.co/aboutus" target="_blank" rel="noopener noreferrer">
                    Explore DigiReps® <ArrowUpRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <div className="hidden sm:block">
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-700 leading-relaxed">
                     Transforming <br /> Global Talent
                   </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      </article>
    </section>
  );
};

export default IntroductionSection;