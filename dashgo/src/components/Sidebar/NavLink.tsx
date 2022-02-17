import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from "@chakra-ui/react";
import { ElementType } from "react";
import Link from "next/link";

interface NaveLinkProps extends ChakraLinkProps {
  icon: ElementType;
  name: string;
  href: string;
}

export function NavLink({ href, icon, name, ...rest }: NaveLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {name}
        </Text>
      </ChakraLink>
    </Link>
  );
}
