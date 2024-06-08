import style from './Sale.module.scss';

type props = {
    txt: string;
    mode?: 'color'| 'normal'
    className?: string;

}

const Sale = ({ txt , mode, className}: props) => {
    const classNames = [style.container, className];

    if (mode === 'color') classNames.push(style.color);
    else classNames.push(style.normal);
    return (
        <div className={classNames.join(' ').trim()}>
            <p className={style.txt}>
                {txt}
            </p>
        </div>
    )
}

export default Sale;