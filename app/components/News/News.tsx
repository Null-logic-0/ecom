import Image from 'next/image';
import Button from '../ButtonComponent/Button';
import style from "./News.module.scss";

type Props = {
    day: number;
    month: string;
    postInfo: string;
    coments: string;
    category: string;
    text: string;
    img: string;
    adminIcon: string;
    categoryIcon: string;
    comentIcon: string;



}

const News = ({
    day,
    month,
    postInfo,
    coments,
    category,
    text,
    img,
    adminIcon,
    categoryIcon,
    comentIcon }: Props) => {

    return (
        <div className={style.main}>
            <Image src={img} alt='image' width={424} height={324} />
            <div className={style.date}>
                <span className={style.day}>{day}</span>
                <span className={style.month}>{month}</span>
            </div>

            <div className={style.container}>
                <div className={style.panel}>
                    <div className={style.tag}>
                        <Image src={categoryIcon} alt='icon' width={20} height={20} />
                        <span className={style.txt}>{category}</span>
                    </div>
                    <div className={style.tag}>
                        <Image src={adminIcon} alt='icon' width={20} height={20} />
                        <span className={style.txt} >{postInfo}</span>
                    </div>
                    <div className={style.tag}>
                        <Image src={comentIcon} alt='icon' width={20} height={20} />
                        <span className={style.txt}>{coments}</span>
                    </div>
                </div>
                <div className={style.bottom}>
                    <p className={style.description}>{text}</p>
                    <Button mode='outline' title='Read more' img='/icons/arrow.png' icon />
                </div>

            </div>


        </div>
    )
}

export default News