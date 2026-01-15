"use client"

import { motion } from "framer-motion"

const brandLogos = [
  "/images/microsoft.png",
  "/images/nike.png",
  "/images/pg.png",
  "/images/batelco.png",
  "/images/wearthat.png",
  "/images/6thstreet.png",
  "/images/zarahome.png",
]

export function CarouselSection() {
  // Duplicate for seamless loop
  const items = [...brandLogos, ...brandLogos]

  return (
    <section className="bg-gradient-to-br from-purple-600 to-pink-600 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Brands I&apos;ve worked with
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-xl overflow-hidden shadow-2xl bg-white flex items-center justify-center p-8"
              data-clickable
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Brand logo ${(i % brandLogos.length) + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
