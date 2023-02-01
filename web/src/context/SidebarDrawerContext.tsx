/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { createContext, ReactNode, useContext, useEffect } from 'react'

interface SidebarDrawerContextData {
  disclosure: UseDisclosureReturn
}

interface Props {
  children: ReactNode
}

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SidebarDrawerProvider({ children }: Props) {
  const disclosure = useDisclosure()
  const { events } = useRouter()

  /* O events tem acesso aos eventos de navegação
   * (quando vai mudar de página, quando acabou de mudar a página, etc),
   * e no evento onRouteChangeComplete, ou seja, quando fizer a troca de página, ele vai executar a função.
   */
  useEffect(() => {
    events.on('routeChangeComplete', () => {
      disclosure.onClose()
    })
  }, [events, disclosure])

  return (
    <SidebarDrawerContext.Provider value={{ disclosure }}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
