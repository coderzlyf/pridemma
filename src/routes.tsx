import AboutUs from "./pages/AboutUs/AboutUs";
import Classes from "./pages/Classes/Classes";
import ContactUs from "./pages/ContactUs/ContactUs";
import Membership from "./pages/Membership/Membership";
import UpcomingEvent from "./pages/UpcomingEvent/UpcomingEvent";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { useAppSelector } from "./hooks";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import PageTracker from "./components/PageTracker/PageTracker";

const componentMap = {
  AboutUs,
  Classes,
  ContactUs,
  Membership,
  UpcomingEvent,
};

export function AppRoutes() {
  const data = useAppSelector((state: any) => state.config.data);

  return (
    <>
      <ScrollToTop />
      <PageTracker />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/GetFreeTrial" element={<ContactUs />} />
        <Route path="*" element={<div>Page Not Found</div>} />
        {data?.navigation?.menu?.map((item: any, i: number) => {
          const Component =
            componentMap[item.component as keyof typeof componentMap];
          return <Route key={i} path={item.path} element={<Component />} />;
        })}
      </Routes>
    </>
  );
}
