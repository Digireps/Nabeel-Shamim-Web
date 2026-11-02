import { Linkedin, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/mnabeelshamim/" },
  { icon: Globe, href: "https://digireps.co/aboutus" },
];

const tickerItems = [
  "FOUNDER & CEO",
  "FORBES COUNCIL MEMBER",
  "SERIAL ENTREPRENEUR",
  "GLOBAL BUSINESS LEADER",
  "REMOTE WORKFORCE PIONEER",
  "SELF-MADE MILLIONAIRE",
];

const fadeUp = {
  initial: { opacity: 0, y: 30, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const marqueeShiftPercent = 50;

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center bg-[#FBFBFD] text-[#1d1d1f] overflow-hidden">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center pt-32 flex-grow">
        {/* Eyebrow Label */}
        <motion.div className="mb-6" {...fadeUp} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0 }}>
          <span className="text-[12px] font-bold tracking-[0.2em] sm:tracking-[0.3em] text-zinc-400 uppercase text-center sm:text-left leading-relaxed">
            <span className="block sm:inline">Forbes Recognized & Award-Winning</span>
            <span className="block sm:inline sm:ml-2">Entrepreneur</span>
          </span>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl lg:text-[9.5rem] font-bold tracking-[-0.05em] leading-[0.9] mb-8 text-center"
          {...fadeUp}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          Nabeel{" "}
          <span className="whitespace-nowrap">
            Shamim
            <span className="ml-2 inline-block w-[0.18em] h-[0.18em] bg-current align-baseline" />
          </span>
        </motion.h1>
        <p className="sr-only">
          Muhammad Nabeel Shamim — Founder & CEO of DigiReps®, Forbes Business Council Member, Pakistani entrepreneur
          pioneering remote workforce solutions globally.
        </p>

        {/* Sub-headline Text */}
        <motion.div
          className="text-center mb-12"
          {...fadeUp}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <p className="text-xl md:text-3xl text-zinc-500 font-medium tracking-tight leading-tight">
            Building the future of global work. <br />
            <span className="text-black">Strategic leadership for the modern enterprise.</span>
          </p>
        </motion.div>

        {/* Call to Action Row */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 mb-16"
          {...fadeUp}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
        >
          <a href="#contact">
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold shadow-xl transition-all hover:scale-105 active:scale-95 border-none cursor-pointer">
              Contact Nabeel
            </Button>
          </a>

          <div className="flex items-center gap-6">
            <a
              href="#introduction"
              className="flex items-center gap-2 text-primary font-semibold text-lg hover:underline group"
            >
              Learn more
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="h-6 w-px bg-zinc-200 hidden md:block" />

            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-[#0071e3] transition-colors"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          className="relative w-full max-w-4xl flex justify-center mt-auto"
          {...fadeUp}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <div
            className="relative w-full max-w-2xl"
            style={{
              maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
            }}
          >
            <img
              src="/nabeel-portrait.png"
              alt="Muhammad Nabeel Shamim"
              width={768}
              height={960}
              fetchPriority="high"
              loading="eager"
              className="w-full h-auto object-contain filter contrast-[1.02] brightness-[1.01]"
            />
          </div>
        </motion.div>
      </div>

      {/* APPLE-STYLE FROSTED TICKER */}
      <div className="w-full backdrop-blur-md bg-white/60 border-t border-zinc-100 py-8 overflow-hidden z-20">
        <div
          className="flex w-max whitespace-nowrap marquee-track"
          style={{ willChange: "transform", contain: "layout style paint" }}
        >
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className="flex items-center">
              <span className="text-[8px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.4em] text-zinc-400 px-6 sm:px-16 uppercase">{item}</span>
              <div className="w-1 h-1 bg-black rounded-full" />
            </div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${marqueeShiftPercent}%); }
          }
          .marquee-track {
            display: flex;
            animation: scroll 40s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `,
        }}
      />
    </section>
  );
};

export default HeroSection;