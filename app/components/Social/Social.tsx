import Image from 'next/image';
import Title from '../Title/Title';
import style from "./Social.module.scss";


const instagramImages = [
    { src: '/images/tomatoPost.png', alt: 'IG-img', icon: '/icons/IG.svg' },
    { src: '/images/leavest.png', alt: 'IG-img', icon: '/icons/IG.svg' },
    { src: '/images/IeavesPost.png', alt: 'IG-img', icon: '/icons/IG.svg' },
    { src: '/images/lettuce2.png', alt: 'IG-img', icon: '/icons/IG.svg' },
    { src: '/images/capsicum2.png', alt: 'IG-img', icon: '/icons/IG.svg' },
    { src: '/images/lemons.png', alt: 'IG-img', icon: '/icons/IG.svg' }
];

const InstagramSection = () => {
    return (
        <>
            <Title heading='Follow us on Instagram' mode='center' showBtn={false} />
            <div className={style.main}>
                <div className={style.container}>
                    {instagramImages.map((image, index) => (
                        <div key={index} className={style.img}>
                            <Image src={image.src} alt={image.alt} width={200} height={200} />
                            <div className={style.hover}>
                                <Image src={image.icon} alt={image.alt} width={32} height={32} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default InstagramSection;
