import ProductCard from "../Products/Products";
import Title from "../Title/Title";
import style from "./Featured.module.scss";

const products = [
    {
        name: 'Green Apple',
        price: 14.99,
        oldPrice: 20.99,
        imgSrc: '/images/apple.jpg',
        ratingImgSrc: '/icons/rating.svg',
        bagSrc: '/icons/Bag2.svg',
        heart: '/icons/Heart.svg',
        eye: '/icons/Eye.svg',
        isOnSale: true,
    },
    {
        name: 'Fresh Indian Malta',
        price: 20.0,
        imgSrc: '/images/orange.jpg',
        ratingImgSrc: '/icons/rating.svg',
        bagSrc: '/icons/Bag2.svg',
        heart: '/icons/Heart.svg',
        eye: '/icons/Eye.svg',
        isOnSale: false,
    },
    {
        name: 'Chinese Cabbage',
        price: 12.0,
        imgSrc: '/images/cabbage.jpg',
        ratingImgSrc: '/icons/rating.svg',
        bagSrc: '/icons/Bag2.svg',
        heart: '/icons/Heart.svg',
        eye: '/icons/Eye.svg',
        isOnSale: false,
    },
    {
        name: 'Eggplant',
        price: 32.0,
        imgSrc: '/images/eggplant.jpg',
        ratingImgSrc: '/icons/rating.svg',
        bagSrc: '/icons/Bag2.svg',
        heart: '/icons/Heart.svg',
        eye: '/icons/Eye.svg',
        isOnSale: false,
    },
    {
        name: 'Fresh Cauliflower',
        price: 22.0,
        imgSrc: '/images/cauliflower.jpg',
        ratingImgSrc: '/icons/rating.svg',
        bagSrc: '/icons/Bag2.svg',
        heart: '/icons/Heart.svg',
        eye: '/icons/Eye.svg',
        isOnSale: false,
    }

];

const FeaturedProducts = () => {
    return (
        <>
            <Title heading="Featured Products" />
            <div className={style.container}>
                <div className={style.products}>
                    {products.map((product, index) => (
                        <ProductCard key={index}
                            name={product.name}
                            price={product.price}
                            oldPrice={product.oldPrice}
                            imgSrc={product.imgSrc}
                            ratingImgSrc={product.ratingImgSrc}
                            isOnSale={product.isOnSale}
                            bagSrc={product.bagSrc}
                            heart={product.heart}
                            eye={product.eye}

                        />
                    ))}

                </div>
            </div>
        </>
    )
}

export default FeaturedProducts;