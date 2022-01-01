import Link from "next/link";
import Modal from "react-modal";
import { SignInButton } from "../../SignInButton";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";
import { ActiveLink } from "../../ActiveLink";

interface MenuHamburgerProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function MenuHamburger({ isOpen, setIsOpen }: MenuHamburgerProps) {
  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className={styles.modal}
    >
      <button type="button" onClick={handleCloseModal}>
        <FiX />
      </button>
      <div className={styles.menuContent}>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a onClick={handleCloseModal}>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a onClick={handleCloseModal}>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </Modal>
  );
}
