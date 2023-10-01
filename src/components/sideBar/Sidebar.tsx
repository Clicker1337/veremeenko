import s from './Sidebar.module.scss'
import {Link} from 'react-scroll'

const Sidebar = () => {

    return (
        <div className={s.main}>
            <div className={s.links_wrapper}>
                <Link
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={50}
                    activeClass={s.link_active}
                    className={s.link}
                >
                    Главная
                </Link>
                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={50}
                    activeClass={s.link_active}
                    className={s.link}
                >
                    Обо мне
                </Link>
                <Link
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={50}
                    activeClass={s.link_active}
                    className={s.link}
                >
                    Портфолио
                </Link>
                <Link
                    to="links"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={50}
                    activeClass={s.link_active}
                    className={s.link}
                >
                    Ссылки
                </Link>
            </div>
        </div>
    )
}

export default Sidebar