import ContactItem from "./ContactItem"
import InfoItem from "./InfoItem";
import style from './Contact.module.scss';


const ContactUs = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <InfoItem />
                <ContactItem
                    title="Just Say Hello!"
                    text="Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me."
                    template="Template Cookie"
                    email="zakirsoft@gmail.com"
                    message="Hello|"
                    textarea="Subjects" />

            </div>
           
        </div>
    )
}

export default ContactUs;