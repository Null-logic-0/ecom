import React from 'react';
import Button from '../ButtonComponent/Button';
import styles from './Banner.module.scss';

const Banner = () => {
    const cardsData = [
        {
            id: 1, title: 'Fresh & Healthy Organic Food',
            content: 'Sale up to   ',
            discount: '30% OFF',
            descrption: 'Free shipping on all your order.'
        },
        { id: 2, title: 'Summer Sale', discount: '75% OFF', content: 'Only Fruit & Vegetable' },
        { id: 3, title: 'Best Deal', content: 'Special Products Deal of the Month' }
    ];

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={`${styles.cardHalfWidth} ${styles.card} ${styles.card1}`}>

                    <h1 className={styles.heroTitle}>{cardsData[0].title}</h1>

                    <div className={styles.heroSubTitle}>
                        <p className={`${styles.txt}`}>
                            {cardsData[0].content}
                            <span>{cardsData[0].discount}</span>
                        </p>
                        <p className={`${styles.txt} ${styles.small}`}>{cardsData[0].descrption}</p>
                    </div>

                    <Button mode="fill" title='Shop now' img={'/icons/arrow.png'} icon />
                </div>

                <div className={styles.column}>
                    {cardsData.slice(1).map((card, index) => (
                        <div
                            className={`${styles.cardFullWidth} ${styles.card} ${index === 0 ? styles.card2 : styles.card3}`}
                            key={card.id}
                        >
                            <h2 className={`${styles.subTxt} ${styles.small}`}>{card.title}</h2>
                            <span className={`${styles.subTxt} ${styles.big}`}>{card.discount}</span>
                            <p className={`${styles.small} ${styles.desc}`}>{card.content}</p>
                            <Button mode="outline" title='Shop now' img={'/icons/arrow.png'} icon/>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Banner;




