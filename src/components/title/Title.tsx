import s from './Title.module.scss'

interface TitleProps {
    index: number;
    label: string;
}

const Title = (props: TitleProps) => {
    return (
        <div className={s.title}>
            <h2>
                <span> 0.{props.index} </span>
                {props.label}
            </h2>
            <div className={s.line} />
        </div>
    )
}

export default Title