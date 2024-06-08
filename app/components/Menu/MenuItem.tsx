import Link from 'next/link';
import React from 'react';
import { FaAngleDown, FaPhoneVolume } from 'react-icons/fa';
import styles from './MenuItem.module.scss';

type NavItem = {
    label: string;
    href?: string;
    hasDropdown?: boolean;
};

type HeaderProps = {
    navItems: NavItem[];
    phoneNumber: string;
    mode?: 'fill' | 'outline';
};

const Header = ({ navItems, phoneNumber, mode = 'fill' }:HeaderProps) => {
    const containerClassNames = [
        styles.menu,
        mode === 'fill' ? styles.fill : styles.outline
    ];

    const linkClassNames = mode === 'fill' ? styles.fillLinks : styles.outlineLinks;

    return (
        <div className={containerClassNames.join(' ').trim()}>
            <nav className={styles.nav}>
                <ul className={styles.navMenus}>
                    {navItems.map((item, index) => (
                        <li key={index} className={styles.navItem}>
                            {item.href ? (
                                <Link href={item.href} className={`${linkClassNames} ${styles.links}`}>
                                    {item.label}
                                    {item.hasDropdown && <FaAngleDown />}
                                </Link>
                            ) : (
                                <span className={linkClassNames}>
                                    {item.label}
                                    {item.hasDropdown && <FaAngleDown />}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
          
                <a href={`tel:${phoneNumber}`} className={`${linkClassNames} ${styles.links}`}>
                    <FaPhoneVolume  className={styles.icon}/> {phoneNumber}
                </a>
        
        </div>
    );
};

export default Header;
