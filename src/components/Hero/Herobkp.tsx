import "./Hero.css";
import { useAppSelector } from "../../hooks";

const Hero = () => {
  const data = useAppSelector((state: any) => state.config.data);
  return (
    <section className="@container">
      <div className="@[480px]:p-0">
        <div
          className="ra-hero-bg-img flex min-h-[60vh] md:min-h-[70vh] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-lg items-center justify-center p-4 shadow-md"
          data-alt={data?.homePage?.hero?.dataalthero}
        >
          <div className="flex flex-col gap-4 text-center max-w-2xl">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              {data?.homePage?.hero?.title}
            </h1>
            <h2 className="text-white/90 text-base font-normal leading-normal @[480px]:text-lg @[480px]:font-normal @[480px]:leading-normal">
              {data?.homePage?.hero?.description}
            </h2>
          </div>
          <div className="flex-wrap gap-4 flex justify-center">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-sm">
              <span className="truncate">{data?.homePage?.hero?.primary}</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-12 px-5 bg-white/20 border border-white/40 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/30 transition-colors shadow-sm backdrop-blur-sm">
              <span className="truncate">
                {data?.homePage?.hero?.secondary}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
