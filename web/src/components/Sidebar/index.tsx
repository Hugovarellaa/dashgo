import { Box, Stack } from '@chakra-ui/react'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function Sidebar() {
  return (
    <Box as="aside" width="64" marginRight={8}>
      <Stack spacing="12" alignItems="flex-start">
        <NavSection title="GERAL">
          <NavLink name="Dashboard" icon={RiDashboardLine} />
          <NavLink name="Usuários" icon={RiContactsLine} />
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLink name="Formulário" icon={RiInputMethodLine} />
          <NavLink name="Automação" icon={RiGitMergeLine} />
        </NavSection>
      </Stack>
    </Box>
  )
}
