import React from 'react'
import s from './Card.module.scss'
import SelectorSvg, {localSVG} from '../../helpers/SelectorSvg'

interface CardProps {
    prop: {
        title: string,
        text: string,
        techs: string[],
        github?: string,
        real_example?: string,
    }
}

const ICON_WIDTH = 20;
const ICON_HEIGHT = 20;

const Card = ({prop}: CardProps) => {
    return (
        <div className={s.Card}>
            <div className={s.icons}>
                {SelectorSvg(localSVG.BRIEFCASE)}
                <div className={s.links}>
                    <a href={prop.github}>
                        {SelectorSvg(localSVG.GITHUB, ICON_WIDTH, ICON_HEIGHT)}
                    </a>
                    <a href={prop.real_example}>
                        {SelectorSvg(localSVG.LINK_ICON)}
                    </a>
                </div>
            </div>
            <div className={s.text}>
                <h3>{prop.title}</h3>
                <p>{prop.text}</p>
            </div>
            <div className={s.techs}>
                {prop.techs.map((item, key) =>
                    <p key={key} className={s.techs__item}>
                        {item}
                    </p>
                )}
            </div>
        </div>
    )
}

export default Card