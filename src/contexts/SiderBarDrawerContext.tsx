import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";
import { useRouter } from "next/router";
import { useEffect } from "toasted-notes/node_modules/@types/react";

interface SiderbarDrawerContextProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SiderBarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SiderbarDrawerContextProvider({
  children,
}: SiderbarDrawerContextProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [disclosure, router.asPath]);

  return (
    <SiderBarDrawerContext.Provider value={disclosure}>
      {children}
    </SiderBarDrawerContext.Provider>
  );
}

export const useSiderbarDrawer = () => useContext(SiderBarDrawerContext);
