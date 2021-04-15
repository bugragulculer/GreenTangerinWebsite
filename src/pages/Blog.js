import useScrollTop from '../hooks/useScrollTop'
import React from 'react';
import BlogList from '../components/BlogList'
import BlogHeader from '../components/BlogHeader'

function Blog(props) {
    // Scrolling to the top
    useScrollTop();

    return (
        <div>
            <BlogHeader {...props} />
            <BlogList {...props} />
        </div>
    )
}

export default Blog
