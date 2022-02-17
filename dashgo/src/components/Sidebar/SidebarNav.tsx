import { Box, Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection name="GERAL">
        <NavLink icon={RiDashboardLine} name="Dashboard" href="/dashboard" />
        <NavLink icon={RiContactsLine} name="Usuários" href="/users" />
      </NavSection>

      <Box>
        <NavSection name="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine} name="Formulário" href="/form" />
          <NavLink icon={RiGitMergeLine} name="Automação" href="/automation" />
        </NavSection>
      </Box>
    </Stack>
  );
}
