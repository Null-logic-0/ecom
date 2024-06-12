import Link from "next/link";
import Image from "next/image";
import style from './SocialMedia.module.scss';


const socialMediaLinks = [
    { icon: '/icons/facebook.png', url: 'https://www.facebook.com' },
    { icon: '/icons/X.svg', url: 'https://www.twitter.com' },
    { icon: '/icons/pinterest.svg', url: 'https://www.pinterest.com' },
    { icon: '/icons/IG2.svg', url: 'https://www.instagram.com' }
];

const SocialMedia = () => {
    return (
        <div className={style.container}>
            {socialMediaLinks.map((social) => (
                <>
                    <Link href={social.url} target="_blank" className={style.icon}>
                        <Image src={social.icon} alt='icon' width={30} height={30}/>
                    </Link>
                </>
            ))}
        </div>
    )
}

export default SocialMedia;