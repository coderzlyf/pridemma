import { motion, type Variants } from "framer-motion";
import { handleFreePass, useAppSelector } from "../../hooks";
import { useNavigate } from "react-router-dom";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const BookYourTrial = () => {
  const data = useAppSelector((state: any) => state.config.data);
  const bytAboutUs = data?.aboutUs?.bookYourFreeTrial;
  const navigate = useNavigate();
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="bg-white shadow-sm rounded-xl p-8 sm:p-12 flex flex-col items-center justify-center text-center gap-6">
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <h2 className="text-black text-3xl font-bold leading-tight tracking-[-0.033em]">
            {bytAboutUs.heading}
          </h2>
          <p className="text-slate-600 text-base font-normal leading-normal max-w-xl">
            {bytAboutUs.description}
          </p>
        </motion.div>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={handleFreePass}
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">{bytAboutUs.button}</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default BookYourTrial;
