import { motion, type Variants } from "framer-motion";
import { useAppSelector } from "../../hooks";

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

const UEHeader = () => {
  const data = useAppSelector((state: any) => state.config.data);
  const ueContent = data?.upcomingEvents?.header;
  return (
    <motion.div
      className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="flex flex-col gap-1" variants={itemVariants}>
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold tracking-tight text-slate-900"
        >
          {ueContent.heading}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-slate-500 font-medium text-left"
        >
          {ueContent.description}
        </motion.p>
      </motion.div>

      {/* If you re-enable filters later, wrap them like this:
      
      <motion.div variants={itemVariants}>
        ...buttons
      </motion.div>
      
      */}
    </motion.div>
  );
};

export default UEHeader;
