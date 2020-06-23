import styles from "./example.module.css";
// поддержка css-modules
import { ActiveLink } from "./active-link";

export function DefaultHeader() {
  return (
    <div className={styles.container}>
      <ActiveLink href="/">
        <a>Home</a>
      </ActiveLink>
      <ActiveLink href="/news">
        <a>News</a>
      </ActiveLink>
      <ActiveLink href="/pre-render">
        <a>pre-render</a>
      </ActiveLink>
      <ActiveLink href="/server-side-render">
        <a>server-side-render</a>
      </ActiveLink>
      <ActiveLink href="/gh-info">
        <a>GhInfo</a>
      </ActiveLink>
    </div>
  );
}
