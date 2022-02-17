import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";

interface SidebarProvideProps {
  children: ReactNode;
}

type SidebarContextProps = UseDisclosureReturn;

const SidebarContext = createContext({} as SidebarContextProps);

export function SidebarProvide({ children }: SidebarProvideProps) {
  const disclosure = useDisclosure();
  return (
    <>
      <SidebarContext.Provider value={disclosure}>
        {children}
      </SidebarContext.Provider>
    </>
  );
}

export const useSidebar = () => useContext(SidebarContext);
