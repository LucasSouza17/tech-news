import { useState } from "react";
import { SignInButton } from "../SignInButton";
import { FiMenu } from "react-icons/fi";
import styles from "./styles.module.scss";
import { MenuHamburger } from "./MenuHamburger";

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
            <a className={styles.active} href="">
              Home
            </a>
            <a href="">Posts</a>
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
