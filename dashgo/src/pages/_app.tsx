import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SidebarProvide } from "../context/SidebarDrawerContext";
import { makeServer } from "../services/mirage-js";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarProvide>
        <Component {...pageProps} />
      </SidebarProvide>
    </ChakraProvider>
  );
}

export default MyApp;
