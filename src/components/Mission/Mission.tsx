import { useAppSelector } from "../../hooks";
import InfoCard from "../InfoCard/InfoCard";
import InfoCardWrapper from "../InfoCardWrapper/InfoCardWrapper";

const Mission = () => {
  const data = useAppSelector((state: any) => state.config.data);
  const infoCardData = data.aboutUs.mission;
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
          align={infoCardData.cardAlign}
          showIconBg={infoCardData.showIconBg ? true : false}
          iconPadding={infoCardData.iconPadding ? true : false}
        />
      ))}
    </InfoCardWrapper>
  );
};

export default Mission;
