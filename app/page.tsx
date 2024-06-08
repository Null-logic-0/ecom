'use client'
import Image from "next/image";
import styles from "./page.module.css";
import HeaderTop from "./components/HeaderTop/HeaderTop";
import Nav from "./components/Navigation/Nav";
import Menu from "./components/Menu/Menu";
import Banner from "./components/Banner/Banner";
import Feature from "./components/Feature/Feature";
import Categories from "./components/Categories/Categories";
import ProductsSection from "./components/Products/ProductsItem";
import InfoBannar from "./components/InfoBannar/InfoBannar";
import ProductCard from "./components/HotDeals/HotDealsItems";
import DealsSection from "./components/HotDeals/HotDeals";
import Cover from "./components/Cover/Cover";
import FeaturedProducts from "./components/Featured/Featured";
import NewsSection from "./components/News/NewsItem";



export default function Home() {
  return (
    <div className={styles.main}>

      <HeaderTop text='Store Location: Lincoln- 344, Illinois, Chicago, USA'
        icon="/icons/MapPin.svg"
        in='Sign In'
        up='Sign up'
        mode="outline"

      />
      <Nav />
      <Menu/>
      <Banner/>
      <Feature/>
      <Categories/>
      <ProductsSection/>
      <InfoBannar/>
      <DealsSection/>
      <Cover/>
      <FeaturedProducts/>
      <NewsSection/>
   
    
    
      
        
    </div>


  );
}
