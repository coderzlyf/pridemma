import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
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

const ClassesCard = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={cardVariants}
        className="flex flex-wrap items-center justify-between gap-4 p-4 px-0"
      >
        <h1 className="min-w-72 text-4xl font-black leading-tight tracking-[-0.033em] text-zinc-900 text-left">
          Classes
        </h1>
      </motion.div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 p-0">
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex flex-col gap-4 pb-3 group bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
        >
          <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
              data-alt="A Muay Thai fighter kicking a heavy bag"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAR3PyrwnQ5MFEIaCT-Oh3AP_IM5gFCwZohYWsxe7H7ft-IdEZcpq3fxNwGydIwzV6a1We-fkhSTkfFezsFo9j6sjNQwpCXm2ufE3S5_Iid2yFhQbBDAMM61RnmKDYI-Sif0ZygLyJAUW9U8-BlSfB0Q6DtqtIF0rkcALSGAhXQargUaiTEDmLssdBo9Oi1Z_ex3roSenk_zY3usTLoUlhlyOaXl6uVadZXJeU64xBdwMmq9zyWIysWjZf2xHA_b5Si5egAc5VDkdI")`,
              }}
            ></div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-slate-900 text-lg font-bold leading-normal">
              Muay Thai
            </p>
            <p className="text-slate-500 text-sm font-normal leading-normal">
              The art of eight limbs. Master powerful strikes using fists,
              elbows, knees, and shins.
            </p>
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mt-2">
              All Levels
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex flex-col gap-4 pb-3 group bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
        >
          <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
              data-alt="Two people practicing Brazilian Jiu-Jitsu on a mat"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxnuEK4Xk7dKakbtKLkM1Elxk7fYsW2muePY4004-NKeFqsN2aUgLFGAvcM7PL1dyXfQy5Q88UIANwcq0okhm0YiBRN6cZplgHPQuOQQQiUjvIkmDLDeLG_m7N2O430TRh7mER9ZZW2oo6irSL8W8ksIC8SWVvJq3EqVXD2Fcdsk3Hzcc_Z9ZLTng6CSjWSOHX56qoOcUPtwqM2pHFsfWcSsxCZ8QI_MDWb-toeWQob02hWdPJuYZoq46Fw8O8qev56gQxGGkL1xA")`,
              }}
            ></div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-slate-900 text-lg font-bold leading-normal">
              Brazilian Jiu-Jitsu
            </p>
            <p className="text-slate-500 text-sm font-normal leading-normal">
              Dominate on the ground with leverage and technique. Perfect for
              self-defense and competition.
            </p>
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mt-2">
              All Levels
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex flex-col gap-4 pb-3 group bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
        >
          <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
              data-alt="A boxer training with a speed bag"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAsBYDki9thCH5xlzjEkEUHchiy1H-TMz6LjqKaLtiQmt5GmGw6S0X1iW15rT7PMa7yJ8V7ALyBzwXgSRolV-IxpvLgxoS8P8cdFhAx5ElTGzprPB7UP34tSY6d47SIfzY97lUMcJ145MTR2f5fF95LGwDztt9IKmNPVHGEBlWVFyPf5EhaUzfm-IDAyjAG6MgMunfFtw2e7Ewm5RdwuWpPi26fJgX1GBTnM5F4_Qn-UsKjE2preXWxBKhmT6m49jpYadwbW1fxiLY")`,
              }}
            ></div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-slate-900 text-lg font-bold leading-normal">
              Boxing
            </p>
            <p className="text-slate-500 text-sm font-normal leading-normal">
              Sharpen your footwork, speed, and punching power with our expert
              boxing coaches.
            </p>
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mt-2">
              Beginner
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex flex-col gap-4 pb-3 group bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
        >
          <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
              data-alt="Two wrestlers grappling during a practice session"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBEkoAwrFzDu9TTW4G_1f-U474VTf9Wg_b7yAXSOANeet9KnlNTRKpnROcif3mQ3DdU3t5kwBT6_SR7_jTCbd7wm5N3ql56DJFlAWn47dIAMgUTieMrYau0kFcd3kdRqlkfVI77jZSMxMkSp3BnxOsnzQBsHQXUuDeM8Rz8E1baAEQJMp-PldJpncEDLX5BCdYcTJvdyjAR-YSZ8RkPzzdrej67aGeWCHhfMfXDcIqKoqQXCA_oRFyaPwaZK6oY81Af17SOQVI0hYc")`,
              }}
            ></div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-slate-900 text-lg font-bold leading-normal">
              Wrestling
            </p>
            <p className="text-slate-500 text-sm font-normal leading-normal">
              Build a powerful foundation with fundamental takedowns, throws,
              and control techniques.
            </p>
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mt-2">
              All Levels
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex flex-col gap-4 pb-3 group bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
        >
          <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
              data-alt="An MMA fighter training with focus pads"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVESOlxx-GKTa9_3iKwRgscr3GjGSztLnS5nSkuCVO3j6PNF8V_uxwFORSPJwlgHZtI-e-veJEQ6mlgM3BQup454TToCWqRpP02DYQ6wuXqYvR2Tj5V8NtMEzrr8zCjngVp-mNFWxGGxOncWhNDfdN2NmrilgyH7jKAAfJK5qDxQu7Tk-FdV1EZmJ097CoAKCZXMXUmSLdaeQfl6Dh7bWH_4ZQ-W5xEHpO9LWDtke-ySb-cAfhM-diezI76djRF3v2QF6gCwhAdoM")`,
              }}
            ></div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-slate-900 text-lg font-bold leading-normal">
              MMA Fundamentals
            </p>
            <p className="text-slate-500 text-sm font-normal leading-normal">
              Combine striking and grappling. The essential starting point for
              your MMA journey.
            </p>
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mt-2">
              Beginner
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex flex-col gap-4 pb-3 group bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
        >
          <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
              data-alt="A person lifting a barbell in a gym"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFaUH0154vl9lAner6PYaHsFOVwz523-z-GOaD1g7DGijE-P1pVlMX6UK-W9yhQ5yjNDk8x48qwt3UlXBRpP50oWJl9M-oPAK1lHap9m37-WVfveEWoY5ho7mI_FwzmnwZ0Jgdh-eZ_Orsd3zXexqMcyr_y3vhjkp7Nzr5uW8E5lSDSU9F3iVLdktdNouFF0KllKaF5UuA8m4Ta-os1ZtTpdZzwB_fZY0SNqZpLe3izdvYYqrYEkj1H4gFML0R8oLv8PPOHfYA6pQ")`,
              }}
            ></div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-slate-900 text-lg font-bold leading-normal">
              Strength &amp; Conditioning
            </p>
            <p className="text-slate-500 text-sm font-normal leading-normal">
              Forge elite fitness with functional workouts designed to build
              strength and endurance.
            </p>
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mt-2">
              All Levels
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex flex-col gap-4 pb-3 group bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
        >
          <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
              data-alt="A group of people doing yoga in a studio"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDstYkC1hb6V7Aghjr5eo5xNwkthmMfgVi74RckhJtlYmwWGu4YbZe8PdOn4Wj6ZDCWrAeZGKeeOsTRjo2PjvLhHf3MPSll_bqb2u8XUxuph0Aw2JwM5vaxplaD1Cj9OeOPH13qUNJD1-5M5PWuPp5L1yayOaV4HPzdzsbOR6VAvXrM0nG96JC_uaWptNhtH53GTvW07C78XWSEr-3f-M_VUEPUAo-eVzb6sPK-5VTBzvNH4lRwrIx_UyW7DRFUoqAvbEiL4oTunkg")`,
              }}
            ></div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-slate-900 text-lg font-bold leading-normal">
              Yoga for Fighters
            </p>
            <p className="text-slate-500 text-sm font-normal leading-normal">
              Improve flexibility, balance, and recovery. An essential
              complement to intense training.
            </p>
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mt-2">
              All Levels
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex flex-col gap-4 pb-3 group bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
        >
          <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
              data-alt="Children learning martial arts in a gym"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWgY7BhGA1eRc4o-D8hNABE0LsmpRocXJ4cUTVioRbeFsNp8KGekxn6isYMYwAPs0ZHIeE07sQDq_dwB0B6lCT4t458bckm5Dw1ryXsW5J29LzZ27hmYMyq916JI4j2pYQK3Zlo9ZQVSw9FI3ey1nvTkdzseebwyeygOPiCXc1Gm0No-UtiI7rI7Oj_bzU1NBfpRVy40Gt8xAawy6-3zzCGX2fPz5SoYkLZHdV3xVldwLYUEleQCuzv3AiEf_DA6nsijmboI7M098")`,
              }}
            ></div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-slate-900 text-lg font-bold leading-normal">
              Youth MMA
            </p>
            <p className="text-slate-500 text-sm font-normal leading-normal">
              A fun and safe introduction to mixed martial arts for the next
              generation of athletes.
            </p>
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mt-2">
              Youth
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ClassesCard;
