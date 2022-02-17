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
        <NavLink icon={RiDashboardLine} name="Dashboard" />
        <NavLink icon={RiContactsLine} name="Usuários" />
      </NavSection>

      <Box>
        <NavSection name="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine} name="Formulário" />
          <NavLink icon={RiGitMergeLine} name="Automação" />
        </NavSection>
      </Box>
    </Stack>
  );
}
