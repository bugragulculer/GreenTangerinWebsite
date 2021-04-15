import React from 'react'
import BlogComponent from '../components/BlogComponent'
import '../styles/BlogList.css'

function BlogList(props) {
    const blogList = props.blog;
    return (
        <div className='blogs__wrapper'>
            {blogList.map((e) => (
                <BlogComponent blog={e.fields} className='blogs' key={ e.fields.title }/>
            ))}
        </div>
    )
}
export default BlogList