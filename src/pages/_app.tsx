import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import {
  SiderbarDrawerContextProvider
} from "../contexts/SiderBarDrawerContext";

function MyApp({ Component, pageProps }: AppProps) {
 

  return (
    <ChakraProvider theme={theme}>
      <SiderbarDrawerContextProvider>
        <Component {...pageProps} />
      </SiderbarDrawerContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
