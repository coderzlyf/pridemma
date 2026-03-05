import ReactGA from "react-ga4";

export const initGA = (): void => {
  ReactGA.initialize("G-8NG9DEY269"); // replace with your GA ID
};

export const trackPageView = (path: string): void => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};

export const trackEvent = (category: string, action: string, label?: string): void => {
  ReactGA.event({
    category,
    action,
    label,
  });
};