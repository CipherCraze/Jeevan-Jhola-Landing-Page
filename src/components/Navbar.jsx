import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { FaBars, FaTimes, FaLeaf } from "react-icons/fa"
import { motion } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const links = [
    { name: "The Problem", to: "problem" },
    { name: "Our Solution", to: "solution" },
    { name: "How It Works", to: "how-it-works" },
    { name: "Get Involved", to: "cta" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaLeaf className="text-primary text-xl" />
          <span className="text-2xl font-bold text-primary font-montserrat">
            Jeevan Jhola
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="relative px-4 py-2 cursor-pointer text-gray-700 hover:text-primary transition-all
                         group"
              activeClass="text-primary font-semibold"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-green-50 transition-colors"
            aria-label="Navigation menu"
          >
            {isOpen ? (
              <FaTimes className="text-primary text-2xl" />
            ) : (
              <FaBars className="text-primary text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="block px-4 py-3 rounded-lg cursor-pointer text-gray-700 
                           hover:bg-green-50 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
                activeClass="bg-green-50 text-primary font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar