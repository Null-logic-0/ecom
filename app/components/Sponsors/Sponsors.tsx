import Image from 'next/image';
import Link from 'next/link';
import style from './Sponsors.module.scss';

type props = {
    icon: string;
    link: string;
}

const Sponsors = ({ icon,link }: props) => {
    return (
        <>
            <Link href={link} className={style.container}>
                <Image src={icon} alt='icon' width={81} height={32} />
            </Link>

            <div className={style.line}></div>


        </>
    )
}

export default Sponsors;