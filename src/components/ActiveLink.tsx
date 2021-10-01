import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveProps extends LinkProps {
  children?: ReactElement;
  showMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  showMatchExactHref = false,
  ...rest
}: ActiveProps) {
  const { asPath } = useRouter();

  let isActive = false;
  if (showMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (
    !showMatchExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }
  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50",
      })}
    </Link>
  );
}
