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
        real_example: 'https://veremeenko-ercy.vercel.app',
    },
    {
        title: 'SNP проект на паге',
        text: 'Заказ, выполненный при помощи препроцессора pug, основной целью было создание проекта при помощи нативных инструментов',
        techs: ["pug", "scss", "JavaScript"],
        github: "https://github.com/Clicker1337/SNP",
    },
    {
        title: 'Пикассо',
        text: 'Тестовое задание с применением fsd архитектуры, основная цель работы создание виртуализации, бесконечного скролла и т.д.',
        techs: ["React", "RTK Query", "FSD"],
        github: "https://github.com/Clicker1337/SiteMath",
        real_example: 'https://posts-fsd-test-work.vercel.app',
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