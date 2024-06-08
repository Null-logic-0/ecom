import Link from 'next/link';
import Image from "next/image";
import styles from "./CategoriesItems.module.scss";

type props = {
    href: string;
    title: string;
    img: string;
}


const CategoriesItems = ({ href, title, img }: props) => {
    return (


        <div className={styles.container}>

            <Link href={href}>
                <div className={styles.card}>
                    <Image src={img} alt='icon' width={190} height={130} />
                    <p className={styles.title}>{title}</p>

                </div>
            </Link>


        </div>


    )
}

export default CategoriesItems;