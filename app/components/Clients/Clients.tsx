import Title from "../Title/Title";
import ClientsItems from "./ClientsItems";
import style from './Clients.module.scss';


const data = [
    {
        icon: "/icons/qoute.svg",
        text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
        userName: 'Robert Fox',
        role: 'Costumer',
        image: '/images/user1.png',
        rating: '/icons/Rating5.svg'
    },
    {
        icon: "/icons/qoute.svg",
        text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
        userName: 'Dianne Russell',
        role: 'Costumer',
        image: '/images/user2.png',
        rating: '/icons/Rating5.svg'
    },
    {
        icon: "/icons/qoute.svg",
        text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
        userName: 'Eleanor Pena',
        role: 'Costumer',
        image: '/images/user3.png',
        rating: '/icons/Rating5.svg'
    }
]

const Clients = () => {
    return (
        <div className={style.bg}>
            <Title heading="Client Testimonials" />
            <div className={style.main}>
                <div className={style.container}>
                    {
                        data.map((data, index) => (
                            <ClientsItems
                                key={index}
                                icon={data.icon}
                                text={data.text}
                                image={data.image}
                                userName={data.userName}
                                role={data.role}
                                rating={data.rating} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Clients;