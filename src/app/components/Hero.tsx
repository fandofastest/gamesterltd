import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-b from-[#F7F9FC] to-white">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-[#0A2540] mb-6 leading-tight">
              Innovative Software Solutions for Modern Businesses
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We transform ideas into powerful digital experiences that drive growth and create lasting value for your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all flex items-center gap-2 font-medium"
              >
                Get Started <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="bg-white text-[#0A2540] px-8 py-4 rounded-lg border-2 border-[#0A2540] hover:bg-[#0A2540] hover:text-white transition-all font-medium"
              >
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-2xl blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1734971702116-3f61289df2c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjAzRCUyMGJsdWV8ZW58MXx8fHwxNzcyNDYzMTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Technology Abstract" 
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
