import React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

export function ActiveLink({
  href,
  children,
}: { children: React.ReactElement } & LinkProps) {
  const router = useRouter();

  let className = children.props.className || "";

  if (router.pathname === href) {
    className = `${className} selected`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
}
