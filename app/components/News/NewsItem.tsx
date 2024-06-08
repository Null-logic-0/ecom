import Title from "../Title/Title";
import News from "./News";
import style from './NewsItem.module.scss';
const data = [
    {   day: 18,
        month: 'NOV',
        postInfo: 'By Admin',
        coments: '65 coments',
        category: 'Food',
        text: 'Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.',
        img: '/images/image.png',
        adminIcon: '/icons/user.svg',
        categoryIcon: '/icons/tag.svg',
        comentIcon: '/icons/Chat.svg'
    },
    {   day: 29,
        month: 'JAN',
        postInfo: 'By Admin',
        coments: '65 coments',
        category: 'Food',
        text: 'Eget lobortis lorem lacinia. Vivamus pharetra semper,',
        img: '/images/image2.png',
        adminIcon: '/icons/user.svg',
        categoryIcon: '/icons/tag.svg',
        comentIcon: '/icons/Chat.svg'
    },
    {   day: 21,
        month: 'FEB',
        postInfo: 'By Admin',
        coments: '65 coments',
        category: 'Food',
        text: 'Maecenas blandit risus elementum mauris malesuada.',
        img: '/images/image3.png',
        adminIcon: '/icons/user.svg',
        categoryIcon: '/icons/tag.svg',
        comentIcon: '/icons/Chat.svg'
    }
]


const NewsSection = () => (
    <>
        <Title heading="Popular Products" showBtn={false} mode="center"/>
        <div className={style.main}>
            <div className={style.container}>
                {data.map((data, index) => (
                    <News key={index}
                    day={data.day}
                    month={data.month}
                    postInfo={data.postInfo}
                    coments={data.coments}
                    category={data.category}
                    text={data.text}
                    img={data.img} 
                    adminIcon={data.adminIcon}
                    categoryIcon={data.categoryIcon} 
                    comentIcon={data.comentIcon}                        
                     />
                ))}
            </div>
        </div>
    </>
);

export default NewsSection;