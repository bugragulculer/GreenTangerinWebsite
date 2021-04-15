import React from 'react'
import { useParams } from 'react-router-dom'
import useScrollTop from '../hooks/useScrollTop'
import CollectionList from '../components/CollectionList'

function ViewProduct(props) {
    // Scrolling to the top.
    useScrollTop();
    // Getting the final part of the url 
    const id = useParams().slug;
    
    return (
        <div>
            <CollectionList {...props} id={id}/>
        </div>

    )
}


export default ViewProduct
