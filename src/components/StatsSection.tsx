import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Activity, Users, ShieldCheck, Briefcase, ArrowUpRight } from "lucide-react";

const stats = [
  { prefix: "$", value: 100, suffix: "M+", label: "Revenue Generated For Businesses and Clients", icon: Activity, size: "lg" },
  { value: 1000, suffix: "+", label: "Clients Served", icon: Users, size: "md" },
  { value: 12, suffix: "+", label: "Years Leadership", icon: ShieldCheck, size: "sm" },
  { value: 5000, suffix: "+", label: "Lives Impacted Globally", icon: Briefcase, size: "sm" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let animId: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        animId = requestAnimationFrame(step);
      }
    };
    animId = requestAnimationFrame(step);
    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [target, duration, start]);
  return count;
}

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  return (
    <section className="py-20 relative overflow-hidden bg-[#FBFBFD]">
      {/* Soft Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* REDUCED HEIGHT: Changed from h-[550px] to h-[420px] for a more compact feel */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[420px]" ref={ref}>
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} started={isInView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, started, index }) => {
  const count = useCountUp(stat.value, 2000, started);
  const Icon = stat.icon;

  const sizeClasses = {
    lg: "md:col-span-2 md:row-span-2",
    md: "md:col-span-2 md:row-span-1",
    sm: "md:col-span-1 md:row-span-1",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative p-8 bg-[#0A0A0B] rounded-[2rem] shadow-xl shadow-black/10 hover:shadow-primary/5 transition-all duration-700 flex flex-col justify-between overflow-hidden border border-white/5 ${sizeClasses[stat.size]}`}
    >
      {/* GLOW EFFECT: Scaled down for smaller cards */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px] -mr-24 -mt-24 group-hover:bg-primary/20 transition-all duration-700" />
      
      <div className="relative z-10 flex justify-between items-start">
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
          <Icon className="text-zinc-500 group-hover:text-black w-4 h-4 transition-colors" />
        </div>
        <ArrowUpRight className="text-zinc-700 group-hover:text-primary transition-colors" size={16} />
      </div>

      <div className="relative z-10">
        {/* REFINED TYPOGRAPHY: Slightly smaller font sizes for better fit */}
        <h3 className={`
          ${stat.size === 'lg' ? 'text-6xl md:text-7xl' : 'text-4xl'} 
          font-black tracking-tighter text-primary leading-none mb-3
          drop-shadow-[0_0_12px_rgba(var(--primary-rgb),0.3)]
        `}>
          {stat.prefix}{count}{stat.suffix}
        </h3>
        <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500">
          {stat.label}
        </p>
      </div>

      {/* Subtle Bottom Glow Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-primary group-hover:w-1/4 transition-all duration-700 rounded-t-full shadow-[0_0_10px_#00ffa3]" />
    </motion.div>
  );
};

export default StatsSection;
