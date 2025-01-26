
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const steps = [
  {
    title: "Master the Code of Love",
    icon: "💻",
    content:
      "Learn to debug your dating life like you debug your code. Optimize your approach and minimize rejection exceptions.",
  },
  {
    title: "Expand Your Network",
    icon: "🌐",
    content: "Connect with fellow tech enthusiasts. Remember, your soulmate might be just a hackathon away!",
  },
  {
    title: "Boost Your Confidence",
    icon: "⚡",
    content: "Confidence is key in both coding and dating. Stand tall, smile, and remember – you're a catch!",
  },
  {
    title: "Execute Your Love.py",
    icon: "❤️",
    content: "Put your new skills into action. Go out there and find your perfect pair programming partner!",
  },
]

export default function TutorialPage() {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => setCurrentStep((prev) => (prev + 1) % steps.length)
  const prevStep = () => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)

  return (
    <div className="min-h-screen bg-gradient-to-b from-rizz-pink-100 to-rizz-pink-300 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-rizz-pink-800 mb-8">How to Get Rizzy</h1>
      <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 max-w-2xl w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <span className="text-6xl">{steps[currentStep].icon}</span>
            </div>
            <h2 className="text-2xl font-semibold text-rizz-pink-700 mb-4">{steps[currentStep].title}</h2>
            <p className="text-rizz-pink-800 mb-8">{steps[currentStep].content}</p>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={prevStep}
            className="bg-rizz-pink-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-rizz-pink-600 transition-colors"
          >
            ◀️ Prev
          </button>
          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentStep ? "bg-rizz-pink-500" : "bg-rizz-pink-300"}`}
                animate={{ scale: index === currentStep ? 1.2 : 1 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
          <button
            onClick={nextStep}
            className="bg-rizz-pink-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-rizz-pink-600 transition-colors"
          >
            Next ▶️
          </button>
        </div>
      </div>
    </div>
  )
}

