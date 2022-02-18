import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SidebarProvide } from "../context/SidebarDrawerContext";
import { makeServer } from "../services/mirage-js";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <SidebarProvide>
          <Component {...pageProps} />
        </SidebarProvide>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
