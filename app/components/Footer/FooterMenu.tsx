import Link from 'next/link';
import style from './FooterMenu.module.scss';

type Link = {
    name: string;
    href: string;
}

type Section = {
    title: string;
    links: Link[];
}

const sections: Section[] = [
    {
        title: 'My Account',
        links: [
            { name: 'My Account', href: '#' },
            { name: 'Order History', href: '#' },
            { name: 'Shopping Cart', href: '#' },
            { name: 'Wishlist', href: '#' },
        ],
    },
    {
        title: 'Helps',
        links: [
            { name: 'Contact', href: '/pages/contact' },
            { name: 'Faqs', href: '#' },
            { name: 'Terms & Condition', href: '#' },
            { name: 'Privacy Policy', href: '#' },
        ],
    },
    {
        title: 'Proxy',
        links: [
            { name: 'About', href: '#' },
            { name: 'Shop', href: '#' },
            { name: 'Product', href: '#' },
            { name: 'Track Order', href: '#' },
        ],
    },
    {
        title: 'Categories',
        links: [
            { name: 'Fruit & Vegetables', href: '#' },
            { name: 'Meat & Fish', href: '#' },
            { name: 'Bread & Bakery', href: '#' },
            { name: 'Beauty & Health', href: '#' },
        ],
    },
];

const FooterMenu = () => {
    return (
        <div className={style.lists}>
            {sections.map((section, index) => (
                <div key={index} className={style.list}>
                    <p className={style.heading}>{section.title}</p>
                    <ul className={style.menu}>
                        {section.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                                <Link href={link.href} className={style.title}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default FooterMenu;
