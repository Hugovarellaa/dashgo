import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import { ElementType } from 'react'

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType
  name: string
  href: string
}

export function NavLink({ name, icon, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href} legacyBehavior>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize={20} />
        <Text marginLeft="4" fontWeight="medium">
          {name}
        </Text>
      </ChakraLink>
    </Link>
  )
}
