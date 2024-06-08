import Button from "../ButtonComponent/Button";
import style from "./Cover.module.scss";




const Cover = () => {

    const coverData = [
        {
            title: 'Summer Sale',
            txt: 'OFF',
            discount: '37%',
            descrption: 'Free on all your order, Free Shipping and  30 days money-back guarantee'
        },
    ]
    return (
        <div className={style.main}>

            <div className={style.container}>

                <div className={style.text}>

                    <h4 className={style.title}>
                        {coverData[0].title}
                    </h4>

                    <p className={style.subTitle}>
                        {coverData[0].discount}
                        <span className={`${style.subTitle} ${style.color}`}>
                            {coverData[0].txt}
                        </span>
                    </p>

                    <p className={style.txt}>
                        {coverData[0].descrption}
                    </p>

                    <Button title="Shop Now" img="/icons/arrow.svg" icon mode="color" />

                </div>




            </div>
        </div>
    )
}

export default Cover;