import Link from 'next/link';
import styles from './HotDealsItem.module.scss';
import Image from 'next/image';
import Button from '../ButtonComponent/Button';
import Sale from '../Sale/Sale';
import Countdown from "../CountDown/CountDown";


type Props = {
    name: string;
    price: number;
    oldPrice?: number;
    imgSrc: string;
    ratingImgSrc: string;
    isOnSale: boolean;
    heart: string;
    eye: string;
    feedback: string;
    alert: string;
}

const Deals = ({ name, price, oldPrice, imgSrc, ratingImgSrc, isOnSale, heart, eye, feedback, alert }: Props) => {
    return (
        <Link href='#'>
            <div className={styles.container}>
                <Image src={imgSrc} alt='product' width={425} height={353} />
                {isOnSale && (
                    <div className={`${isOnSale ? styles.sale : ''}`}>
                        <Sale txt='Sale 50%' />
                        <Sale txt='Best Sale' mode='color' />
                    </div>
                )}
                <div className={styles.buy}>
                    <div className={`${styles.favorite} ${styles.icon}`}>
                        <Image src={heart} alt='icon' width={20} height={20} />
                    </div>
                    <Button size='large' mode='color' title='Add to Cart' img='/icons/cart3.svg' />
                    <div className={`${styles.eye} ${styles.icon}`}>
                        <Image src={eye} alt='icon' width={20} height={20} />
                    </div>
                </div>
                <div className={styles.priceRating}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.price}>
                        ${price.toFixed(2)}{' '}
                        {isOnSale && oldPrice && (
                            <span className={styles.oldPrice}>${oldPrice.toFixed(2)}</span>
                        )}
                    </p>
                    <div className={styles.rating}>
                        <Image src={ratingImgSrc} alt="rating" className="card__rating" width={60} height={12} />
                        <span className={styles.feedback}>{feedback}</span>
                    </div>

                </div>
                <div className={styles.countDown}>
                    <p className={styles.alert}>{alert}</p>
                    <Countdown />
                </div>
            </div>
        </Link>
    )

}

export default Deals
