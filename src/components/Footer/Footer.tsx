import { useRef, type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import PopUp from "../PopUp/Popup";

type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

type FooterProps = {
  logo?: string;
  brandName?: string;
  tagline?: string;
  sections?: FooterSection[];
  copyright?: string;
  credits?: ReactNode;
};

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // ← FIXED
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Footer = ({
  logo,
  brandName = "Brand",
  tagline,
  sections = [],
  copyright,
  credits,
}: FooterProps) => {
  const termsRef = useRef<HTMLDialogElement>(null);
  const privacyRef = useRef<HTMLDialogElement>(null);

  return (
    <motion.footer
      className="bg-gray-100 rounded-lg mt-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="w-full mx-auto p-8 md:py-10">
        <div className="md:flex md:justify-between">
          {/* Left */}
          <motion.div variants={itemVariants} className="mb-6 md:mb-0">
            <a className="flex items-center" href="#">
              {logo && (
                <img
                  className="size-10 mr-3 mix-blend-multiply"
                  src={logo}
                  alt={brandName}
                />
              )}
              <span className="self-center text-2xl font-semibold text-gray-900">
                {brandName}
              </span>
            </a>

            {tagline && (
              <p className="mt-4 text-sm text-gray-600 max-w-xs text-left">
                {tagline}
              </p>
            )}
          </motion.div>

          {/* Right sections */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 text-left">
            {sections.map((section, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  {section.title}
                </h2>
                <ul className="text-gray-600 font-medium">
                  {section.links.map((link, i) => (
                    <motion.li
                      key={i}
                      className="mb-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {link.label == "Terms & Conditions" ||
                      link.label == "Privacy Policy" ? (
                        <span
                          onClick={() =>
                            link.label == "Terms & Conditions"
                              ? termsRef.current?.showModal()
                              : privacyRef.current?.showModal()
                          }
                          className="hover:underline hover:text-primary hover:cursor-pointer"
                        >
                          {link.label}
                        </span>
                      ) : (
                        <a
                          href={link.href}
                          target="_blank"
                          className="hover:underline hover:text-primary hover:cursor-pointer"
                        >
                          {link.label}
                        </a>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.hr
          variants={itemVariants}
          className="my-6 border-gray-300 lg:my-8"
        />

        <motion.div
          variants={itemVariants}
          className="sm:flex sm:items-center sm:justify-between text-sm text-gray-500"
        >
          <span>{copyright}</span>
          <span>{credits}</span>
        </motion.div>
      </div>
      {/* Terms & Conditions */}
      <PopUp ref={termsRef} title="Terms & Conditions">
        <div className="space-y-4 text-sm text-slate-700">
          <p>Welcome to our Terms & Conditions. Please read carefully...</p>
          <p>1. You must be over 18 years old...</p>
          <p>2. All content is for personal use only...</p>
        </div>
      </PopUp>

      {/* Privacy Policy */}
      <PopUp ref={privacyRef} title="Privacy Policy">
        <div className="space-y-4 text-sm text-slate-700">
          <p>
            We respect your privacy. This policy explains how we use your
            data...
          </p>
          <p>1. Personal information will not be shared...</p>
          <p>2. We use cookies to improve your experience...</p>
        </div>
      </PopUp>
    </motion.footer>
  );
};

export default Footer;
