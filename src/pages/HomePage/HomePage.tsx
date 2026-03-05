import { useNavigate } from "react-router-dom";
import Fyf from "../../components/Fyf/Fyf";
import Philosophy from "../../components/Philosophy/Philosophy";
import Testimonial from "../../components/Testimonial/Testimonial";
import Hero from "../../components/Hero/Hero";
import { useAppSelector } from "../../hooks";
import { trackEvent } from "../../utils/analytics";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const navigate = useNavigate();
  const data = useAppSelector((state: any) => state.config.data);
  const hero = data?.homePage?.hero;
  return (
    <>
      <Helmet>
        <title>
          Best MMA & Fitness Gym in Whitefield Bangalore | Pride MMA
        </title>

        <meta
          name="description"
          content="Join Pride MMA, the best MMA and fitness gym in Whitefield Bangalore. Professional MMA training, strength conditioning, and martial arts classes for beginners and athletes."
        />
      </Helmet>
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
        secondaryButton={{
          show: hero.secondary ? true : false,
          text: `${hero.secondary.name}`,
          onClick: () => {
            navigate(`${hero.secondary.route}`);
            trackEvent("CTA", "Click", "Get Your Free Pass");
          },
        }}
      />
      <Philosophy />

      <Fyf />
      <Testimonial />
    </>
  );
};

export default HomePage;
