import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { createContext, ReactNode, useContext } from 'react'

type SidebarDrawerContextData = UseDisclosureReturn

interface Props {
  children: ReactNode
}

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SidebarDrawerProvider({ children }: Props) {
  const disclosure = useDisclosure()
  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
