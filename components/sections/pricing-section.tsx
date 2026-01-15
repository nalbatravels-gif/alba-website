"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"

export function PricingSection() {
  const handleContactClick = () => {
    window.location.href = "mailto:albasoria@icloud.com?subject=Request a quote"
  }

  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Request a quote</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Ready to scale your business with data-driven growth marketing? Get in touch and let&apos;s discuss your
            goals.
          </p>

          <motion.button
            onClick={handleContactClick}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            Reach Out
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
