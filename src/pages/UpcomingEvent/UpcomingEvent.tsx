import { Helmet } from "react-helmet";
import MainEvent from "../../components/MainEvent/MainEvent";
// import UpcomingCards from "../../components/UpcomingCards/UpcomingCards";

const UpcomingEvent = () => {
  return (
    <>
      <Helmet>
        <title>
          MMA Events & Training Camps in Whitefield Bangalore | Pride MMA
        </title>

        <meta
          name="description"
          content="Stay updated with upcoming MMA events, workshops, and training camps at Pride MMA gym in Whitefield Bangalore. Join our community and improve your skills."
        />
      </Helmet>
      <MainEvent />
      {/* <UpcomingCards /> */}
    </>
  );
};

export default UpcomingEvent;
