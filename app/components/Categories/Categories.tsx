import Title from "../Title/Title";
import CategoriesItems from "./CategoriesItems";
import styles from "./Categories.module.scss";

const data = [
    {
        href: '/contact',
        imageUrl: '/images/fruits.jpg',
        title: 'Fresh Fruit'

    },
    {
        href: '/contact',
        imageUrl: '/images/vagetables.jpg',
        title: 'Fresh Vegetables'

    },
    {
        href: '/contact',
        imageUrl: '/images/meat.jpg',
        title: 'Meat & Fish'

    },

    {
        href: '/contact',
        imageUrl: '/images/snacks.jpg',
        title: 'Snacks'


    },
    {
        href: '/contact',
        imageUrl: '/images/beverages.jpg',
        title: 'Beverages'


    },
    {
        href: '/contact',
        imageUrl: '/images/health.jpg',
        title: 'Beauty & Health'


    },
    {
        href: '/contact',
        imageUrl: '/images/bakery.jpg',
        title: 'Bread & Bakery'


    },
    {
        href: '/contact',
        imageUrl: '/images/baking.jpg',
        title: 'Baking Needs'


    },
    {
        href: '/contact',
        imageUrl: '/images/cooking.jpg',
        title: 'Cooking'


    },
    {
        href: '/contact',
        imageUrl: '/images/diabetic.jpg',
        title: 'Diabetic Food'


    },
    {
        href: '/contact',
        imageUrl: '/images/dish.jpg',
        title: 'Dish Detergents'


    },
    {
        href: '/contact',
        imageUrl: '/images/oil.jpg',
        title: 'Oil'


    }
];

const Categories = () => {
    return (
        <>
        <Title heading="Popular Categories"/>
        <div className={styles.main}>
            <div className={styles.container}>
                {data.map((card, index) => (
                    <CategoriesItems
                        key={index}
                        href={card.href}
                        img={card.imageUrl}
                        title={card.title}

                    />
                ))}
            </div>
        </div>

        </>
        
    )
}

export default Categories;