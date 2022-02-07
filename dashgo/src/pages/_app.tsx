import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SiderbarDrawerProvider } from "../contexts/SiderbarContext";

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
