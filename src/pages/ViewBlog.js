import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import useScrollTop from '../hooks/useScrollTop'
import BlogDetails from '../components/BlogDetails'
import BlogComponent from '../components/BlogComponent'
import '../styles/ViewBlog.css'

const ViewBlog = (props) => {
    // Scrolling to the top
    useScrollTop();
    
    // Getting the final part of the url and getting random blog posts.
    const id = useParams();
    const item = props.blog;
    const random = item.sort(() => Math.random() - Math.random()).slice(0, 2);

    // Changing the product doesn't make the page scroll to the top. That is why below useEffect will be used. 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id])
    
    return (
        <div className='blog__container'>
            <BlogDetails {...props} id={id} />
            <h1 className='blog__h1'>Recommended Blog Posts</h1>
            <div className='blog__featured__products'>
                {random.map((e) => (
                    <BlogComponent blog={e.fields} key={ e.id } />
                ))}
            </div>
        </div>
    )
}

export default ViewBlog
