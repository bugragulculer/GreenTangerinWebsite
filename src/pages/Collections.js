import useScrollTop from '../hooks/useScrollTop'
import React  from 'react';
import CollectionButtons from '../components/CollectionButtons';
import FeaturedProducts from '../components/FeaturedProducts';
import '../styles/Collection.css'

const Collections = (props) => {
    // Scrolling to the top
    useScrollTop();

    // Getting the necessary props. 
    const category = props.categories;
    const type = props.types;

    return (
        <div>
            <h1 className='categories__header'>Product Categories</h1>
            <CollectionButtons type={category} />
            <h1 className='categories__header'>Product Types</h1>
            <CollectionButtons type={type}  />
            <div className='categories__wrapper'>
                <FeaturedProducts {...props}/>
            </div>
        </div>
    )
}

export default Collections