"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const caseStudies = [
  {
    title: "Paid Ads",
    description:
      "Whether you're an e-commerce brand starting out or a larger brand with bigger budgets, I can run your paid ads across Meta, Google and other platforms to optimise your CAC and increase ROAS. Things I have achieved with other clients:\n\n• **Decreased ROAS** by 50% in 2 months\n• Turned a new brand ROAS-positive in 3 months\n• Built a high-performing paid ads team\n• Automated paid ads **reporting & insights**",
    image: "/images/card-1.jpeg",
    metric: "24/7 Ads Management",
  },
  {
    title: "CRM Automation",
    description:
      "I design and implement CRM and automation systems that capture, nurture, and convert leads you'd otherwise lose - while reducing manual work for your team. From setup to optimisation, I make sure your CRM works as a growth engine, not just a database.\n\nWhat I help clients achieve:\n\n• Capture and recover lost leads through **automated follow-ups**\n• Build CRM workflows across email, WhatsApp, and **lead routing**\n• **Increase conversion rates** with personalised, timely automation\n• Connect tools using Make / Zapier to streamline operations",
    image: "/images/card-2.jpeg",
    metric: "Always-On Lead Nurturing",
  },
  {
    title: "Marketing Funnel Optimisation",
    description:
      "I optimise your entire marketing funnel, from first click to conversion, ensuring every step works together to maximise acquisition and revenue. This isn't guesswork - it's data-driven optimisation backed by reporting and experimentation.\n\nWhat I've delivered for clients:\n\n• Improved website and landing page **conversion rates**\n• Identified and fixed drop-offs across the funnel\n• Built clear **funnel dashboards** to track performance end-to-end\n• Scaled growth through continuous **testing and optimisation**",
    image: "/images/card-3.jpeg",
    metric: "Full Funnel Marketing",
  },
]

export function InsightsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const renderDescription = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/)
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-semibold text-foreground">
            {part.slice(2, -2)}
          </strong>
        )
      }
      return part
    })
  }

  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How we can work together
        </motion.p>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
                <img
                  src={caseStudies[currentIndex].image || "/placeholder.svg"}
                  alt={caseStudies[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-medium text-sm">
                  {caseStudies[currentIndex].metric}
                </div>
              </div>

              {/* Content */}
              <div className="order-1 md:order-2">
                <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                  {caseStudies[currentIndex].title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed whitespace-pre-line">
                  {renderDescription(caseStudies[currentIndex].description)}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={goToPrev}
              className="w-12 h-12 rounded-full bg-secondary hover:bg-accent transition-colors flex items-center justify-center"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            <div className="flex gap-2">
              {caseStudies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? "bg-primary w-8" : "bg-foreground/20"
                  }`}
                  aria-label={`Go to case study ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-secondary hover:bg-accent transition-colors flex items-center justify-center"
              aria-label="Next case study"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
