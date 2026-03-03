import { motion, type Variants, AnimatePresence } from "framer-motion";
import { useState } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const faqs = [
  {
    question: "What are the gym's hours?",
    answer:
      "Our gym is accessible 24/7 for members. Staffed hours for sign-ups and assistance are from 8 AM to 8 PM on weekdays and 10 AM to 6 PM on weekends.",
  },
  {
    question: "Can I try a class before signing up?",
    answer:
      "Absolutely! We offer a free trial class for all new visitors. You can book your trial class through our schedule page or by contacting us directly.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We offer flexible membership options. Our monthly plans can be canceled with 30 days' notice. Annual memberships are non-refundable but offer the best value.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        variants={itemVariants}
        className="text-gray-900 text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-center"
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="w-full max-w-2xl flex flex-col gap-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="rounded-lg bg-white border border-gray-200 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 font-medium text-gray-900 text-left"
              >
                {faq.question}

                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="leading-0"
                >
                  <span className="material-symbols-outlined">expand_more</span>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 overflow-hidden"
                  >
                    <p className="pb-4 text-gray-700 text-left">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Faq;
