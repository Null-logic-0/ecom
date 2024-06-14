import Info from './Info';
import style from './InfoItem.module.scss';


const data =[
    {
        icon:'/icons/MapPin.svg',
        adress:'https://maps.app.goo.gl/u8a459kTqW4XpXwp9',
        text:'2715 Ash Dr. San Jose, South Dakota 83475'
    },
    {
        icon:'/icons/Email.svg',
        adress:'mailto:Proxy@gmail.com',
        text:'Proxy@gmail.com',
        altAdress:'mailto:help.proxy.@gmail.com',
        altText:'help.proxy.@gmail.com'
    },
    {
        icon:'/icons/cellPhone.svg',
        adress:'tel:2195550114',
        text:'2195550114',
        altAdress:'tel:164333-0487',
        altText:'164333-0487'
    },
]

const InfoItem =()=>{
    return(
        <div className={style.main}>
            {
                data.map((info,index)=>(
                    <Info 
                    key={index}
                    icon={info.icon} 
                    adress={info.adress} 
                    altAdress={info.altAdress}
                    txt={info.text} 
                    altText={info.altText}/>
                ))
            }

        </div>
    )
}

export default InfoItem;