import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "./utils/analytics";

type FreePassOptions = {
    subject?: string;
  };

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useFreePassRedirect = () => {
    const navigate = useNavigate();
  
    const goToFreePass = (
      options?: FreePassOptions
    ) => {
      navigate("/GetFreeTrial", {
        state: {
          scrollTo: "contact-form",
          subject:
            options?.subject ??
            "Regarding free pass for the session",
        },
      });
    };
  
    return goToFreePass;
};

export const handleFreePass = () => {
  const navigate = useNavigate();
  navigate("/GetFreeTrial");
  trackEvent("CTA", "Click", "Get Your Free Pass");
};