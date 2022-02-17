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
  ref: string;
}

export function NavLink({ ref, icon, name, ...rest }: NaveLinkProps) {
  return (
    <Link href={ref} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {name}
        </Text>
      </ChakraLink>
    </Link>
  );
}
