import { useAppSelector } from "../../hooks";
import ImageGridCardSection from "../ImageGridCardSection/ImageGridCardSection";

const Fyf = () => {
  const data = useAppSelector((state: any) => state.config.data);
  const items = data.homePage.programs;

  return <ImageGridCardSection title={items.title} items={items.cards} />;
};

export default Fyf;
