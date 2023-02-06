import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from '@chakra-ui/react'
import { ElementType } from 'react'

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType
  name: string
}

export function NavLink({ icon, name, ...rest }: NavLinkProps) {
  return (
    <ChakraLink display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text marginLeft="4" fontWeight="medium">
        {name}
      </Text>
    </ChakraLink>
  )
}
