/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import Image from "next/image";
import styles from "./Navigation.module.scss";

type Props = {
    logo: string;
    search: string;
    heartIcon: string;
    cart: string;
    cartTxt: string;
    cartSum: number;


}

export default (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Image src={props.logo} alt="main-logo" width={183} height={38} />
                <div className={styles.search}>
                    <form className={styles.form} action="#">
                        <input type="search" name="search" placeholder="Search" required className={styles.input}/>
                        <Image src={props.search} alt="icon" width={20} height={20}  className={styles.searchIcon}/>
                        <input type="submit" value="Search" className={styles.btn} />
                    </form>
                </div>
                <div className={styles.cart}>
                    <Image src={props.heartIcon} alt="icon" width={32} height={32} />
                    <div className={styles.line}></div>
                    <div className={styles.icons}>
                        <Image src={props.cart} alt="cart" width={34} height={34} />
                        <div className={styles.txt}>
                            <p className={styles.cartTxt}>{props.cartTxt}</p>
                            <p className={styles.cartSum}>{`$${props.cartSum}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}