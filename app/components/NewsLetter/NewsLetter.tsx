import SocialMedia from "./SocialMedia";
import style from './NewsLetter.module.scss';

type props = {
    title: string;
    text: string;
    placeHolder: string;
    subscribe: string;
}



const NewsLetter = ({ title, text, placeHolder, subscribe }: props) => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.heading}>
                    <h5 className={style.title}>{title}</h5>
                    <p className={style.text}>{text}</p>
                </div>
                <form action='#' className={style.form}>
                    <input
                        type="email"
                        name="email"
                        placeholder={placeHolder}
                        className={style.emailInput}
                    />
                    <input
                        type="submit"
                        value={subscribe}
                        className={style.emailBtn}
                    />
                </form>

                <SocialMedia/>

               
            </div>
        </div>
    )
}

export default NewsLetter;