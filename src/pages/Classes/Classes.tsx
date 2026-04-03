import { Helmet } from "react-helmet";
import BookYourTrialClasses from "../../components/BookYourTrialClasses/BookYourTrialClasses";
import ClassSchedule from "../../components/ClassSchedule/ClassSchedule";
// import ClassesBtn from "../../components/ClassesBtn/ClassesBtn";
// import ClassesCard from "../../components/ClassesCard/ClassesCard";
import Hero from "../../components/Hero/Hero";
import { useAppSelector } from "../../hooks";

const Classes = () => {
  const data = useAppSelector((state: any) => state.config.data);
  const hero = data?.classes?.hero;
  return (
    <>
      <Helmet>
        <title>
          MMA, Boxing & Fitness Classes in Horamavu & Whitefield Bangalore |
          Pride MMA
        </title>
        <meta
          name="description"
          content="Explore MMA, boxing, fitness, strength training, and self-defense classes at Pride MMA in Horamavu and Whitefield, Bangalore."
        />
      </Helmet>
      <Hero
        title={hero.title}
        description={hero.description}
        bgImage={hero.bgImage}
        loadBgImage={hero.loadBgImage}
      />
      <ClassSchedule />
      <BookYourTrialClasses />
    </>
  );
};

export default Classes;
