import { motion, type Variants } from "framer-motion";

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

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

type HeroProps = {
  title: string;
  desc: string;
  image: string;
};

const OurStory = ({ title, desc, image }: HeroProps) => {
  return (
    <motion.div
      className="flex flex-col gap-10 @container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
        {/* Text Side */}
        <motion.div
          variants={textVariants}
          className="flex flex-col gap-4 flex-1 text-left"
        >
          <h2 className="text-black tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
            {title}
          </h2>

          <p className="text-slate-600 text-base font-normal leading-normal max-w-[720px]">
            {desc}
          </p>
        </motion.div>

        {/* Image Side */}
        <motion.div
          variants={imageVariants}
          className="w-full flex-1 bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
          data-alt="Black and white photo of the gym's founder, Mark Riley"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      </div>
    </motion.div>
  );
};

export default OurStory;
