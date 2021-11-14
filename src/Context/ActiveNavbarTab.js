import React from "react";
import ActiveNavbarTabReducer, {
  ActiveNavbarTabInitialState,
} from "./ActiveNavbartabReducer";

export const ActiveTabDataLayerContext = React.createContext();

export default function ActiveTabDataLayer({ children }) {
  const [dataLayer, dispatch] = React.useReducer(
    ActiveNavbarTabReducer,
    ActiveNavbarTabInitialState
  );

  return (
    <ActiveTabDataLayerContext.Provider value={[dataLayer, dispatch]}>
      {children}
    </ActiveTabDataLayerContext.Provider>
  );
}

export const useActiveTabDataLayerValue = () =>
  React.useContext(ActiveTabDataLayerContext);
