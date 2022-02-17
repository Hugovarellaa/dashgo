import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from "@chakra-ui/react";
import { ElementType } from "react";

interface NaveLinkProps extends ChakraLinkProps {
  icon: ElementType;
  name: string;
}

export function NavLink({ icon, name, ...rest }: NaveLinkProps) {
  return (
    <ChakraLink display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {name}
      </Text>
    </ChakraLink>
  );
}
