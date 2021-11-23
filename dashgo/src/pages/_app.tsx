import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SiderBarDrawerProvider } from "../contexts/SiderBarDrawerContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiderBarDrawerProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SiderBarDrawerProvider>
  );
}

export default MyApp;
