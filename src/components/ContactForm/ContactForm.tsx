import { motion, type Variants } from "framer-motion";
import { useAppSelector } from "../../hooks";
import { useLocation } from "react-router-dom";
import { useLayoutEffect, useRef, useState, useEffect } from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const leftColumnVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.12,
    },
  },
};

const rightColumnVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

type FormValues = {
  name: string;
  number: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const data = useAppSelector((state: any) => state.config.data);
  const contactForm = data?.contactUs;

  const handleCopy = (text: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  };

  const location = useLocation();
  const formRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const WHATSAPP_NUMBER = "9745775901";

  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    number: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    number: false,
    subject: false,
    message: false,
  });

  const [errors, setErrors] = useState<FormValues>({
    name: "",
    number: "",
    subject: "",
    message: "",
  });

  const [isValid, setIsValid] = useState(false);

  // ---------------- VALIDATION ----------------

  const validateField = (name: keyof FormValues, value: string) => {
    let error = "";

    if (!value.trim()) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else if (name === "number") {
      if (!/^[6-9]\d{9}$/.test(value)) {
        error = "Enter a valid 10-digit phone number";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  useEffect(() => {
    const hasErrors = Object.values(errors).some((err) => err !== "");
    const hasEmptyFields = Object.values(formValues).some(
      (val) => val.trim() === ""
    );

    setIsValid(!hasErrors && !hasEmptyFields);
  }, [errors, formValues]);

  // ---------------- AUTO SCROLL ----------------

  useLayoutEffect(() => {
    if (
      location.pathname === "/GetFreeTrial" ||
      location.pathname === "/getFreeTrial"
    ) {
      setFormValues((prev) => ({
        ...prev,
        subject: "Regarding for free session",
      }));

      requestAnimationFrame(() => {
        formRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        setTimeout(() => {
          nameInputRef.current?.focus();
        }, 700);
      });
    }
  }, [location.pathname]);

  // ---------------- SUBMIT ----------------

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTouched({
      name: true,
      number: true,
      subject: true,
      message: true,
    });

    if (!isValid) return;

    const messageHeader = "!!! New Member Inquiry !!!";

    const text = encodeURIComponent(
      `*${messageHeader}*\n\n` +
        `*Name:* ${formValues.name}\n` +
        `*Number:* ${formValues.number}\n` +
        `*Subject:* ${formValues.subject}\n` +
        `*Message:* ${formValues.message}`
    );

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormValues({
      name: "",
      number: "",
      subject: "",
      message: "",
    });

    setTouched({
      name: false,
      number: false,
      subject: false,
      message: false,
    });
  };

  // ---------------- RENDER ----------------

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="flex flex-col gap-8 justify-between"
        variants={leftColumnVariants}
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 text-left"
        >
          {contactForm.details.map((item: any, index: number) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-transparent min-h-[72px] py-2 justify-between border-b border-neutral-200"
            >
              <div className="flex items-center gap-4">
                <div className="text-primary flex items-center justify-center rounded-lg bg-neutral-100 shrink-0 size-12">
                  <span className="material-symbols-outlined text-2xl">
                    {item.icon}
                  </span>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-background-dark text-base font-medium leading-normal line-clamp-1">
                    {item.label}
                  </p>
                  <p className="text-background-dark/60 text-sm font-normal leading-normal line-clamp-2">
                    {item.value}
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                {item.text && item.icon == "location_on" && (
                  <a
                    className="text-primary text-sm font-medium leading-normal hover:underline"
                    href={item.directions}
                    target="_blank"
                  >
                    {item.text}
                  </a>
                )}
                {item.text && item.icon == "call" && (
                  <a
                    className="text-primary text-sm font-medium leading-normal hover:underline"
                    href={`tel:${item.value}`}
                  >
                    {item.text}
                  </a>
                )}
                {item.secondaryIcon && (
                  <button className="text-primary">
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        handleCopy(item.value);
                      }}
                      className="material-symbols-outlined text-xl cursor-pointer"
                    >
                      {item.secondaryIcon}
                    </span>
                  </button>
                )}
              </div>
            </div>
          ))}
          {/* <div className="flex items-center gap-4 bg-transparent min-h-[72px] py-2 justify-between border-b border-neutral-200">
            <div className="flex items-center gap-4">
              <div className="text-primary flex items-center justify-center rounded-lg bg-neutral-100 shrink-0 size-12">
                <span className="material-symbols-outlined text-2xl">call</span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-background-dark text-base font-medium leading-normal line-clamp-1">
                  Phone Number
                </p>
                <p className="text-background-dark/60 text-sm font-normal leading-normal line-clamp-2">
                  (123) 456-7890
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <a
                className="text-primary text-sm font-medium leading-normal hover:underline"
                href="tel:1234567890"
              >
                Call Us
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-transparent min-h-[72px] py-2 justify-between border-b border-neutral-200">
            <div className="flex items-center gap-4">
              <div className="text-primary flex items-center justify-center rounded-lg bg-neutral-100 shrink-0 size-12">
                <span className="material-symbols-outlined text-2xl">mail</span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-background-dark text-base font-medium leading-normal line-clamp-1">
                  Email Address
                </p>
                <p className="text-background-dark/60 text-sm font-normal leading-normal line-clamp-2">
                  contact@pridemma.com
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <button className="text-primary">
                <span className="material-symbols-outlined text-xl">
                  content_copy
                </span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-transparent min-h-[72px] py-2 justify-between border-b border-neutral-200">
            <div className="flex items-center gap-4">
              <div className="text-primary flex items-center justify-center rounded-lg bg-neutral-100 shrink-0 size-12">
                <span className="material-symbols-outlined text-2xl">
                  location_on
                </span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-background-dark text-base font-medium leading-normal line-clamp-1">
                  Address
                </p>
                <p className="text-background-dark/60 text-sm font-normal leading-normal line-clamp-2">
                  123 Pride Street, Fightsville, FS 45678
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <a
                className="text-primary text-sm font-medium leading-normal hover:underline"
                href="#"
              >
                Get Directions
              </a>
            </div>
          </div> */}
        </motion.div>
        <motion.div variants={itemVariants} className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-background-dark">
            {contactForm.hoursOfOperation.title}
          </h3>
          <div className="flex flex-col border border-neutral-200 rounded-lg">
            <div className="flex justify-between p-4 border-b border-neutral-200">
              <span className="text-background-dark/60">Monday - Friday</span>
              <span className="font-medium text-background-dark">
                {contactForm.hoursOfOperation.day}
              </span>
            </div>
            <div className="flex justify-between p-4 border-b border-neutral-200">
              <span className="text-background-dark/60">Saturday</span>
              <span className="font-medium text-background-dark">
                {contactForm.hoursOfOperation.saturday}
              </span>
            </div>
            <div className="flex justify-between p-4">
              <span className="text-background-dark/60">Sunday</span>
              <span className="font-medium text-background-dark">
                {contactForm.hoursOfOperation.sunday}
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="hidden aspect-video w-full rounded-lg overflow-hidden shadow-sm"
        >
          <img
            className="h-full w-full object-cover"
            data-alt="A map showing the location of the Pride MMA &amp; Fitness Club in Fightsville."
            data-location="Fightsville"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7CsLZWCwSnP0WSwGX2O12UdBjLF4D3id2MBy6TiQrvAdssJqHMIogriPG0OGD-aHKrvUr4BH5mS30im0-DcQZGXDNKMGQ5mLelBiKFwqivH9OJbaFSOGBTSC-1vrkdQ22-mOd3jaiZoLcMprqYogu5JoQy_t-TBxyzfuT09RfWshrSgzUsQpGD7l5dqrHwKvyVr51hbVvfj3RXrbZAY2SNOL-rxeLLnaSsvTEtR-C4WqgepA-BIDOlcr9CRM8wXDrT1UyzxtS1LM"
          />
        </motion.div>
      </motion.div>
      <motion.div
        variants={rightColumnVariants}
        ref={formRef}
        className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 lg:sticky lg:top-24 h-fit"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold tracking-tight text-background-dark"
          >
            Send Us a Message
          </motion.h3>

          {/* NAME + PHONE */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div>
              <label className="block text-sm font-medium text-background-dark/70 mb-2">
                Full Name
              </label>
              <input
                ref={nameInputRef}
                type="text"
                value={formValues.name}
                onChange={(e) => {
                  setFormValues({ ...formValues, name: e.target.value });
                  if (touched.name) validateField("name", e.target.value);
                }}
                onBlur={() => {
                  setTouched({ ...touched, name: true });
                  validateField("name", formValues.name);
                }}
                className="w-full bg-neutral-50 border border-neutral-200 text-background-dark rounded-md h-12 px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-colors placeholder:text-neutral-400"
              />
              {touched.name && errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-background-dark/70 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                inputMode="numeric"
                value={formValues.number}
                onChange={(e) => {
                  setFormValues({ ...formValues, number: e.target.value });
                  if (touched.number) validateField("number", e.target.value);
                }}
                onBlur={() => {
                  setTouched({ ...touched, number: true });
                  validateField("number", formValues.number);
                }}
                className="w-full bg-neutral-50 border border-neutral-200 text-background-dark rounded-md h-12 px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-colors placeholder:text-neutral-400"
              />
              {touched.number && errors.number && (
                <p className="text-red-500 text-xs mt-1">{errors.number}</p>
              )}
            </div>
          </motion.div>

          {/* SUBJECT */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-background-dark/70 mb-2">
              Subject
            </label>
            <input
              type="text"
              value={formValues.subject}
              onChange={(e) => {
                setFormValues({ ...formValues, subject: e.target.value });
                if (touched.subject) validateField("subject", e.target.value);
              }}
              onBlur={() => {
                setTouched({ ...touched, subject: true });
                validateField("subject", formValues.subject);
              }}
              className="w-full bg-neutral-50 border border-neutral-200 text-background-dark rounded-md h-12 px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-colors placeholder:text-neutral-400"
            />
            {touched.subject && errors.subject && (
              <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
            )}
          </motion.div>

          {/* MESSAGE */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-background-dark/70 mb-2">
              Your Message
            </label>
            <textarea
              rows={3}
              value={formValues.message}
              onChange={(e) => {
                setFormValues({ ...formValues, message: e.target.value });
                if (touched.message) validateField("message", e.target.value);
              }}
              onBlur={() => {
                setTouched({ ...touched, message: true });
                validateField("message", formValues.message);
              }}
              className="w-full bg-neutral-50 border border-neutral-200 text-background-dark rounded-md px-4 py-2 focus:ring-2 focus:ring-primary focus:border-primary transition-colors placeholder:text-neutral-400"
            />
            {touched.message && errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </motion.div>

          <motion.div variants={itemVariants}>
            <button
              disabled={!isValid}
              className={`w-full h-12 rounded-lg font-bold ${
                isValid
                  ? "bg-primary text-white"
                  : "bg-neutral-300 text-neutral-500 cursor-not-allowed"
              }`}
            >
              Send Message
            </button>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
