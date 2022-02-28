import { ReactElement } from "react";

import { ContextWrapper } from "contexts/ContextWrapper";

import { QueryClient, QueryClientProvider } from "react-query";

import GlobalStyle from "styles/global";

import { ThemeProvider } from "styled-components";
import defaultTheme from "styles/themes/default";

type GlobalWrapperProps = {
  children: ReactElement | ReactElement[];
};

export const GlobalWrapper = (props: GlobalWrapperProps) => {
  const { children } = props;
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ContextWrapper>
        <GlobalStyle />
        <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
      </ContextWrapper>
    </QueryClientProvider>
  );
};
