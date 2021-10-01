import {
  Link,
  Icon,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";

interface NAvLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ children, icon, ...rest }: NAvLinkProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
