import { ReactElement } from "react";
import { RepositoriesProvider } from "./RepositoriesContext";

type ContextWrapperProps = {
  children: ReactElement | ReactElement[];
};

export const ContextWrapper = (props: ContextWrapperProps) => {
  const { children } = props;

  return <RepositoriesProvider>{children}</RepositoriesProvider>;
};
