import { useState } from "react";
import { SignInButton } from "../SignInButton";
import { FiMenu } from "react-icons/fi";
import styles from "./styles.module.scss";
import { MenuHamburger } from "./MenuHamburger";
import { ActiveLink } from "../ActiveLink";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <img src="/images/logo.svg" alt="tech.news" />
          <nav>
            <ActiveLink activeClassName={styles.active} href="/">
              <a>Home</a>
            </ActiveLink>
            <ActiveLink activeClassName={styles.active} href="/posts">
              <a>Posts</a>
            </ActiveLink>
          </nav>

          <SignInButton />
          <button onClick={handleOpenModal}>
            <FiMenu />
          </button>
        </div>
      </header>
      <MenuHamburger isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
