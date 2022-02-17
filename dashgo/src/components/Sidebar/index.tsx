import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as="aside" width="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection name="GERAL">
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>

            <Link display="flex" alignItems="center">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Usuários
              </Text>
            </Link>
          </Stack>
        </NavSection>

        <Box>
          <NavSection name="AUTOMAÇÃO">
            <Stack spacing="4" mt="8" align="stretch">
              <Link display="flex" alignItems="center">
                <Icon as={RiInputMethodLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                  Formulário
                </Text>
              </Link>

              <Link display="flex" alignItems="center">
                <Icon as={RiGitMergeLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                  Automação
                </Text>
              </Link>
            </Stack>
          </NavSection>
        </Box>
      </Stack>
    </Box>
  );
}
