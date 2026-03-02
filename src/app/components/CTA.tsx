import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CTA() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
      <div className="max-w-[1440px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals and drive growth for your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-white text-[#0A2540] px-8 py-4 rounded-lg hover:shadow-xl transition-all flex items-center gap-2 font-medium"
            >
              Get Started Today <ArrowRight size={20} />
            </button>
            <button 
              onClick={scrollToContact}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#0A2540] transition-all font-medium"
            >
              Schedule a Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
