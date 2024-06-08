'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './Products.module.scss';
import Sale from '../Sale/Sale';

type Product = {
    name: string;
    price: number;
    oldPrice?: number;
    imgSrc: string;
    ratingImgSrc: string;
    isOnSale: boolean;
    bagSrc: string;
    heart: string;
    eye: string;
};

const ProductCard = ({ name, price, oldPrice, imgSrc, ratingImgSrc, isOnSale, bagSrc, heart, eye }: Product) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href="#">
            <div
                className={style.products}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className={style.card}>
                    <Image src={imgSrc} alt={name} width={254} height={230} />
                    {isOnSale && (
                        <div className={`${isOnSale ? style.sale : ''}`}>
                            <Sale txt="Sale 50%" />
                        </div>
                    )}
                    {isHovered && (
                        <div className={style.hover}>
                            <div className={`${style.favorite} ${style.icon}`}>
                                <Image src={heart} alt="icon" width={20} height={20} />
                            </div>
                            <div className={`${style.eye} ${style.icon}`}>
                                <Image src={eye} alt="icon" width={20} height={20} />
                            </div>
                        </div>
                    )}
                </div>
                <div className={style.cardBottom}>
                    <div className={style.priceRating}>
                        <p className={style.name}>{name}</p>
                        <p className={style.price}>
                            ${price.toFixed(2)}{' '}
                            {isOnSale && oldPrice && <span className={style.oldPrice}>${oldPrice.toFixed(2)}</span>}
                        </p>
                        <Image src={ratingImgSrc} alt="rating" className="card__rating" width={60} height={12} />
                    </div>
                    <div className={style.cardBag}>
                        <Image src={bagSrc} alt="icon" width={20} height={20} />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
