// Menu.tsx
'use client'
import React, { useEffect, useState } from 'react';
import Header from './MenuItem';

const navItems = [
    { label: 'Home', href: '/', hasDropdown: true },
    { label: 'Shop', href: '/shop', hasDropdown: true },
    { label: 'Pages', href: '/pages', hasDropdown: true },
    { label: 'Blog', href: '/blog', hasDropdown: true },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href:'/pages/contact' },
];

const Menu: React.FC = () => {
    const [mode, setMode] = useState<'fill' | 'outline'>('outline');

    useEffect(() => {
        if (window.location.pathname === '/') {
            setMode('fill');
        } else {
            setMode('outline');
        }
    }, []);

    return (
        <div>
            <Header navItems={navItems} phoneNumber="2195550114" mode={mode} /> {/* Pass mode to Header */}
        </div>
    );
};

export default Menu;
