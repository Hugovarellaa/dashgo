import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SiderBarDrawerContextProps {
  children: ReactNode;
}
type SiderBarDrawerContextData = UseDisclosureReturn;

const SiderBarDrawerContext = createContext({} as SiderBarDrawerContextData);

export function SiderBarDrawerProvider({
  children,
}: SiderBarDrawerContextProps) {
  const disclourse = useDisclosure();
  const { events } = useRouter()

  useEffect(() => {
    events.on('routeChangeComplete', () => {
      disclourse.onClose();
    })
  }, [events, disclourse])

  return (
    <SiderBarDrawerContext.Provider value={disclourse}>
      {children}
    </SiderBarDrawerContext.Provider>
  );
}

export const useSiderBarDrawer = () => useContext(SiderBarDrawerContext);
