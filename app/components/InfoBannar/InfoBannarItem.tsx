import Button from "../ButtonComponent/Button";
import style from "./InfoBannarItem.module.scss";
import Countdown from "../CountDown/CountDown";

type Props = {
    title: string;
    subTitle: string;
    text?: boolean;
    hasCountDown?: boolean;
    bg: string;
    txt?: string;
    sale?: string;
}

const Baner = ({ title, subTitle, text, txt, hasCountDown, bg, sale }:Props) => {
    const cardClassName = `${style.card} ${style[bg]}`;
    let titleClassName = style.title;
    let subTitleClassName = style.subTitle;
    let textClassName = style.text;
    let saleClassName = style.sale;
    const textStyle = text ? style.text : '';

    if (bg === 'fruitBg') {
        titleClassName = style.titleAlt;
        subTitleClassName = style.subTitleAlt;
        textClassName = style.textAlt;
        saleClassName = style.saleAlt;
    }

    return (
        <div className={`${cardClassName} ${textStyle}`}>
            <p className={subTitleClassName}>{subTitle}</p>
            <h3 className={titleClassName}>{title}</h3>
            {text && (
                <p className={textClassName}>
                    {txt}
                    <span className={saleClassName}> {sale}</span>
                </p>
            )}
            {hasCountDown && (
                <div>
                    <Countdown mode="white" />
                </div>
            )}
            <Button mode="fill" title="Shop Now" icon img="/icons/arrow.png" />
        </div>


    );
};

export default Baner;
