import React, {MouseEvent} from 'react';
import {gsap} from "gsap";
import SelectorSvg, {localSVG} from '..//..//helpers/SelectorSvg';
import s from './MainScreen.module.scss'

const MainScreen = () => {
    const onEnter = ({currentTarget}: MouseEvent<HTMLDivElement>) => {
        gsap.to(currentTarget, {scale: 1.1});
    };

    const onLeave = ({currentTarget}: MouseEvent<HTMLDivElement>) => {
        gsap.to(currentTarget, {scale: 1});
    };

    return (
        <section className={s.mainScreen} id='main'>
            <div className={s.hero} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <div>
                    {SelectorSvg(localSVG.LOGOTYPE)}
                </div>
                <div className={s.block_info}>
                    <p className={s.text}>Привет, меня зовут</p>
                    <h1>Веремеенко Денис.<br />Я разработчик веб-приложений.</h1>
                    <p>Я создаю и разрабатываю фронтенд приложения (и дизайн тоже) для достижения исключительного цифрового опыта . На данный момент я открыт для любых предложений.</p>
                </div>
            </div>
        </section>
    )
}

export default MainScreen