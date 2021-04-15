import {Link} from 'react-router-dom'
import '../styles/CollectionButtons.css'

const CollectionButton = ({ type }) => {
    return (
        <div className='categories__wrapper'>
            <div className='categories__category__wrapper'>
                <div className='categories__category__list' >
                    {type.map((e) => (
                        <div className='category' key={e.id}>
                            <Link className='category__container' to={`/collections/${e.fields.url}`}>
                            <h1 className='category__header'>{e.fields.title}</h1>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default CollectionButton