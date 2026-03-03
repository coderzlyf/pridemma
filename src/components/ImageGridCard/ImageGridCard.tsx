import { motion } from "framer-motion";

type ImageCardProps = {
  title: string;
  image: string;
  alt?: string;
};

const ImageCard = ({ title, image, alt }: ImageCardProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        show: { opacity: 1, scale: 1, y: 0 },
      }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      className="relative overflow-hidden bg-cover bg-center flex flex-col justify-end p-4 aspect-square rounded-lg shadow-sm"
      data-alt={alt}
      style={{
        backgroundImage: `
          linear-gradient(0deg, rgba(24,17,17,0.7) 0%, rgba(24,17,17,0) 100%),
          url(${image})
        `,
      }}
    >
      {/* 🔥 Hover Dark Overlay */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.25 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Title */}
      <p className="relative z-10 text-white text-xl font-bold w-4/5 line-clamp-2 drop-shadow-md text-left">
        {title}
      </p>
    </motion.div>
  );
};

export default ImageCard;
