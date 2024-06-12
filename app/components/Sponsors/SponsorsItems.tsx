import Sponsors from "./Sponsors";
import style from './SponsorsItem.module.scss';


const data = [
    {
        icon: '/icons/steps.svg',
        link: '/'
    },
    {
        icon: '/icons/mango-1.svg',
        link: '/'
    },
    {
        icon: '/icons/Group.svg',
        link: '/'
    },
    {
        icon: '/icons/food0.svg',
        link: '/'
    },
    {
        icon: '/icons/bookoff.svg',
        link: '/'
    },
    {
        icon: '/icons/Gservice.svg',
        link: '/'
    }
]

const SponsorsSection = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                {data.map((icon, index) => (
                    <Sponsors key={index} icon={icon.icon} link={icon.link} />
                ))}
            </div>
        </div>

    )
}

export default SponsorsSection;