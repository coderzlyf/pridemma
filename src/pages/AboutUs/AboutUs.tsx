import { Helmet } from "react-helmet";
import BookYourTrial from "../../components/BookYourTrial/BookYourTrial";
import Hero from "../../components/Hero/Hero";
import Mission from "../../components/Mission/Mission";
import Mtt from "../../components/Mtt/Mtt";
import OurStory from "../../components/OurStory/OurStory";
import { useAppSelector } from "../../hooks";

const AboutUs = () => {
  const data = useAppSelector((state: any) => state.config.data);
  const hero = data?.aboutUs?.hero;
  const story = data?.aboutUs?.story;
  return (
    <>
      <Helmet>
        <title>
          About Pride MMA | Top MMA & Fitness Gym in Whitefield Bangalore
        </title>

        <meta
          name="description"
          content="Learn about Pride MMA, a leading MMA and fitness gym in Whitefield Bangalore offering professional martial arts training, fitness programs, and expert coaching."
        />
      </Helmet>
      <Hero
        title={hero.title}
        description={hero.description}
        bgImage={hero.bgImage}
        loadBgImage={hero.loadBgImage}
      />
      <OurStory
        title={story.title}
        desc={story.description}
        image={story.image}
      />
      <Mission />
      <Mtt />
      <BookYourTrial />
    </>
  );
};

export default AboutUs;
