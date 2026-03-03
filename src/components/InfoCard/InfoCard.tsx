import { motion } from "framer-motion";

type InfoCardProps = {
  title: string;
  description: string;
  icon: string;
  align?: "left" | "center" | "right";
  showIconBg?: boolean;
  iconPadding?: boolean;
};

const InfoCard = ({
  title,
  description,
  icon,
  align = "center",
  showIconBg = true,
  iconPadding = true,
}: InfoCardProps) => {
  const alignmentClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`flex gap-4 rounded-lg border border-gray-200 bg-white p-6 flex-col shadow-sm ${alignmentClass}`}
    >
      <div
        className={`
          text-primary rounded-full mb-2
          ${showIconBg ? "bg-primary/10" : ""}
          ${iconPadding ? "p-3" : ""}
          leading-0
        `}
      >
        <span className="material-symbols-outlined text-[32px]">{icon}</span>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-gray-900 text-xl font-bold">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default InfoCard;
