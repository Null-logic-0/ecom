import Button from "../ButtonComponent/Button";
import style from './ContactItem.module.scss';

type props={
    title:string;
    text:string;
    template:string;
    email:string;
    message: string;
    textarea:string;
}


const ContactItem = ({title,text,template,email,message,textarea}:props) => {
    return (
        <div className={style.container}>
            <div className={style.heading}>
                <h5 className={style.title}>{title}</h5>
                <p className={style.text}>{text}</p>
            </div>
            <form action="#" className={style.form}>
                <div className={style.inputs}>
                    <input type="text" placeholder={template} name="template"  className={style.input}/>
                    <input type="email" placeholder={email} name="email" className={style.input}/>
                </div>
                <input type="text" placeholder={message} name="Message" className={style.input} />
                <textarea name="Subjects" placeholder={textarea} id="" cols={95} rows={10} className={style.textarea}/>
                <Button title="Send Message" img={"/"} mode="color"/>
            </form>
        </div>
    )
}

export default ContactItem;