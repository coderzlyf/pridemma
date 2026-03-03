import { motion } from "framer-motion";

type TestimonialCardProps = {
  quote: string;
  name: string;
  memberSince: string;
  image: string;

  textPosition?: "top" | "bottom";
};

const TestimonialCard = ({
  quote,
  name,
  memberSince,
  image,
  textPosition = "top",
}: TestimonialCardProps) => {
  const isTop = textPosition === "top";

  return (
    <motion.div
      className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm text-left"
      style={{ height: "100%" }}
      whileHover={{ y: -5 }}
    >
      {isTop && <p className="text-gray-700 italic">"{quote}"</p>}

      <div className="flex items-center gap-3 mt-auto">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={image}
          alt={name}
        />
        <div>
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">Member since {memberSince}</p>
        </div>
      </div>

      {!isTop && <p className="text-gray-700 italic">"{quote}"</p>}
    </motion.div>
  );
};

export default TestimonialCard;
