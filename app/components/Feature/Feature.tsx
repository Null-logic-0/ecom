import FeatureItems from "./FeatureItems";
import styles from "./Feature.module.scss"

const data = [
    {
        title: 'Free Shipping',
        subTitle: 'Free shipping on all your order',
        imageUrl: '/icons/delivery.svg'
    },
    {
        title: 'Customer Support 24/7',
        subTitle: 'Instant access to Support',
        imageUrl: '/icons/headphones.svg'
    },
    {
        title: '100% Secure Payment',
        subTitle: 'We ensure your money is save',
        imageUrl: '/icons/shopping.svg'
    },

    {
        title: 'Money-Back Guarantee',
        subTitle: '30 Days Money-Back Guarantee',
        imageUrl: '/icons/package.svg'
    }
];

const Feature = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                {data.map((card, index) => (
                    <FeatureItems
                        key={index}
                        title={card.title}
                        subTitle={card.subTitle}
                        img={card.imageUrl}
                    />
                ))}
            </div>
        </div>

    )
}

export default Feature;