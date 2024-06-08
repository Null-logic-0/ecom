import Button from "../ButtonComponent/Button";
import styles from "./Title.module.scss";


type props = {
    heading: string;
    showBtn?: boolean;
    mode?: 'center';
    className?: string;
}

const Title = ({ heading, className,mode,showBtn = true}: props) => {

    const ClassNames = [styles.container ,className];
    if (mode === 'center') ClassNames.push('center')


    return (
        <div className={styles.main}>
            <div className={ClassNames.join('').trim()}>
                <h3 className={styles.heading}>{heading}</h3>
                {showBtn && <Button mode="outline" icon title="view all" img="/icons/arrow.png" />}
            </div>
        </div>

    )
}

export default Title;