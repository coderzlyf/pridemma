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
      staggerChildren: 0.15,
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

const ContactHeader = () => {
  const data = useAppSelector((state: any) => state.config.data);
  const contactHeader = data?.contactUs;
  return (
    <motion.div
      className="flex flex-wrap justify-between gap-4 text-left"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.div
        className="flex min-w-72 flex-col gap-3"
        variants={containerVariants}
      >
        <motion.p
          variants={itemVariants}
          className="text-background-dark text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]"
        >
          {contactHeader.header}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-background-dark/60 text-base font-normal leading-normal max-w-md"
        >
          {contactHeader.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default ContactHeader;
