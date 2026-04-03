import { Helmet } from "react-helmet";
import MainEvent from "../../components/MainEvent/MainEvent";
// import UpcomingCards from "../../components/UpcomingCards/UpcomingCards";

const UpcomingEvent = () => {
  return (
    <>
      <Helmet>
        <title>
          MMA Events & Training Camps in Bangalore | Pride MMA Horamavu &
          Whitefield
        </title>
        <meta
          name="description"
          content="Stay updated with upcoming MMA events, fitness camps, workshops, and training programs at Pride MMA branches in Horamavu and Whitefield Bangalore."
        />
      </Helmet>
      <MainEvent />
      {/* <UpcomingCards /> */}
    </>
  );
};

export default UpcomingEvent;
