import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-KEY"); // change to your key
};

export const trackEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
