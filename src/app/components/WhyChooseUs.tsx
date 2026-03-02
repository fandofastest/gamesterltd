import { motion } from "motion/react";
import { Award, Zap, Shield, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Proven track record of delivering successful projects across various industries"
  },
  {
    icon: Zap,
    title: "Innovative Solutions",
    description: "Cutting-edge technology and creative approaches to solve complex challenges"
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description: "Enterprise-grade security and 99.9% uptime guarantee for all our solutions"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Dedicated support team available around the clock to assist you"
  }
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "250+", label: "Happy Clients" },
  { value: "50+", label: "Team Members" },
  { value: "15+", label: "Countries Served" }
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4">Why Choose TechFlow</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
