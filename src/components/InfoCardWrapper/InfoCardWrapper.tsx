import { motion } from "framer-motion";

type InfoCardWrapperProps = {
  title?: string;
  description?: string;
  align?: "left" | "center";
  children: React.ReactNode;
};

const InfoCardWrapper = ({
  title,
  description,
  align = "center",
  children,
}: InfoCardWrapperProps) => {
  const alignmentClass =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      className="flex flex-col gap-10 @container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {(title || description) && (
        <motion.div
          className={`flex flex-col gap-4 ${alignmentClass}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title && (
            <h2 className="text-gray-900 text-3xl font-bold @[480px]:text-4xl max-w-2xl">
              {title}
            </h2>
          )}

          {description && (
            <p className="text-gray-600 text-base max-w-2xl">{description}</p>
          )}
        </motion.div>
      )}

      <motion.div
        className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default InfoCardWrapper;
