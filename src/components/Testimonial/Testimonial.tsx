import { useAppSelector } from "../../hooks";
import TestimonialSection from "../TestimonialSection/TestimonialSection";

const Testimonial = () => {
  const data = useAppSelector((state: any) => state.config.data);
  const items = data.homePage.testimonials;

  return (
    <TestimonialSection
      title="What Our Members Say"
      description="Hear from the people who make our community what it is."
      showDescription={items.showDescription ? true : false}
      textPosition="top"
      items={items.cards}
    />
  );
};

export default Testimonial;
