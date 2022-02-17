import { Icon, Link, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface NaveLinkProps {
  icon: ElementType;
  name: string;
}

export function NavLink({ icon, name }: NaveLinkProps) {
  return (
    <Link display="flex" alignItems="center">
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {name}
      </Text>
    </Link>
  );
}
