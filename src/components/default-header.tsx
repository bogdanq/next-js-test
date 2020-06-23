import Link from "next/link";
import { ActiveLink } from "./active-link";

export function DefaultHeader() {
  return (
    <div style={s}>
      <ActiveLink href="/">
        <a>Home</a>
      </ActiveLink>
      <ActiveLink href="/news">
        <a>News</a>
      </ActiveLink>
      <ActiveLink href="/login">
        <a>login</a>
      </ActiveLink>
      <ActiveLink href="/registration">
        <a>registration</a>
      </ActiveLink>
      <ActiveLink href="/gh-info">
        <a>GhInfo</a>
      </ActiveLink>
    </div>
  );
}

const s = {
  display: "flex",
  justifyContent: "space-around",
  border: "1px solid #000",
  height: 100,
  alignItems: "center",
};
