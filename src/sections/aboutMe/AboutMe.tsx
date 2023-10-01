import React from 'react'
import s from './AboutMe.module.scss'
import photo from '../../assets/images/photo.png'
import Title from '../../components/title/Title'

enum Text {
    TEXT_1 = "Привет, меня зовут Денис и я обожаю создавать веб приложения и дизайн для них. Я увлекся Фронтенд разработкой с 2018 года, когда в первый раз попробовал свои силы в HTML & CSS для создания простенькой странички. В период обучения в университете я освоил множество хард и софт скиллов, а также успешно закрыл дипломный проект “информационная система тестирования” в 2023, закрепив на практике свои умения!",
    TEXT_2 = "На сегодняшний день я имел возможность поработать вместе с рекламным агентством, сервисом доставки кроссовок, а также над стартапом и работами в университетах. Моя главная цель сегодня это создание доступных и инклюзивных продуктов для достижения наилучшего цифрового опыта.",
    TEXT_3 = "Здесь небольшое количество технологий, с которыми мне довелось работать:",
}

const AboutMe = () => {
    return (
        <section className={s.AboutMe} id='about'>
            <div className={s.hero}>
                <div className={s.main_block}>
                    <Title index={1} label='Обо мне' />
                    <div className={s.text}>
                        <p>{Text.TEXT_1}</p>
                        <p>{Text.TEXT_2}</p>
                        <p>{Text.TEXT_3}</p>
                        <div className={s.tech}>
                            <div className={s.tech__list}>
                                <p>JavaScript (ES+6)</p>
                                <p>React</p>
                                <p>Redux</p>
                            </div>
                            <div className={s.tech__list}>
                                <p>TypeScript</p>
                                <p>Tilda</p>
                                <p>Pug</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                src={photo}
                className={s.image}
                />
            </div>
        </section>
    )
}

export default AboutMe