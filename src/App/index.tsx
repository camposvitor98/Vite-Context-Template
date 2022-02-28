import { GlobalWrapper } from "./GlobalWrapper";
import { Router } from "router";

export const App = () => {
  return (
    <GlobalWrapper>
      <Router />
    </GlobalWrapper>
  );
};
