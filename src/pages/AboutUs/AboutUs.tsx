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
