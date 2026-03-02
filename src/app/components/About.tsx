import { motion } from "motion/react";
import { Target, Eye } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4">About TechFlow</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leading the digital transformation with cutting-edge technology solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MjQzMTYwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Modern Office" 
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-[#0A2540] mb-4">Who We Are</h3>
            <p className="text-lg text-gray-600 mb-6">
              TechFlow is a leading software development company specializing in creating innovative digital solutions for businesses worldwide. With over 10 years of experience, we've helped hundreds of companies transform their digital presence and achieve remarkable growth.
            </p>
            <p className="text-lg text-gray-600">
              Our team of expert developers, designers, and strategists work collaboratively to deliver exceptional results that exceed expectations and drive business success.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
              <Target size={32} className="text-white" />
            </div>
            <h4 className="text-2xl font-bold text-[#0A2540] mb-4">Our Mission</h4>
            <p className="text-lg text-gray-600">
              To empower businesses with innovative technology solutions that drive growth, enhance efficiency, and create lasting value in the digital age.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
              <Eye size={32} className="text-white" />
            </div>
            <h4 className="text-2xl font-bold text-[#0A2540] mb-4">Our Vision</h4>
            <p className="text-lg text-gray-600">
              To be the global leader in digital transformation, recognized for excellence, innovation, and the positive impact we create for our clients and communities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
