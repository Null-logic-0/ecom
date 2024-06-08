'use client'
import styles from "./CountDown.module.scss";
import { useCountdown } from '@uselite/countdown';

type Props = {
    mode?: 'white' | 'black ';
}


export default function Timer({mode}:Props) {
    const { days, hours, minutes, seconds } = useCountdown(new Date("june 10, 2024 00:00:00"));

    const numberClassNames = [
        styles.numbers,
        mode === 'white' ? styles.white : styles.black
    ];

    const textClassNames = [
        styles.title,
        mode === 'white' ? styles.white : styles.black
    ];

    return (
        <div className={styles.container}>
            <div className={styles.txt}>
                <span className={numberClassNames.join(' ').trim()}>{days}:</span>
                <span className={textClassNames.join(' ').trim()}> Days </span> 
            </div>
            <div className={styles.txt}>
                <span className={numberClassNames.join(' ').trim()}>{hours}:</span>
                <span className={textClassNames.join(' ').trim()}> Hours </span> 
            </div>
            <div className={styles.txt}>
                <span className={numberClassNames.join(' ').trim()}>{minutes}:</span>
                <span className={textClassNames.join(' ').trim()}> Mins </span> 
            </div>
            <div className={styles.txt}>
                <span className={numberClassNames.join(' ').trim()}>{seconds}</span>
                <span className={textClassNames.join(' ').trim()}>Secs</span> 
            </div>
            
        </div>
    )
}