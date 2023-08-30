import './Card.css'
export default function Card({image, heading, description}){
    return (
        <div className="card">
            <img src={image} alt="icon" />
            <span>{heading}</span>
            <span>{description}</span>
            <button className="c-button">LEARN MORE</button>
        </div>
    )
}