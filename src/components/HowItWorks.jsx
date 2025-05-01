import { FaStore, FaShoppingBag, FaReply } from "react-icons/fa"

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaStore className="text-2xl text-primary" />,
      title: "Pick a Bag",
      description: "Take a Jeevan Jhola from any partner shop for free",
      bg: "bg-green-100"
    },
    {
      icon: <FaShoppingBag className="text-2xl text-primary" />,
      title: "Use It Like Yours",
      description: "Carry it anywhere—no deposits, no worries",
      bg: "bg-green-50"
    },
    {
      icon: <FaReply className="text-2xl text-primary" />,
      title: "Return It",
      description: "Drop it at any participating store—no tech needed",
      bg: "bg-green-100"
    }
  ]

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          How It Works
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline bar */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-green-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                <div className={`md:w-1/2 p-6 ${step.bg} rounded-lg md:mx-4`}>
                  <div className="flex items-center mb-3">
                    <div className="mr-4 p-2 bg-white rounded-full shadow-sm">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 pl-12">{step.description}</p>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks