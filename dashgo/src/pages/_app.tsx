import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SiderbarDrawerProvider } from "../contexts/SiderbarContext";
import { makeServer } from "../services/miragejs";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiderbarDrawerProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SiderbarDrawerProvider>
  );
}

export default MyApp;
