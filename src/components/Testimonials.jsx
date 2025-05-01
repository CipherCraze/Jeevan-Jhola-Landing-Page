import { FaQuoteLeft } from "react-icons/fa"

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I saw my own donated bag come back to me after 2 weeks. That moment—I understood what Jeevan Jhola means.",
      author: "Lakshmi, Kochi Volunteer",
      role: "Community Leader"
    },
    {
      quote: "Our shop saved ₹3,000/month on plastic bags while gaining loyal customers.",
      author: "Ramesh, Grocery Owner",
      role: "Retail Partner"
    }
  ]

  return (
    <section className="py-16 bg-green-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Voices of Change
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative p-8 bg-green-700 rounded-lg"
            >
              <FaQuoteLeft className="absolute top-6 left-6 text-green-500 opacity-20 text-4xl" />
              <p className="text-lg italic mb-6 relative z-10">
                {testimonial.quote}
              </p>
              <div className="border-t border-green-600 pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-green-300 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials