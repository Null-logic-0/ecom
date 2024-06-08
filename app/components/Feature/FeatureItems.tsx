import Image from "next/image";
import styles from "./FeatureItems.module.scss";


type Props = {
    title: string;
    subTitle: string;
    img: string;
}

const FeatureItems = ({ title, subTitle, img }: Props) => {
    return (
        <div className={styles.container}>

            <Image src={img} alt='icon' width={40} height={40} />
            <div className={styles.info}>
                <p className={styles.title}>{title}</p>
                <p className={styles.subTitle}>{subTitle}</p>
            </div>

        </div>


    )
}

export default FeatureItems;