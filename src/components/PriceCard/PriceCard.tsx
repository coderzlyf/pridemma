import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const PriceCard = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-gray-900  text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-7 pt-5 text-center">
        Choose Your Membership
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-gray-200  bg-white  p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-gray-900  text-base font-bold leading-tight text-left">
              Fighter's Foundation
            </h3>
            <p className="flex items-baseline gap-1 text-gray-900 ">
              <span className="text-gray-900 text-4xl font-black leading-tight tracking-[-0.033em]">
                $99
              </span>
              <span className="text-gray-900  text-base font-bold leading-tight">
                / month
              </span>
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 hover:bg-primary/20 transition-colors text-primary text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Choose Plan</span>
          </motion.button>
          <div className="flex flex-col gap-3 pt-2">
            <div className="text-[13px] font-normal leading-normal flex items-center gap-3 text-gray-700 ">
              <span className="material-symbols-outlined text-primary text-lg">
                check
              </span>
              24/7 Gym Access
            </div>
            <div className="text-[13px] font-normal leading-normal flex items-center gap-3 text-gray-700 ">
              <span className="material-symbols-outlined text-primary text-lg">
                check
              </span>
              Unlimited Group Fitness Classes
            </div>
            <div className="text-[13px] font-normal leading-normal flex items-center gap-3 text-gray-700 ">
              <span className="material-symbols-outlined text-primary text-lg">
                check
              </span>
              Access to MMA Fundamentals
            </div>
            <div className="text-[13px] font-normal leading-normal flex items-center gap-3 text-gray-700 ">
              <span className="material-symbols-outlined text-primary text-lg">
                check
              </span>
              Locker Room Access
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -12, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 280, damping: 18 }}
          className="flex flex-1 flex-col gap-4 rounded-lg border-2 border-solid border-primary bg-white  p-6 relative shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-900  text-base font-bold leading-tight">
                Champion's Circle
              </h3>
              <p className="text-white text-xs font-medium leading-normal tracking-[0.015em] rounded-full bg-primary px-3 py-1 text-center">
                Most Popular
              </p>
            </div>
            <p className="flex items-baseline gap-1 text-gray-900 ">
              <span className="text-gray-900  text-4xl font-black leading-tight tracking-[-0.033em]">
                $149
              </span>
              <span className="text-gray-900  text-base font-bold leading-tight">
                / month
              </span>
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-red-700 transition-colors"
          >
            <span className="truncate">Choose Plan</span>
          </motion.button>
          <div className="flex flex-col gap-3 pt-2">
            <div className="text-[13px] font-normal leading-normal flex items-center gap-3 text-gray-700 ">
              <span className="material-symbols-outlined text-primary text-lg">
                check
              </span>
              All Fighter's Foundation benefits
            </div>
            <div className="text-[13px] font-normal leading-normal flex items-center gap-3 text-gray-700 ">
              <span className="material-symbols-outlined text-primary text-lg">
                check
              </span>
              Unlimited Advanced MMA Classes
            </div>
            <div className="text-[13px] font-normal leading-normal flex items-center gap-3 text-gray-700 ">
              <span className="material-symbols-outlined text-primary text-lg">
                check
              </span>
              Access to Sparring Sessions
            </div>
            <div className="text-[13px] font-normal leading-normal flex items-center gap-3 text-gray-700 ">
              <span className="material-symbols-outlined text-primary text-lg">
                check
              </span>
              1 Personal Training Session/Month
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-gray-200  bg-white  p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-900  text-base font-bold leading-tight">
                Annual Pride
              </h3>
              <p className="text-white text-xs font-medium leading-normal tracking-[0.015em] rounded-full bg-primary/70  px-3 py-1 text-center">
                Best Value
              </p>
            </div>
            <p className="flex items-baseline gap-1 text-gray-900 ">
              <span className="text-gray-900  text-4xl font-black leading-tight tracking-[-0.033em]">
                $1500
              </span>
              <span className="text-gray-900  text-base font-bold leading-tight">
                / year
              </span>
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 hover:bg-primary/20 transition-colors text-primary text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Choose Plan</span>
          </motion.button>
          <div className="flex flex-col gap-3 pt-2">
            <div className="text-[13px] font-normal leading-normal flex items-center gap-3 text-gray-700 ">
              <span className="material-symbols-outlined text-primary text-lg">
                check
              </span>
              All Champion's Circle benefits
            </div>
            <div className="text-[13px] font-normal leading-normal flex items-center gap-3 text-gray-700 ">
              <span className="material-symbols-outlined text-primary text-lg">
                check
              </span>
              12 Months for the Price of 10
            </div>
            <div className="text-[13px] font-normal leading-normal flex items-center gap-3 text-gray-700 ">
              <span className="material-symbols-outlined text-primary text-lg">
                check
              </span>
              Free Club T-Shirt
            </div>
            <div className="text-[13px] font-normal leading-normal flex items-center gap-3 text-gray-700 ">
              <span className="material-symbols-outlined text-primary text-lg">
                check
              </span>
              Priority Class Booking
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PriceCard;
