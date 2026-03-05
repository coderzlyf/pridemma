import { Link, NavLink } from "react-router-dom";
import { useAppSelector, useFreePassRedirect } from "../../hooks";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { trackEvent } from "../../utils/analytics";

const mobileMenuVariants = {
  open: {
    transition: {
      staggerChildren: 0.08,
    },
  },
  closed: {},
};

const mobileItemVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -20 },
};

const Navbar = () => {
  const data = useAppSelector((state: any) => state.config.data);
  const goToFreePass = useFreePassRedirect();

  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const redirectAndContent = () => {
    goToFreePass();
    setIsOpen(false);
    trackEvent("CTA", "Click", "Get Your Free Pass");
  };

  // Hide on scroll down, show on scroll up (optimized)
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY && current > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScrollY = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: showNav ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-50"
      >
        <div
          className={`mt-4 flex items-center justify-between bg-white/70 backdrop-blur-sm rounded-lg px-6 py-3 ${
            isOpen ? "" : "border border-gray-200 shadow-sm"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <img
              className="size-8 mix-blend-multiply"
              src={data ? data.logo : "error"}
              alt={data ? data.name : "loading"}
            />
            <span className="font-bold max-[350px]:hidden">{data?.name}</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex flex-1 justify-end gap-8">
            <ul className="flex items-center gap-9">
              {data?.navigation?.menu
                .filter((item: any) => item.name != "Membership")
                .map((item: any, val: number) => (
                  <li key={val}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `text-sm font-medium transition-colors ${
                          isActive ? "text-red-500" : "text-gray-700"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
            </ul>

            <Link
              to={data?.navigation?.cta?.path}
              onClick={() => trackEvent("CTA", "Click", "Get Your Free Pass")}
              className="h-10 px-4 flex items-center rounded bg-primary text-white font-bold hover:bg-primary/90"
            >
              {data?.navigation?.cta?.label}
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 0 : -8,
              }}
              transition={{ duration: 0.3 }}
              className="absolute h-[2px] w-6 bg-black"
            />

            <motion.span
              animate={{
                opacity: isOpen ? 0 : 1,
                scaleX: isOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="absolute h-[2px] w-6 bg-black"
            />

            <motion.span
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? 0 : 8,
              }}
              transition={{ duration: 0.3 }}
              className="absolute h-[2px] w-6 bg-black"
            />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE FULLSCREEN MENU */}
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 bg-white text-black z-40 xl:hidden"
      >
        <motion.ul
          variants={mobileMenuVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="pt-28 sm:px-12 px-10 space-y-6 text-2xl font-light text-left"
        >
          {data?.navigation?.menu
            .filter((item: any) => item.name != "Membership")
            .map((item: any, val: number) => (
              <motion.li key={val} variants={mobileItemVariants}>
                <NavLink
                  className="block"
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              </motion.li>
            ))}
          <motion.li variants={mobileItemVariants}>
            <NavLink
              to={data?.navigation?.cta?.path}
              className="text-primary block animate-[flash_1s_ease-in-out_infinite]"
              onClick={redirectAndContent}
            >
              {data?.navigation?.cta?.label}
            </NavLink>
          </motion.li>
        </motion.ul>
      </motion.div>
    </>
  );
};

export default Navbar;
