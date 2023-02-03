import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from '@chakra-ui/react'
import { ElementType } from 'react'

interface Props extends ChakraLinkProps {
  name: string
  icon: ElementType
}

export function NavLink({ name, icon, ...rest }: Props) {
  return (
    <ChakraLink display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text marginLeft="4" fontWeight="medium">
        {name}
      </Text>
    </ChakraLink>
  )
}
