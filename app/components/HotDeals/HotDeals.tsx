'use client'
import Title from "../Title/Title";
import Deals from "./HotDealsItems";
import style from "./HotDeals.module.scss";
import ProductCard from "../Products/Products";


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
        isOnSale: false,
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
    },
    {
        name: 'Green Capsicum',
        price: 9.0,
        imgSrc: '/images/capsicum.jpg',
        ratingImgSrc: '/icons/rating.svg',
        bagSrc: '/icons/Bag2.svg',
        heart: '/icons/Heart.svg',
        eye: '/icons/Eye.svg',
        isOnSale: false,
    },





];


const DealsSection = () => (
    <div className={style.bg}>
        <Title heading="Hot Deals" />
        <div className={style.main}>
            <div className={style.container}>
                <Deals
                    name="Manzanas"
                    price={12.00}
                    imgSrc="/images/manzanas.jpg"
                    ratingImgSrc="/icons/Rating.svg"
                    isOnSale={true}
                    heart="/icons/Heart.svg"
                    eye="/icons/Eye.svg"
                    feedback="(524 Feedback)"
                    alert="Hurry up! Offer ends In:"
                    oldPrice={24.00}
                />
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

           
        </div>

    </div>
);

export default DealsSection;
