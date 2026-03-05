import { useNavigate } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import { useAppSelector } from "../../hooks";
import Testimonial from "../../components/Testimonial/Testimonial";
import PriceCard from "../../components/PriceCard/PriceCard";
import Faq from "../../components/Faq/Faq";

const Membership = () => {
  const navigate = useNavigate();
  const data = useAppSelector((state: any) => state.config.data);
  const hero = data?.membership?.hero;
  return (
    <>
      <Hero
        title={hero.title}
        description={hero.description}
        bgImage={hero.bgImage}
        loadBgImage={hero.loadBgImage}
        primaryButton={{
          show: hero.primary ? true : false,
          text: `${hero.primary.name}`,
          onClick: () => navigate(`${hero.primary.route}`),
        }}
      />
      <PriceCard />
      <Testimonial />
      <Faq />
    </>
  );
};

export default Membership;
