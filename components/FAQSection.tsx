'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDownIcon } from "lucide-react";
import { GridBackground } from "./GridBackground";

const FAQ_ITEMS = [
  {
    question: "Can I use AI Studio images for commercial projects?",
    answer:
      "Yes. All images you create and download are yours to use commercially, subject to our terms of service. We encourage you to review any applicable usage rules for third-party platforms or marketplaces.",
  },
  {
    question: "How long do you keep my uploaded images?",
    answer:
      "Your uploaded and generated images are kept while your account is active and are deleted when you request account removal. We never share your images with third parties without your consent.",
  },
  {
    question: "What image formats are supported?",
    answer:
      "AI Studio accepts JPEG, PNG, and WebP uploads. Output images are delivered in the best format for your selected style and quality settings.",
  },
  {
    question: "How fast are the image restyles?",
    answer:
      "Most restyling jobs complete within seconds. Performance depends on your selected style and the current system load, but we keep the workflow smooth and predictable.",
  },
  {
    question: "Can I change my subscription plan later?",
    answer:
      "Yes. You can upgrade, downgrade, or cancel your plan at any time from your account settings without losing access to previously created images.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <GridBackground  className="section-shell mt-6 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div id="faq" className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="hero-pill caps-md inline-flex items-center rounded-full px-4 py-2 text-xs font-medium uppercase text-primary">
            FAQ
          </div>

          <h2 className="mt-6 font-sans text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Frequently asked questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Answers to the most common questions about image processing, privacy, and account setup.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="space-y-4">
            {FAQ_ITEMS.filter((_, index) => index % 2 === 0).map((item, index) => {
              const originalIndex = index * 2;
              const isOpen = openIndex === originalIndex;

              return (
                <article
                  key={item.question}
                  className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-sm transition-shadow duration-200 hover:shadow-xl hover:shadow-primary/10"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : originalIndex)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left text-base font-semibold text-foreground"
                  >
                    <span>{item.question}</span>
                    <ChevronDownIcon
                      className={`size-5 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0 "} cursor-pointer`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key={`content-${originalIndex}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden px-6"
                      >
                        <p className="mt-0 pb-6 text-sm leading-7 text-muted-foreground">
                          {item.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.filter((_, index) => index % 2 === 1).map((item, index) => {
              const originalIndex = index * 2 + 1;
              const isOpen = openIndex === originalIndex;

              return (
                <article
                  key={item.question}
                  className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-sm transition-shadow duration-200 hover:shadow-xl hover:shadow-primary/10"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : originalIndex)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left text-base font-semibold text-foreground"
                  >
                    <span>{item.question}</span>
                    <ChevronDownIcon
                      className={`size-5 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"} cursor-pointer`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key={`content-${originalIndex}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden px-6"
                      >
                        <p className="mt-0 pb-6 text-sm leading-7 text-muted-foreground">
                          {item.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </GridBackground>
  );
}
