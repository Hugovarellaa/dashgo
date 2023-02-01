import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, ReactElement } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  shouldMatchExactHref?: boolean
}

export function ActiveLink({
  shouldMatchExactHref = false,
  children,
  ...rest
}: ActiveLinkProps) {
  let isActive = false

  const { asPath } = useRouter()

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  }

  if (
    (!shouldMatchExactHref && asPath.startsWith(String(rest.href))) ||
    asPath.startsWith(String(rest.as))
  ) {
    isActive = true
  }

  return (
    <Link {...rest} legacyBehavior>
      {cloneElement(children, {
        color: isActive ? 'pink.500' : 'gray.50',
      })}
    </Link>
  )
}
