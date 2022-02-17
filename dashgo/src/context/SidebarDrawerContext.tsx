import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarProvideProps {
  children: ReactNode;
}

type SidebarContextProps = UseDisclosureReturn;

const SidebarContext = createContext({} as SidebarContextProps);

export function SidebarProvide({ children }: SidebarProvideProps) {
  const disclosure = useDisclosure();
  const { onClose } = disclosure;
  const router = useRouter();

  useEffect(() => {
    onClose();
  }, [onClose, router.asPath]);
  return (
    <>
      <SidebarContext.Provider value={disclosure}>
        {children}
      </SidebarContext.Provider>
    </>
  );
}

export const useSidebar = () => useContext(SidebarContext);
