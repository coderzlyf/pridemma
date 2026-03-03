import { motion } from "framer-motion";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

type TestimonialItem = {
  quote: string;
  name: string;
  memberSince: string;
  image: string;
};

type TestimonialSectionProps = {
  title: string;
  description?: string;
  showDescription?: boolean;
  textPosition?: "top" | "bottom";
  items: TestimonialItem[];
};

const TestimonialSection = ({
  title,
  description,
  showDescription = true,
  textPosition = "top",
  items,
}: TestimonialSectionProps) => {
  return (
    <motion.div
      className="flex flex-col gap-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
    >
      {/* Title block */}
      <motion.div
        className="flex flex-col gap-4 text-center items-center"
        variants={{
          hidden: { opacity: 0, filter: "blur(6px)" },
          show: { opacity: 1, filter: "blur(0px)" },
        }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-gray-900 text-3xl font-bold @[480px]:text-4xl max-w-2xl">
          {title}
        </h2>

        {showDescription && description && (
          <p className="text-gray-600 text-base max-w-2xl">{description}</p>
        )}
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.92,
                filter: "blur(8px)",
              },
              show: {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <TestimonialCard {...item} textPosition={textPosition} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TestimonialSection;
