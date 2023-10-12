import s from './Portfolio.module.scss'
import Title from '../../components/title/Title'
import Card from '../../components/card/Card'

const DataForCard = [
    {
        title: 'ГринАпи тестовое',
        text: "Тестовое задание по работе с GreenApi интерфейсом, где основная задача это отправка и получение сообщений из приложения What'sApp ",
        techs: ["React", "Mobx", "TypeScript"],
        github: "https://github.com/Clicker1337/greenApi",
    },
    {
        title: 'Сайт-визитка для себя',
        text: 'Простенький сайт с красивым и минималистичным визуальным стилем, анимациями и общей информации обо мне',
        techs: ["Vite", "React", "TypeScript"],
        github: "https://github.com/Clicker1337/veremeenko",
    },
    {
        title: 'Информационная система тестирования',
        text: 'Дипломная работа направленная на тестирование студентов при помощи интегралов, автоматически сгенерированных на сервере.',
        techs: ["React", "Redux", "TypeScript"],
        github: "https://github.com/Clicker1337/SiteMath",
    },
    {
        title: 'Пикассо',
        text: 'Тестовое задание с применением fsd архитектуры, основная цель работы создание виртуализации, бесконечного скролла и т.д.',
        techs: ["React", "RTK Query", "FSD"],
        github: "https://github.com/Clicker1337/SiteMath",
    }
]

const Portfolio = () => {
    return (
        <section className={s.Portfolio} id='portfolio'>
            <div className={s.main_block}>
                <div className={s.hero}>
                    <Title index={2} label='Портфолио' />
                </div>
                <div className={s.cards_list}>
                    {DataForCard.map((item) =>
                        <Card prop={item} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Portfolio