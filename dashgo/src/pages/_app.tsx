import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SidebarProvide } from "../context/SidebarDrawerContext";
import { makeServer } from "../services/mirage-js";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "../services/react-query/queryClient";
import { AuthProvider } from "../context/AuthContext";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <SidebarProvide>
            <Component {...pageProps} />
          </SidebarProvide>
        </QueryClientProvider>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;
