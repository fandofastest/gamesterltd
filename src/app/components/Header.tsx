import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-[1440px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-xl font-semibold text-[#0A2540]">TechFlow</span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="text-[#0A2540] hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-[#0A2540] hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-[#0A2540] hover:text-blue-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-[#0A2540] hover:text-blue-600 transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection("team")} className="text-[#0A2540] hover:text-blue-600 transition-colors">
              Team
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-[#0A2540] hover:text-blue-600 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection("contact")} className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all">
              Contact Us
            </button>
          </nav>

          <button 
            className="lg:hidden text-[#0A2540]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("home")} className="text-[#0A2540] hover:text-blue-600 transition-colors text-left">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-[#0A2540] hover:text-blue-600 transition-colors text-left">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-[#0A2540] hover:text-blue-600 transition-colors text-left">
              Services
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-[#0A2540] hover:text-blue-600 transition-colors text-left">
              Portfolio
            </button>
            <button onClick={() => scrollToSection("team")} className="text-[#0A2540] hover:text-blue-600 transition-colors text-left">
              Team
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-[#0A2540] hover:text-blue-600 transition-colors text-left">
              Testimonials
            </button>
            <button onClick={() => scrollToSection("contact")} className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all text-left">
              Contact Us
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
