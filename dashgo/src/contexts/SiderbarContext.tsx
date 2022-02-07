import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SiderbarDrawerProviderProps {
  children: ReactNode;
}

type SiderbarDrawerContextProps = UseDisclosureReturn;

export const SiderbarDrawerContext = createContext(
  {} as SiderbarDrawerContextProps
);

export function SiderbarDrawerProvider({
  children,
}: SiderbarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose;
  }, [router.asPath, disclosure]);

  return (
    <>
      <SiderbarDrawerContext.Provider value={disclosure}>
        {children}
      </SiderbarDrawerContext.Provider>
    </>
  );
}

export const useSiderbarDrawer = () => useContext(SiderbarDrawerContext);
