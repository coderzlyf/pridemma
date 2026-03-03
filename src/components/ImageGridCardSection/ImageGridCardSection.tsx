import { motion } from "framer-motion";
import ImageGridCard from "../ImageGridCard/ImageGridCard";

type CardItem = {
  title: string;
  image: string;
  alt?: string;
};

type ImageGridSectionProps = {
  title?: string;
  items: CardItem[];
};

const ImageGridSection = ({ title, items }: ImageGridSectionProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="w-full"
    >
      {title && (
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="text-gray-900 text-3xl font-bold px-4 pb-3 pt-5 text-center"
        >
          {title}
        </motion.h2>
      )}

      <motion.div
        className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 py-4"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.4 }}
          >
            <ImageGridCard
              title={item.title}
              image={item.image}
              alt={item.alt}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ImageGridSection;
