import style from "../../Styles/Props.module.css"

export default function Props (props){
    return(
        <div className={style.container}>
            <h2>Venha Conhecer esse lugar incrível: {props.lugar} !</h2>
            <p>{props.text}</p>
            <img src={props.bandeira} alt="" />
        </div>
    )
}