import { motion } from "framer-motion"

const CTA = () => {
  return (
    <section id="cta" className="py-16 bg-[url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1471')] bg-cover bg-center relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900 opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Be Part of the Solution
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join India's first reusable bag revolution. Choose your role:
          </p>
          
          <div className="grid sm:grid-cols-3 gap-4">
            <button className="bg-white text-green-800 px-4 py-3 rounded-lg font-medium hover:bg-green-100 transition">
              Student Volunteer
            </button>
            <button className="bg-green-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-700 transition">
              Retail Partner
            </button>
            <button className="border-2 border-white text-white px-4 py-3 rounded-lg font-medium hover:bg-white hover:text-green-800 transition">
              CSR Donor
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA