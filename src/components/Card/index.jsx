import '../Card/_card.scss'

const Card = ({value,icon,name,unit}) => {
    return (
            <article className='card'>
                <img src={icon} alt={`Icone ${name}`} />
                <div className='card-description'>
                <p className='card-mesure'>{value}{unit}</p>
                <p>{name}</p>
                </div>
            </article>
    )
}
export default Card