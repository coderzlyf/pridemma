import { useRef } from "react";
import PopupForm from "../PopupForm/PopupForm";
import UEHeader from "../UEHeader/UEHeader";
import { motion, type Variants } from "framer-motion";
import { useAppSelector } from "../../hooks";
import PopUp from "../PopUp/Popup";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: { scale: 1.08, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const MainEvent = () => {
  const detailsRef = useRef<HTMLDialogElement>(null);
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const data = useAppSelector((state: any) => state.config.data);
  const mainEvent = data?.upcomingEvents?.latestEvent;

  return (
    <>
      <div>
        <UEHeader />

        <motion.div
          className="group relative rounded-2xl overflow-hidden bg-white shadow-soft border border-slate-100 flex flex-col lg:flex-row hover:shadow-xl transition-all duration-300"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            className="lg:w-3/5 min-h-[300px] lg:h-auto bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${mainEvent.image})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 lg:from-transparent lg:bg-gradient-to-r lg:via-transparent lg:to-white" />

            <motion.div
              variants={itemVariants}
              className="absolute top-6 left-6 flex gap-2"
            >
              <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 uppercase tracking-wider rounded-md shadow-lg shadow-blue-900/20">
                {mainEvent.primaryBadge}
              </span>
              <span className="bg-white/90 backdrop-blur text-slate-800 text-xs font-bold px-3 py-1.5 uppercase tracking-wider rounded-md shadow-sm">
                {mainEvent.secondaryBadge}
              </span>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center gap-6 relative z-10">
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 text-primary font-bold text-sm uppercase tracking-wider bg-blue-50 w-fit px-3 py-1 rounded-md"
            >
              <span className="material-symbols-outlined text-xl">
                calendar_month
              </span>
              <span>{mainEvent.date}</span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-3">
                {mainEvent.title}
              </h3>
              <p className="text-slate-500 text-base lg:text-lg leading-relaxed">
                {mainEvent.description}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 mt-2 justify-center"
            >
              {/* <button
                className="w-full sm:w-auto h-12 px-8 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-0.5"
                onClick={() => modalRef.current?.showModal()}
              >
                {mainEvent.primaryButton}
              </button>

              <button className="w-full sm:w-auto h-12 px-8 rounded-xl border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 font-bold transition-colors">
                {mainEvent.secondaryButton}
              </button> */}

              <button
                className="w-full sm:w-auto h-12 px-8 rounded-xl bg-slate-200 text-slate-500 font-bold cursor-not-allowed"
                disabled
                onClick={() => modalRef.current?.showModal()}
              >
                {mainEvent.primaryButton}
              </button>

              {/* <button className="w-full sm:w-auto h-12 px-8 rounded-xl border-2 border-slate-100 text-slate-300 font-bold cursor-not-allowed">
                {mainEvent.secondaryButton}
              </button> */}
              <button
                onClick={() => detailsRef.current?.showModal()}
                className="w-full cursor-pointer sm:w-auto h-12 px-8 rounded-xl border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 font-bold transition-colors"
              >
                {mainEvent.secondaryButton}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <PopupForm ref={modalRef} />
      {/* Terms & Conditions */}
      <PopUp ref={detailsRef} title="Event Details">
        <div className="space-y-4 text-sm text-slate-700">
          <p>We’re letting you in on a secret… Stay tuned!</p>
        </div>
      </PopUp>
    </>
  );
};

export default MainEvent;
