'use client'

import Title from '../Title/Title';
import style from './ProductsItem.module.scss';
import ProductCard from './Products';

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
        name: 'Green Lettuce',
        price: 9.00,
        imgSrc: '/images/lettuce.png',
        ratingImgSrc: '/icons/rating.svg',
        bagSrc: '/icons/Bag2.svg',
        heart: '/icons/Heart.svg',
        eye: '/icons/Eye.svg',
        isOnSale: false,
    },
    {
        name: 'Eggplant',
        price: 34.00,
        imgSrc: '/images/eggplant.jpg',
        ratingImgSrc: '/icons/rating.svg',
        bagSrc: '/icons/Bag2.svg',
        heart: '/icons/Heart.svg',
        eye: '/icons/Eye.svg',
        isOnSale: false,
    },
    {
        name: 'Big Potatoes',
        price: 20.0,
        imgSrc: '/images/potato.jpg',
        ratingImgSrc: '/icons/rating.svg',
        bagSrc: '/icons/Bag2.svg',
        heart: '/icons/Heart.svg',
        eye: '/icons/Eye.svg',
        isOnSale: false,
    },
    {
        name: 'Corn',
        price: 20.99,
        imgSrc: '/images/corn.jpg',
        ratingImgSrc: '/icons/rating.svg',
        bagSrc: '/icons/Bag2.svg',
        heart: '/icons/Heart.svg',
        eye: '/icons/Eye.svg',
        isOnSale: false,
    },
    {
        name: 'Fresh Cauliflower',
        price: 10.0,
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
        oldPrice: 18,
        imgSrc: '/images/capsicum.jpg',
        ratingImgSrc: '/icons/rating.svg',
        bagSrc: '/icons/Bag2.svg',
        heart: '/icons/Heart.svg',
        eye: '/icons/Eye.svg',
        isOnSale: true,
    },
    {
        name: 'Green Chili',
        price: 12.0,
        imgSrc: '/images/greenChill.jpg',
        ratingImgSrc: '/icons/rating.svg',
        bagSrc: '/icons/Bag2.svg',
        heart: '/icons/Heart.svg',
        eye: '/icons/Eye.svg',
        isOnSale: false,
    }
];

const ProductsSection = () => (
    <>
        <Title heading="Popular Products"/>
        <div className={style.main}>
            <div className={style.container}>
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
);

export default ProductsSection;