"use client";

import { useState } from "react";

import Link from "next/link";
import styles from "./Header.module.css";
import { links } from "./data";
import Logo from "../../elements/Logo/Logo";
import Button from "../../elements/Button/Button";
import DarkToggle from "../../elements/darktoggle/DarkToggle";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CiMenuFries size={24} /> : <CiMenuBurger size={24} />}
      </div>
      {/* <DarkToggle /> */}
      <div className={`${styles.navLinks} ${isOpen ? styles.active : ""} `}>
        {links.map((link) => (
          <Link
            onClick={() => setIsOpen(!isOpen)}
            className={styles.navLink}
            href={link.link}
            key={link.id}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <Button />
    </div>
  );
};

export default Header;
