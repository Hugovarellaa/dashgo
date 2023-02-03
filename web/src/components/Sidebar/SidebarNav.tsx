import { Stack } from '@chakra-ui/react'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function SidebarNav() {
  return (
    <Stack spacing="12" alignItems="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" name="Dashboard" icon={RiDashboardLine} />
        <NavLink href="/users" name="Usuários" icon={RiContactsLine} />
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink href="/form" name="Formulário" icon={RiInputMethodLine} />
        <NavLink href="/automatic" name="Automação" icon={RiGitMergeLine} />
      </NavSection>
    </Stack>
  )
}
