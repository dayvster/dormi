import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import "../global.css";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ThemeProvider defaultTheme="lofi" themes={["dark", "lofi", "dormi"]}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
};

export default MyApp;
