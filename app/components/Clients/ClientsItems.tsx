import Image from 'next/image';
import style from './ClientsItems.module.scss';
import { BiBorderRadius } from 'react-icons/bi';

type props ={
    icon: string;
    text: string;
    image:string;
    userName: string;
    role: string;
    rating:string;
}



const ClientsItems =({icon,text,image,userName,role,rating}:props)=>{
    return(
        <div className={style.main}>
            <Image src={icon} alt='icon' width={32} height={26}/>
            <p className={style.text}>{text}</p>
            <div className={style.container}>
                <div className={style.costumer} >
                    <Image src={image} alt='image' width={56} height={56}/>
                    <div className={style.name}>
                        <p className={style.user}>{userName}</p>
                        <p className={style.role}>{role}</p>
                    </div>
                </div>
                <Image src={rating} alt='icon' width={104} height={20}/>
            </div>

        </div>
    )
}

export default ClientsItems;