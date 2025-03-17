
const Cards = ({value,icon,name,unit}) => {
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
export default Cards