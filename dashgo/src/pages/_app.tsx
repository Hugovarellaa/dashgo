import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SiderBarDrawerProvider } from "../contexts/SiderBarDrawerContext";
import { makeServer } from "../services/mirage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "../services/hooks/queryClient";

if (process.env.NODE_ENV === "development") {
  makeServer();
}


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SiderBarDrawerProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SiderBarDrawerProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
