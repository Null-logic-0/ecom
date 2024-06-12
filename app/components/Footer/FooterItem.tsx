import Image from 'next/image';
import Link from 'next/link';
import FooterMenu from './FooterMenu';
import style from "./FooterItem.module.scss";
import Icons from './Icons';


type props = {
    logo: string;
    text: string;
    phoneNum: string;
    email: string;
    emailT: string;
    phoneNumber: string;
    ftTxt: string;
}

const FooterItem = ({ logo, text, phoneNum, email, emailT, phoneNumber, ftTxt }: props) => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.heading}>
                    <Image src={logo} alt='logo' width={183} height={38} />
                    <p className={style.text}>{text}</p>
                    <div className={style.infos}>
                        <Link href={phoneNum} className={style.info}>{phoneNumber}</Link>
                        <span className={style.text}>or</span>
                        <Link href={email} className={style.info}>{emailT}</Link>
                    </div>
                </div>

                <FooterMenu />

            </div>
            <div className={style.bottom}>
                <p className={style.text}>{ftTxt}</p>
                <Icons/>
            </div>
        </div>
    )
}

export default FooterItem;