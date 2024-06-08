/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */

import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link";
import Image from "next/image";
import styles from "./HeaderTop.module.scss"

type Props = {
    icon: string;
    text: string;
    mode?: 'fill' | 'outline';
    value?: string;
    label?: string;
    in: string;
    up: string;
    className?: string
}

const languageOptions = [
    { value: 'eng', label: 'Eng' },
    { value: 'rus', label: 'Rus' },
    { value: 'geo', label: 'Geo' },
];

const currencyOptions = [
    { value: 'usd', label: 'USD' },
    { value: 'rub', label: 'RUB' },
    { value: 'gel', label: 'GEL' },
];

const link = "https://www.google.com/maps/place/Novator+%E2%80%A2+%E1%83%9C%E1%83%9D%E1%83%95%E1%83%90%E1%83%A2%E1%83%9D%E1%83%A0%E1%83%98/@41.7272561,44.7359105,17z/data=!4m6!3m5!1s0x40447355f4a3e56d:0x89cae3ea42872edf!8m2!3d41.7271181!4d44.7359331!16s%2Fg%2F11ts3gm5w3?entry=ttu"
const signIn = "/"
const signUp = "/"

export default (props: Props) => {

    const classNames = [styles.text, props.className];

    if (props.mode == 'outline') classNames.push(styles.outline)
    else classNames.push(styles.fill)


    return (
        <div className={classNames.join(' ').trim()}>

            <div className={styles.main}>
                <div className={styles.location}>
                    <Image src={props.icon} alt="icon" width={15} height={18} />
                    <a href={link} target="_blank" className={styles.txt}>{props.text}</a>
                </div>
                <div className={styles.options}>
                    <div className={styles.option}>

                        <select className={styles.txt}>
                            {languageOptions.map((props) => (
                                <option key={props.value} value={props.value}>
                                    {props.label}
                                </option>
                            ))}
                        </select>

                        <select className={styles.txt}>
                            {currencyOptions.map((props) => (
                                <option key={props.value} value={props.value} className={styles.txt}>
                                    {props.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.btn}>
                        <Link href={signIn} className={styles.txt}>{props.in}</Link>
                        <span className={styles.txt}>/</span>
                        <Link href={signUp} className={styles.txt}>{props.up}</Link>
                    </div>

                </div>
            </div>

        </div>




    )
}