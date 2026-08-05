import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShoppingCart, Send, X, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const PublishedBooksSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const messageContent = `E-Book Request: Five Lens. Company: ${formData.company || 'Not Specified'}, Role: ${formData.role || 'Not Specified'}`;

    try {
      // 1. Insert lead record into database
      const { error: dbError } = await supabase.from("contact_submissions").insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: messageContent
      });

      if (dbError) {
        console.error("Database insert error:", dbError);
        setStatus("error");
        return;
      }

      // 2. Invoke Supabase Edge Function to deliver the email
      const { data, error: invokeError } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: messageContent,
          isEbook: true,
          company: formData.company.trim() || "Not Specified",
          role: formData.role.trim() || "Not Specified",
          subject: "Your Free Copy of Nabeel Shamim’s Five Lens™",
          from: "Nabeel Shamim <contact@nabeelshamim.com>"
        }
      });

      if (invokeError) {
        console.error("Edge function invocation error:", invokeError);
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", company: "", role: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="publications" className="py-32 bg-white relative overflow-hidden border-t border-zinc-100">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Minimalist Heading Block - Matching BoardSeatsSection style */}
        <motion.div 
          className="text-center mb-24 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-6 bg-zinc-200" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 font-bold">
              Intellectual Capital
            </p>
            <div className="h-[1px] w-6 bg-zinc-200" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#1d1d1f]">
            Books &amp; <span className="text-primary italic">Frameworks.</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto pt-2 font-medium leading-relaxed">
            Over the years, I’ve developed practical methodologies from real-world experience building businesses, 
            leading teams, and solving challenges. These publications document those frameworks.
          </p>
        </motion.div>

        {/* Editorial-style Book list (Rows instead of heavy grids) */}
        <div className="divide-y divide-zinc-100">
          
          {/* BOOK 01 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-12 first:pt-0 last:pb-0 flex flex-col md:flex-row gap-8 items-start justify-between"
          >
            {/* Left Column: Number & Book cover */}
            <div className="flex gap-6 items-start shrink-0">
              
              
              {/* Flat, editorial shadow style cover */}
              <div className="relative w-[110px] h-[165px] bg-zinc-50 border border-zinc-100 rounded-sm overflow-hidden shadow-[2px_10px_20px_rgba(0,0,0,0.06)] group cursor-pointer">
                <img
                  src="/gallery/digireps-cover.png"
                  alt="The DigiReps® Remote Talent Performance Framework™ Book Cover"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right Column: Title, description and clean text CTA */}
            <div className="flex-grow max-w-2xl space-y-4">
              <span className="inline-block text-[9px] font-black uppercase tracking-widest text-primary/65">
                Business Playbook
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#1d1d1f] leading-snug">
                The DigiReps® Remote Talent Performance Framework™
              </h3>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                A comprehensive methodology for building and scaling high-performance remote teams.
              </p>
              
              <div className="pt-2 flex flex-col items-start gap-y-2">
                <a 
                  href="https://a.co/d/077QeW7x" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#1d1d1f] hover:text-primary transition-colors group/link"
                >
                  <ShoppingCart size={14} />
                  <span>Buy on Amazon</span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  Internationally Published
                </span>
              </div>
            </div>
          </motion.div>

          {/* BOOK 02 */}
          {false && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="py-12 last:pb-0 flex flex-col md:flex-row gap-8 items-start justify-between"
            >
              {/* Left Column: Number & Book cover */}
              <div className="flex gap-6 items-start shrink-0">
               
                
                {/* Flat, editorial shadow style cover */}
                <div className="relative w-[110px] h-[165px] bg-zinc-50 border border-zinc-100 rounded-sm overflow-hidden shadow-[2px_10px_20px_rgba(0,0,0,0.06)] group cursor-pointer shrink-0">
                  <img
                    src="/gallery/fivelens-cover.png"
                    alt="Nabeel Shamim's Five Lens™ Book Cover"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Column: Title, description and clean text CTA */}
              <div className="flex-grow max-w-2xl space-y-4">
                <span className="inline-block text-[9px] font-black uppercase tracking-widest text-primary/65">
                  Diagnostic Blueprint
                </span>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#1d1d1f] leading-snug">
                  Nabeel Shamim’s Five Lens™
                </h3>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                  Dissecting and Solving Critical Business Challenges through MPACT™
                </p>
                
                <div className="pt-2">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      setIsFormOpen(true);
                    }}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#1d1d1f] hover:text-primary transition-colors group/link cursor-pointer border-none bg-transparent p-0"
                  >
                    <Send size={14} />
                    <span>Request a free copy</span>
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

        </div>

      </div>

      {/* Modal Popup with AnimatePresence */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            {/* Dark Overlay Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md pointer-events-auto"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-md bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] shadow-2xl p-8 md:p-10 overflow-hidden z-10 pointer-events-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-6 right-6 w-8 h-8 rounded-full border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={16} className="text-zinc-500" />
              </button>

              {status !== "success" ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                      Request a Free Copy
                    </h3>
                    <p className="text-zinc-500 text-xs mt-2 leading-relaxed">
                      Enter your details below, and we will automatically email you a digital edition of <strong>Five Lens™</strong>.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-zinc-900 dark:text-zinc-100"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">
                        Business Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-zinc-900 dark:text-zinc-100"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="company" className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">
                          Company / Org
                        </label>
                        <input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-zinc-900 dark:text-zinc-100"
                          placeholder="Acme Corp"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="role" className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">
                          Job Title / Role
                        </label>
                        <input
                          id="role"
                          type="text"
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-zinc-900 dark:text-zinc-100"
                          placeholder="Founder / CEO"
                        />
                      </div>
                    </div>

                    {status === "error" && (
                      <p className="text-red-500 text-xs font-semibold">
                        Something went wrong. Please try again.
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full rounded-full bg-zinc-950 hover:bg-primary text-white py-6 mt-4 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border-none flex items-center justify-center gap-2"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>Get Free Copy</span>
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-6 text-center space-y-4">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle2 size={56} className="text-green-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    Request Received!
                  </h3>
                  <p className="text-zinc-500 text-xs max-w-xs leading-relaxed">
                    Thank you! An automated email containing the download link for <strong>Five Lens™</strong> is on its way to your inbox.
                  </p>
                  <Button
                    onClick={() => {
                      setIsFormOpen(false);
                      setStatus("idle");
                    }}
                    className="rounded-full bg-zinc-950 hover:bg-primary text-white px-8 py-5 mt-4 text-xs font-bold uppercase tracking-wider cursor-pointer border-none"
                  >
                    Close Window
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PublishedBooksSection;
