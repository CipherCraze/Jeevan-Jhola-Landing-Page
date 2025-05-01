import { motion } from "framer-motion"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ProblemSection from "./components/ProblemSection"
import SolutionSection from "./components/SolutionSection"
import HowItWorks from "./components/HowItWorks"
import Testimonials from "./components/Testimonials"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App