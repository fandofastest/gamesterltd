import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    position: "CEO",
    company: "TechStart Inc.",
    content: "TechFlow transformed our digital presence completely. Their expertise and dedication to quality exceeded our expectations. Highly recommended!",
    rating: 5
  },
  {
    name: "Lisa Martinez",
    position: "Product Manager",
    company: "InnovateCo",
    content: "Working with TechFlow was a game-changer for our business. They delivered a robust solution on time and within budget. Excellent communication throughout!",
    rating: 5
  },
  {
    name: "David Kim",
    position: "CTO",
    company: "Digital Solutions Ltd",
    content: "The team at TechFlow is exceptional. Their technical skills and problem-solving abilities are outstanding. We've seen significant improvements in our operations.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#F7F9FC]">
      <div className="max-w-[1440px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all relative"
            >
              <Quote className="absolute top-8 right-8 text-blue-100" size={48} />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 relative z-10">{testimonial.content}</p>
              <div className="border-t pt-6">
                <div className="font-bold text-[#0A2540]">{testimonial.name}</div>
                <div className="text-gray-600 text-sm">{testimonial.position} at {testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
