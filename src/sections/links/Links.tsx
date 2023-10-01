import React from 'react'
import s from './Links.module.scss'
import Title from '../../components/title/Title'
import SelectorSvg, {localSVG} from '../../helpers/SelectorSvg'

const ICON_WIDTH = 30;
const ICON_HEIGHT = 30;

const Links = () => {
    return (
        <section className={s.main} id='links'>
            <div className={s.container}>
                <div className={s.hero}>
                    <Title index={3} label='Ссылки' />
                </div>
                <div className={s.links}>
                    <a
                        className={s.links__link}
                        target="_blank"
                        href='https://vk.com/cl1ck3r'
                    >
                        {SelectorSvg(localSVG.VK)}
                        Вконтакте
                    </a>
                    <a
                        className={s.links__link}
                        href='https://github.com/Clicker1337'
                        target="_blank"
                    >
                        {SelectorSvg(localSVG.GITHUB, ICON_WIDTH, ICON_HEIGHT)}
                        Github
                    </a>
                    <a
                        className={s.links__link}
                        href='https://vk.com/clickerworkroom'
                        target="_blank"
                    >
                        {SelectorSvg(localSVG.VK)}
                        Вконтакте группа
                    </a>
                </div>
                <p>Почта: <span>cl1ck3r@vk.com</span></p>
            </div>
        </section>
    )
}

export default Links