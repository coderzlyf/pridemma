import { useAppSelector } from "../../hooks";
import InfoCard from "../InfoCard/InfoCard";
import InfoCardWrapper from "../InfoCardWrapper/InfoCardWrapper";

const Philosophy = () => {
  const data = useAppSelector((state: any) => state.config.data);
  const infoCardData = data.homePage.philosophy;
  return (
    <InfoCardWrapper
      title={infoCardData.title}
      description={infoCardData.description}
      align={infoCardData.align}
    >
      {infoCardData.cards.map((item: any, index: number) => (
        <InfoCard
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </InfoCardWrapper>
  );
};

export default Philosophy;
