"use client"

import { motion } from "framer-motion"
import { Linkedin, Youtube, Instagram } from "lucide-react"

export function FooterSection() {
  const socials = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/alba-soria-2288a28b/" },
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@NALBATRAVELS" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/nalbatravels/" },
  ]

  return (
    <footer className="relative bg-background px-6 py-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            className="text-muted-foreground text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            © 2025 Digital Growth Marketer. All rights reserved.
          </motion.p>

          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {socials.map((social, i) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                  data-clickable
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
