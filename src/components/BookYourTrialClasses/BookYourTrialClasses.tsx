import { motion, type Variants } from "framer-motion";
import { useAppSelector } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "../../utils/analytics";

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const BookYourTrialClasses = () => {
  const data = useAppSelector((state: any) => state.config.data);
  const bytc = data?.classes?.bookYourFreeTrial;
  const navigate = useNavigate();
  const handleFreePass = () => {
    navigate("/GetFreeTrial");
    trackEvent("CTA", "Click", "Get Your Free Pass");
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="@container bg-slate-900 rounded-xl shadow-lg"
    >
      <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20 items-center">
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-2 text-center"
        >
          <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
            {bytc.heading}
          </h1>
          <p className="text-slate-300 text-base font-normal leading-normal max-w-[720px]">
            {bytc.description}
          </p>
        </motion.div>
        <div className="flex flex-1 justify-center">
          <div className="flex justify-center">
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              onClick={handleFreePass}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
            >
              <span className="truncate">{bytc.button}</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookYourTrialClasses;
