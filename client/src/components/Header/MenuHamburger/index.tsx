import { useState } from "react";
import Modal from "react-modal";
import { SignInButton } from "../../SignInButton";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

interface MenuHamburgerProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function MenuHamburger({isOpen, setIsOpen}: MenuHamburgerProps) {
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
          <a className={styles.active} href="">
            Home
          </a>
          <a href="">Posts</a>
        </nav>

        <SignInButton />
      </div>
    </Modal>
  );
}
