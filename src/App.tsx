import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { AppRoutes } from "./routes";
import { useEffect } from "react";
import { fetchConfig } from "./store/configSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useNavigate } from "react-router-dom";
import { initGA, trackPageView } from "./utils/analytics";

function App() {
  const data = useAppSelector((state: any) => state.config.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
    dispatch(fetchConfig());
    initGA();
    trackPageView(window.location.pathname);
  }, []);

  return (
    <div className="bg-background-light font-display text-gray-900">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center pb-5">
            <div className="layout-content-container flex flex-col w-full flex-1 px-4 sm:px-6 lg:px-8">
              <Navbar />
              <main className="flex flex-col gap-10 md:gap-16 lg:gap-20 mt-5">
                <AppRoutes />
              </main>
              <Footer
                logo={data?.logo}
                brandName={data.footer.brandName}
                tagline={data.footer.tagline}
                sections={data.footer.section}
                copyright={`© ${data.footer.year} ${data.footer.brandName}™. All Rights Reserved.`}
                credits={
                  <>
                    Created By{" "}
                    <a
                      target="blank"
                      href={data.footer.founder.url}
                      className="hover:underline uppercase cursor-pointer"
                    >
                      {data.footer.founder.name[0]}
                    </a>{" "}
                    &{" "}
                    <a
                      target="blank"
                      href={data.footer.cofounder.url}
                      className="hover:underline uppercase cursor-pointer"
                    >
                      {data.footer.cofounder.name[0]}
                    </a>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
