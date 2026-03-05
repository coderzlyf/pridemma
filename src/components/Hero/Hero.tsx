import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import "./Hero.css";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

type HeroProps = {
  title: string;
  description?: string;
  bgImage?: string;
  loadBgImage?: string;
  alt?: string;

  primaryButton?: {
    show?: boolean;
    text: string;
    onClick?: () => void;
  };

  secondaryButton?: {
    show?: boolean;
    text: string;
    onClick?: () => void;
  };
};

const Hero = ({
  title,
  description,
  bgImage,
  loadBgImage,
  alt,
  primaryButton,
  secondaryButton,
}: HeroProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!bgImage) return;

    const img = new Image();
    img.src = bgImage;

    img.onload = () => {
      setLoaded(true);
    };
  }, [bgImage]);

  const bgStyle = {
    backgroundImage: `
      linear-gradient(rgba(24,17,17,0.6), rgba(24,17,17,0.7)),
      url(${loaded ? bgImage : loadBgImage})
    `,
  };

  return (
    <section className="@container">
      <div className="@[480px]:p-0">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`relative flex min-h-[480px] md:min-h-[500px] flex-col gap-6 
          bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-lg 
          items-center justify-center p-4 shadow-md overflow-hidden
          transition-all duration-700
          ${loaded ? "blur-0 scale-100" : "blur-md scale-105"}`}
          style={bgStyle}
          data-alt={alt}
        >
          <div className="absolute inset-0 bg-black/40" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="relative flex flex-col gap-4 text-center max-w-2xl z-10"
          >
            <motion.h1
              variants={itemVariants}
              className="text-white text-4xl font-black @[480px]:text-6xl"
            >
              {title}
            </motion.h1>

            {description && (
              <motion.h2
                variants={itemVariants}
                className="text-white/90 text-base @[480px]:text-lg"
              >
                {description}
              </motion.h2>
            )}
          </motion.div>

          {(primaryButton?.show || secondaryButton?.show) && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="relative flex-wrap gap-4 flex justify-center z-10"
            >
              {primaryButton?.show && (
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={primaryButton.onClick}
                  className="h-12 px-5 bg-primary text-white font-bold rounded"
                >
                  {primaryButton.text}
                </motion.button>
              )}

              {secondaryButton?.show && (
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={secondaryButton.onClick}
                  className="h-12 px-5 bg-white/20 border border-white/40 text-white font-bold rounded backdrop-blur-sm"
                >
                  {secondaryButton.text}
                </motion.button>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
