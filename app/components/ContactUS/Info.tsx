import React from 'react';
import Image from 'next/image';
import style from './Info.module.scss';

type props = {
    icon: string;
    adress: string;
    altText?: string;
    txt: string;
    altAdress?: string;


}


const Info = ({ icon, adress, altText, txt, altAdress }: props) => {
    return (

        <>
            <div className={style.container}>
                <Image src={icon} alt="icon" width={51} height={51} />
                <a href={adress} className={style.text}>{txt}</a>
                <a href={altAdress} className={style.text}>{altText}</a>
            </div>
        </>


    );
};

export default Info;
