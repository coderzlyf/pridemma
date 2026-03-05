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
      staggerChildren: 0.1,
    },
  },
};

// const columnVariants: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: [0.16, 1, 0.3, 1],
//       staggerChildren: 0.08,
//     },
//   },
// };

// const cardVariants: Variants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.4,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

type ClassItem = {
  title: string;
  time: string;
  coach: string;
  color: "blue" | "red" | "green" | "purple" | "yellow";
};

type DaySchedule = {
  day: string;
  class: ClassItem[] | "Closed";
};

type ClassSchedule = {
  hero: {
    classDetails: DaySchedule[];
  };
};

const ClassSchedule = () => {
  const data = useAppSelector((state: any) => state.config.data);
  const classSchedule = data?.classes?.classSchedule;
  return (
    <motion.div
      className="w-full max-w-7xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 px-0">
        <h1 className="min-w-72 text-4xl font-black leading-tight tracking-[-0.033em] text-zinc-900 text-left">
          {classSchedule.hero.title}
        </h1>
      </div>
      {/* <div className="flex flex-wrap gap-3">
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-zinc-900 px-4 text-white shadow-sm hover:bg-zinc-800 transition-colors">
          <p className="text-sm font-medium leading-normal">All Classes</p>
        </button>
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white border border-zinc-200 px-4 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm">
          <p className="text-sm font-medium leading-normal">MMA</p>
        </button>
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/10 border border-primary/20 px-4 text-primary hover:bg-primary/20 transition-colors">
          <p className="text-sm font-medium leading-normal">BJJ</p>
        </button>
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white border border-zinc-200 px-4 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm">
          <p className="text-sm font-medium leading-normal">Fitness</p>
        </button>
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white border border-zinc-200 px-4 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm">
          <p className="text-sm font-medium leading-normal">Kids</p>
        </button>
      </div> */}
      <motion.div
        variants={containerVariants}
        className=" grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 shadow-sm md:grid-cols-7"
      >
        {classSchedule.hero.classDetails.map((item: any, key: number) => (
          <div
            key={key}
            className="hidden bg-zinc-100 p-4 text-center text-sm font-bold uppercase tracking-wider text-zinc-600 md:block border-b border-zinc-200"
          >
            {item.day}
          </div>
        ))}

        {classSchedule.hero.classDetails.map((day: DaySchedule) => (
          <motion.div
            key={day.day}
            className="flex flex-col gap-3 bg-white p-2 md:p-3 min-h-[200px]"
          >
            <div className="block p-2 text-center text-sm font-bold uppercase tracking-wider text-zinc-600 md:hidden bg-zinc-50 rounded mb-2 border border-zinc-100">
              {day.day}
            </div>

            {Array.isArray(day.class) ? (
              day.class.map((cls: ClassItem, index: number) => {
                // Map color to Tailwind classes to avoid purge issues
                const colorClasses: Record<string, string> = {
                  blue: "border-blue-500 bg-blue-50 hover:bg-blue-100 group-hover:text-blue-700",
                  red: "border-red-500 bg-red-50 hover:bg-red-100 group-hover:text-red-700",
                  green:
                    "border-green-500 bg-green-50 hover:bg-green-100 group-hover:text-green-700",
                  purple:
                    "border-purple-500 bg-purple-50 hover:bg-purple-100 group-hover:text-purple-700",
                  yellow:
                    "border-yellow-500 bg-yellow-50 hover:bg-yellow-100 group-hover:text-yellow-700",
                };

                const classes = colorClasses[cls.color];

                return (
                  <div
                    key={index}
                    className={`rounded-lg min-h-32.5 border-l-4 p-3 shadow-sm transition-all hover:shadow-md cursor-pointer group ${classes}`}
                  >
                    <p className="font-bold text-zinc-900">{cls.title}</p>
                    <p className="text-sm font-medium text-zinc-600 mt-1">
                      {cls.time}
                    </p>
                    <p className="text-xs text-zinc-500 mt-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        person
                      </span>
                      {cls.coach}
                    </p>
                  </div>
                );
              })
            ) : (
              <div className="flex h-full items-center justify-center rounded-lg p-3 border border-dashed border-zinc-300 bg-white">
                <p className="text-sm font-medium text-zinc-400">{day.class}</p>
              </div>
            )}
          </motion.div>
        ))}
        {/* <motion.div
          variants={columnVariants}
          className="flex flex-col gap-3 bg-white p-2 md:p-3 min-h-[200px]"
        >
          <div className="block p-2 text-center text-sm font-bold uppercase tracking-wider text-zinc-600 md:hidden bg-zinc-50 rounded mb-2 border border-zinc-100">
            Monday
          </div>
          <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-3 shadow-sm transition-all hover:shadow-md hover:bg-blue-100/50 cursor-pointer group">
            <p className="font-bold text-zinc-900 group-hover:text-blue-700">
              BJJ Fundamentals
            </p>
            <p className="text-sm font-medium text-zinc-600 mt-1">
              6:00 - 7:00 AM
            </p>
            <p className="text-xs text-zinc-500 mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                person
              </span>{" "}
              Coach Ana
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-3 shadow-sm transition-all hover:shadow-md hover:bg-red-100/50 cursor-pointer group">
            <p className="font-bold text-zinc-900 group-hover:text-red-700">
              Muay Thai
            </p>
            <p className="text-sm font-medium text-zinc-600 mt-1">
              5:00 - 6:00 PM
            </p>
            <p className="text-xs text-zinc-500 mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                person
              </span>{" "}
              Coach Mike
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={columnVariants}
          className="flex flex-col gap-3 bg-white p-2 md:p-3 min-h-[200px]"
        >
          <div className="block p-2 text-center text-sm font-bold uppercase tracking-wider text-zinc-600 md:hidden bg-zinc-50 rounded mb-2 border border-zinc-100">
            Tuesday
          </div>
          <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-3 shadow-sm transition-all hover:shadow-md hover:bg-green-100/50 cursor-pointer group">
            <p className="font-bold text-zinc-900 group-hover:text-green-700">
              Strength &amp; Cond.
            </p>
            <p className="text-sm font-medium text-zinc-600 mt-1">
              6:00 - 7:00 AM
            </p>
            <p className="text-xs text-zinc-500 mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                person
              </span>{" "}
              Coach Sara
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-3 shadow-sm transition-all hover:shadow-md hover:bg-purple-100/50 cursor-pointer group">
            <p className="font-bold text-zinc-900 group-hover:text-purple-700">
              Kids MMA
            </p>
            <p className="text-sm font-medium text-zinc-600 mt-1">
              4:00 - 5:00 PM
            </p>
            <p className="text-xs text-zinc-500 mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                person
              </span>{" "}
              Coach Dave
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={columnVariants}
          className="flex flex-col gap-3 bg-white p-2 md:p-3 min-h-[200px]"
        >
          <div className="block p-2 text-center text-sm font-bold uppercase tracking-wider text-zinc-600 md:hidden bg-zinc-50 rounded mb-2 border border-zinc-100">
            Wednesday
          </div>
          <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-3 shadow-sm transition-all hover:shadow-md hover:bg-blue-100/50 cursor-pointer group">
            <p className="font-bold text-zinc-900 group-hover:text-blue-700">
              BJJ Advanced
            </p>
            <p className="text-sm font-medium text-zinc-600 mt-1">
              6:00 - 7:00 AM
            </p>
            <p className="text-xs text-zinc-500 mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                person
              </span>{" "}
              Coach Ana
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-3 shadow-sm transition-all hover:shadow-md hover:bg-red-100/50 cursor-pointer group">
            <p className="font-bold text-zinc-900 group-hover:text-red-700">
              MMA Sparring
            </p>
            <p className="text-sm font-medium text-zinc-600 mt-1">
              6:00 - 7:30 PM
            </p>
            <p className="text-xs text-zinc-500 mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                person
              </span>{" "}
              Coach Mike
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={columnVariants}
          className="flex flex-col gap-3 bg-white p-2 md:p-3 min-h-[200px]"
        >
          <div className="block p-2 text-center text-sm font-bold uppercase tracking-wider text-zinc-600 md:hidden bg-zinc-50 rounded mb-2 border border-zinc-100">
            Thursday
          </div>
          <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-3 shadow-sm transition-all hover:shadow-md hover:bg-green-100/50 cursor-pointer group">
            <p className="font-bold text-zinc-900 group-hover:text-green-700">
              HIIT Fitness
            </p>
            <p className="text-sm font-medium text-zinc-600 mt-1">
              6:00 - 7:00 AM
            </p>
            <p className="text-xs text-zinc-500 mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                person
              </span>{" "}
              Coach Sara
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={columnVariants}
          className="flex flex-col gap-3 bg-white p-2 md:p-3 min-h-[200px]"
        >
          <div className="block p-2 text-center text-sm font-bold uppercase tracking-wider text-zinc-600 md:hidden bg-zinc-50 rounded mb-2 border border-zinc-100">
            Friday
          </div>
          <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-3 shadow-sm transition-all hover:shadow-md hover:bg-blue-100/50 cursor-pointer group">
            <p className="font-bold text-zinc-900 group-hover:text-blue-700">
              No-Gi BJJ
            </p>
            <p className="text-sm font-medium text-zinc-600 mt-1">
              6:00 - 7:00 AM
            </p>
            <p className="text-xs text-zinc-500 mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                person
              </span>{" "}
              Coach Ana
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-3 shadow-sm transition-all hover:shadow-md hover:bg-red-100/50 cursor-pointer group">
            <p className="font-bold text-zinc-900 group-hover:text-red-700">
              Boxing Tech
            </p>
            <p className="text-sm font-medium text-zinc-600 mt-1">
              5:00 - 6:00 PM
            </p>
            <p className="text-xs text-zinc-500 mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                person
              </span>{" "}
              Coach Mike
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={columnVariants}
          className="flex flex-col gap-3 bg-white p-2 md:p-3 min-h-[200px]"
        >
          <div className="block p-2 text-center text-sm font-bold uppercase tracking-wider text-zinc-600 md:hidden bg-zinc-50 rounded mb-2 border border-zinc-100">
            Saturday
          </div>
          <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-3 shadow-sm transition-all hover:shadow-md hover:bg-purple-100/50 cursor-pointer group">
            <p className="font-bold text-zinc-900 group-hover:text-purple-700">
              Kids BJJ
            </p>
            <p className="text-sm font-medium text-zinc-600 mt-1">
              9:00 - 10:00 AM
            </p>
            <p className="text-xs text-zinc-500 mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                person
              </span>{" "}
              Coach Dave
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-3 shadow-sm transition-all hover:shadow-md hover:bg-yellow-100/50 cursor-pointer group">
            <p className="font-bold text-zinc-900 group-hover:text-yellow-700">
              Open Mat
            </p>
            <p className="text-sm font-medium text-zinc-600 mt-1">
              10:00 AM - 12:00 PM
            </p>
            <p className="text-xs text-zinc-500 mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                groups
              </span>{" "}
              All Welcome
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={columnVariants}
          className="flex flex-col gap-3 bg-zinc-50 p-2 md:p-3 min-h-[200px]"
        >
          <div className="block p-2 text-center text-sm font-bold uppercase tracking-wider text-zinc-600 md:hidden bg-zinc-100 rounded mb-2 border border-zinc-200">
            Sunday
          </div>
          <div className="flex h-full items-center justify-center rounded-lg p-3 border border-dashed border-zinc-300 bg-white">
            <p className="text-sm font-medium text-zinc-400">Closed</p>
          </div>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default ClassSchedule;
