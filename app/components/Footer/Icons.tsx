import Image from "next/image";
import style from './Icons.module.scss';


const socialMediaLinks = [
    { icon: '/icons/ApplePay.png'},
    { icon: '/icons/Visa.png'},
    { icon: '/icons/Discover.png'},
    { icon: '/icons/Mastercard.png'},
    { icon: '/icons/secured.png'}

];

const Icons = () => {
    return (
        <div className={style.container}>
            {socialMediaLinks.map((social) => (
                <>
                    <div className={style.icon}>
                        <Image src={social.icon} alt='icon' width={45} height={32}/>
                    </div>
                </>
            ))}
        </div>
    )
}

export default Icons;