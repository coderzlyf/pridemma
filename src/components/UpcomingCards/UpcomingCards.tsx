import { useRef } from "react";
import PopupForm from "../PopupForm/PopupForm";
import { motion, type Variants } from "framer-motion";

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const UpcomingCards = () => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  return (
    <>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.article
          variants={cardVariants}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100 group"
        >
          <div
            className="h-56 bg-cover bg-center relative overflow-hidden"
            data-alt="Close up of brazilian jiu jitsu belt and gi texture"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAHUPkyY-c3oBR81ogE_Bf8d9uokADpY5ocfSZoMt4sP-JemS1zTYGI5aMZReVljcZNbqhiigc-enNZi0hlq5NG23AqNdoVg5GyI1xn3SEAPglVAGE1yAqG9pJs8dDfydir_hPLebBnc7tBuYVA74B6JpE-r5eZ50Z0K9F6J0Aid1pTFKeAxmvZcWs3ggrcHkv7vXmNYdkAdb-NNVR9GpYLKtF-6gJ5qXs4l7mnHdBfVADpLb0Q8M1GnLZqRGQZ0l1d8LSWs9uAuqk')
        `,
            }}
          >
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-md shadow-sm border border-slate-100">
              Seminar
            </div>
            <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">
                schedule
              </span>
              Oct 12 • 10:00 AM
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1 gap-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors">
                Intro to BJJ Seminar
              </h3>
            </div>
            <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
              Perfect for beginners. Learn the fundamentals of Brazilian
              Jiu-Jitsu defense and positioning from black belt instructors.
            </p>
            <div className="mt-auto pt-5 flex items-center justify-between border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                24 spots left
              </div>
              <button
                className="text-primary hover:text-blue-700 font-bold text-sm flex items-center gap-1 transition-colors"
                onClick={() => modalRef.current?.showModal()}
              >
                Register
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </motion.article>
        <motion.article
          variants={cardVariants}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100 group"
        >
          <div
            className="h-56 bg-cover bg-center relative overflow-hidden"
            data-alt="Two fighters sparring with protective gear in a gym"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCt62T6SSymCazfj93kobHfz8PQ8YKSN6FQPgsVKAwx_a4C0L7d6MRfU7oRjH9Muk-CPVP5NBeuDEmJUJP4HK3xllEN8-6jNFTv6QP6r9r41_JsJj5KA_DdZSNYse_UZRx_qGKR6P0oWLlbVHrvJMUE0KaGiMJmG8FEZyemQ4arIfAJea7P4cLW3NMB75Sdc-Xo6o2Gzzs4twYUOKm4LvPweHQXba6lOB25FKEKDh3LA5rL20i4rbLJ_H8-guRnwjr4AzqkG9buLg4')
        `,
            }}
          >
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-md shadow-sm border border-slate-100">
              Sparring
            </div>
            <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">
                schedule
              </span>
              Oct 18 • 6:00 PM
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1 gap-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors">
                Inter-Club Sparring Night
              </h3>
            </div>
            <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
              Open mats for all levels. Bring your gear and test your skills in
              a controlled environment with fighters from other gyms.
            </p>
            <div className="mt-auto pt-5 flex items-center justify-between border-t border-slate-100">
              <span className="text-sm font-bold text-slate-400">
                Free for members
              </span>
              <button
                className="text-primary hover:text-blue-700 font-bold text-sm flex items-center gap-1 transition-colors"
                onClick={() => modalRef.current?.showModal()}
              >
                Register
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </motion.article>
        <motion.article
          variants={cardVariants}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100 group"
        >
          <div
            className="h-56 bg-cover bg-center relative overflow-hidden"
            data-alt="Healthy meal prep bowls with vegetables and protein"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFiCe7Ie3K_lyJ074knASu3LdxQ6jhbaWbU3YIgt_hiOIU3Cc8xXQE4uVHkSKEVjoPhrGyTXy8slZu8tRvyQa5nkCcK9Mbp--kTfqhi9akjm2BCYIZHf5JwPf2UO2MTseJDwT37wZjwRY-ZUh6CSGmKpuCL7HFz_0pkj2vFuPIxw_8rldraw8yWJw222042THd7esz6K3ILrzKuGBHK9e8sRQN4AVrGbTRyA0M6cZTqr7luPGqO6I5enP2tsySMfTk9vRMoMmwYJk')`,
            }}
          >
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-md shadow-sm border border-slate-100">
              Workshop
            </div>
            <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">
                schedule
              </span>
              Oct 20 • 1:00 PM
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1 gap-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors">
                Nutrition for Fighters
              </h3>
            </div>
            <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
              Fuel your body right. Learn meal prep strategies, weight cutting
              safety, and supplement guides for peak performance.
            </p>
            <div className="mt-auto pt-5 flex items-center justify-between border-t border-slate-100">
              <span className="text-sm font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded">
                $20 Entry
              </span>
              <button
                className="text-primary hover:text-blue-700 font-bold text-sm flex items-center gap-1 transition-colors"
                onClick={() => modalRef.current?.showModal()}
              >
                Register
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </motion.article>
        <motion.article
          variants={cardVariants}
          className="flex flex-col bg-slate-50 rounded-2xl overflow-hidden shadow-none border border-slate-200 opacity-80 hover:opacity-100 transition-opacity"
        >
          <div
            className="h-56 bg-cover bg-center relative overflow-hidden grayscale"
            data-alt="Muay Thai kickboxing pads and gloves"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDjcbovvVz6sorvbRBE79ybN_BnP1xpcM-YuF4Qpqe5_hLS_yx6UhvfeiHvL8WRdkYfweL3LJ9qHQcNPPrGbhKnlsxtPQNobEiOf--G9jegN8PXmjVUQowSMlGJ6K_eSdq99DS7fy8Pi6b6pfpLn9cVRG0dL5lpYl494k0peJt3OwEWcFzmztEZqqV6nWW_dAaIm7lsU6hE05YZA8DMCFsakUMqeR1PSe-XRx24uPxWCIuMR5Itg3Fxi3f9ZESuibwdr5D-BUM3tWc')`,
            }}
          >
            <div className="absolute inset-0 bg-white/20"></div>
            <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[1px]">
              <span className="bg-rose-500 text-white font-black px-6 py-2 rounded-lg uppercase tracking-widest text-sm shadow-xl transform -rotate-6 border-2 border-white">
                Sold Out
              </span>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1 gap-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-slate-400 leading-snug">
                Muay Thai Masterclass
              </h3>
            </div>
            <p className="text-sm text-slate-400 line-clamp-2">
              Advanced striking techniques with Coach Silva. Focus on clinch
              work and elbows.
            </p>
            <div className="mt-auto pt-5 flex items-center justify-between border-t border-slate-200">
              <span className="text-sm font-medium text-slate-400">
                Full Capacity
              </span>
              <button className="text-slate-400 font-bold text-sm flex items-center gap-1 cursor-not-allowed">
                Join Waitlist
              </button>
            </div>
          </div>
        </motion.article>
      </motion.div>
      <PopupForm ref={modalRef} />
    </>
  );
};

export default UpcomingCards;
