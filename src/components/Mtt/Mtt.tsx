import { motion, type Variants } from "framer-motion";
import { useAppSelector } from "../../hooks";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
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

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Mtt = () => {
  const data = useAppSelector((state: any) => state.config.data);
  const team = data?.aboutUs?.team;
  return (
    <motion.div
      className="flex flex-col gap-10 @container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-black text-center text-[32px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5"
        variants={cardVariants}
      >
        {team.title}
      </motion.h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
        {/* CARD 1 */}
        {team.persons.map((item: any, key: number) => (
          <motion.div
            key={key}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="flex flex-col gap-4 text-center items-center"
          >
            <motion.div
              variants={imageVariants}
              className="w-40 h-40 bg-center bg-no-repeat aspect-square bg-cover rounded-full"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            />
            <div>
              <p className="text-black text-lg font-bold leading-normal">
                {item.name}
              </p>
              <p className="text-primary text-sm font-medium leading-normal">
                {item.role}
              </p>
              <p className="text-slate-600 text-sm font-normal leading-normal mt-2">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Mtt;
