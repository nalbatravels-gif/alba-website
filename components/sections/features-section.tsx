"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, MessageCircle, DollarSign } from "lucide-react"

function PaidAdsAnimation() {
  const [activeAd, setActiveAd] = useState(0)
  const platforms = ["Google", "Meta", "LinkedIn"]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAd((prev) => (prev + 1) % platforms.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-3">
      <div className="flex gap-2">
        {platforms.map((platform, i) => (
          <motion.div
            key={platform}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              i === activeAd
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                : "bg-foreground/10 text-foreground/60"
            }`}
            animate={{ scale: i === activeAd ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {platform}
          </motion.div>
        ))}
      </div>
      <motion.div
        className="text-2xl md:text-3xl font-sans font-bold text-foreground"
        key={activeAd}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
      >
        ${(activeAd + 1) * 5}k
      </motion.div>
      <span className="text-xs text-muted-foreground">Monthly Ad Spend</span>
    </div>
  )
}

function CRMAnimation() {
  const [progress, setProgress] = useState(0)
  const steps = [
    { icon: Mail, label: "Email" },
    { icon: MessageCircle, label: "Chat" },
    { icon: DollarSign, label: "Money" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev + 1) % 4)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <div className="flex items-center gap-2">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <div key={step.label} className="flex items-center">
              <motion.div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                  i < progress
                    ? "bg-gradient-to-br from-purple-600 to-pink-600 text-white"
                    : "bg-foreground/10 text-foreground/60"
                }`}
                animate={{ scale: i === progress - 1 ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="w-5 h-5" />
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div
                  className="w-4 h-0.5 mx-1"
                  animate={{
                    background:
                      i < progress - 1
                        ? "linear-gradient(to right, rgb(147, 51, 234), rgb(219, 39, 119))"
                        : "hsl(var(--foreground) / 0.1)",
                  }}
                />
              )}
            </div>
          )
        })}
      </div>
      <span className="text-sm text-muted-foreground">Automated Pipeline</span>
    </div>
  )
}

function LeadGenAnimation() {
  const [stage, setStage] = useState(0)
  const funnel = [
    { label: "Traffic", value: 10000 },
    { label: "Leads", value: 1000 },
    { label: "Sales", value: 100 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % funnel.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-3">
      <div className="flex flex-col items-center gap-1">
        {funnel.map((item, i) => (
          <motion.div
            key={item.label}
            className="flex items-center justify-center rounded"
            style={{ width: `${120 - i * 30}px` }}
            animate={{
              background:
                i === stage
                  ? "linear-gradient(to right, rgb(147, 51, 234), rgb(219, 39, 119))"
                  : "hsl(var(--foreground) / 0.15)",
              height: i === stage ? "36px" : "28px",
            }}
            transition={{ duration: 0.3 }}
          >
            <span className={`text-xs font-medium ${i === stage ? "text-white" : "text-foreground/60"}`}>
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="text-xl md:text-2xl font-bold text-foreground mt-2"
        key={stage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {funnel[stage].value.toLocaleString()}
      </motion.div>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Top Services
        </motion.p>

        <div className="flex flex-col gap-6">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-secondary rounded-xl p-8 min-h-[340px] flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              data-clickable
            >
              <div className="flex-1">
                <PaidAdsAnimation />
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-xl text-foreground">Paid Ads</h3>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                  I'll plan, run and optimise your strategic paid campaigns across Meta, Google, Pinterest, Snapchat and
                  more with the goal to increase ROAS and decrease CAC.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-secondary rounded-xl p-8 min-h-[340px] flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.96 }}
              data-clickable
            >
              <div className="flex-1">
                <CRMAnimation />
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-xl text-foreground">CRM Automations</h3>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                  I'll automate communications that improve retention and increase LTV of your existing database.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-secondary rounded-xl p-8 min-h-[340px] flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.96 }}
              data-clickable
            >
              <div className="flex-1">
                <LeadGenAnimation />
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-xl text-foreground">Lead Generation</h3>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                  I'll create automated workflows that nurture and convert leads seamlessly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
