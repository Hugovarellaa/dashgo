import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import { ElementType } from 'react'

interface Props extends ChakraLinkProps {
  name: string
  icon: ElementType
  href: string
}

export function NavLink({ name, icon, href, ...rest }: Props) {
  return (
    <Link href={href} legacyBehavior passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text marginLeft="4" fontWeight="medium">
          {name}
        </Text>
      </ChakraLink>
    </Link>
  )
}
