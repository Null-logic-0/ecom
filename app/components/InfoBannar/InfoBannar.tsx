import Baner from './InfoBannarItem';
import style from './InfoBannar.module.scss';



const cardData = [
    {
        backgroundClass: 'VegBg',
        title: "Sale of the Month",
        subTitle: "Best Deals",
        text: false,
        countdown: true,

    },
    {
        backgroundClass: 'meatBg',
        title: "Low-Fat Meat",
        subTitle: "85% Fat Free",
        sale: '$79.99',
        txt: 'Started at',
        text: true,
        countdown: false,
    },
    {
        backgroundClass: 'fruitBg',
        title: "100% Fresh Fruit",
        subTitle: "Summer Sale",
        txt: 'Up to',
        sale: '64% OFF',
        text: true,
        countdown: false,
    }
];





const infoBannar = () => {
    return (
        <div className={style.container}>
            {cardData.map((data, index) => (
                <Baner
                    key={index}
                    bg={data.backgroundClass}
                    title={data.title}
                    subTitle={data.subTitle}
                    txt={data.txt}
                    sale={data.sale}
                    text={data.text}
                    hasCountDown={data.countdown}
                />
            ))}
        </div>
    )
}

export default infoBannar;