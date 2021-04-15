// Creating the sidebar of the products page. 
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { applyFilter } from '../redux/actions/filterActions'
import '../styles/ProductsSidebar.css'

function ProductsSidebar(props) {
    // Getting the filter and sort data.
    const [field, setFilter] = useState({
        sortBy: props.filter.sortBy,
        category: props.filter.category,
        type: props.filter.type
    })
    
    const dispatch = useDispatch();
    const types = props.types;
    const categories = props.categories;
    
    // Arranging sort and filter hooks. 
    const onSortFilterChange = (e) => {
        setFilter({ ...field, sortBy: e.target.value })
        dispatch(applyFilter(field))
    };

    const onCategoryChange = (e) => {
        setFilter({ ...field, category: e.target.value })
        dispatch(applyFilter(field))
    }

    const onTypeChange = (e) => {
        setFilter({ ...field, type: e.target.value })
        dispatch(applyFilter(field))
    }

    // Arranging the reset hook.
    const onResetFilter = () => {
        setFilter({...field, type: '', category: '', sortBy: ''})
        dispatch(applyFilter(field));
    }

    useEffect(() => {
        dispatch(applyFilter(field))
    }, [dispatch, field])
    
    return (
        <div className='products__sidebar'>
            <div className='products__types__wrapper'>
                <button
                    className='button__reset__filters'
                    disabled={props.productsCount === 0}
                    onClick = {onResetFilter}
                >Reset Filters</button>
                <h2 className='products__h2'>Sort By</h2>
                <form className='sort__form' action="/action_page.php" onChange={ onSortFilterChange}>
                    <label className='sort__wrapper'>
                        <input type="radio" value="Price: Low to High" checked={ field.sortBy === "Price: Low to High"} className='products__sort__checkbox' id="Price: Low to High" name="sort" onClick={ () =>  field.sortBy === "Price: Low to High"}/>
                        <span className='sort__checkmark' />
                        <p className='sort__title'>Price: Low to High</p>
                    </label>
                    <label className='sort__wrapper'>
                        <input type="radio" value="Price: High to Low" checked={ field.sortBy === "Price: High to Low"} className='products__sort__checkbox' id="Price: High to Low" name="sort" onClick={ () => field.sortBy === "Price: High to Low" }/>
                        <span className='sort__checkmark' />
                        <p className='sort__title'>Price: High to Low</p>
                    </label>
                    <label className='sort__wrapper'>
                        <input type="radio" value="Name: A to Z" checked={ field.sortBy === "Name: A to Z"} className='products__sort__checkbox' id="Name: A to Z" name="sort" onClick={ () => field.sortBy === "Name: A to Z" }/>
                        <span className='sort__checkmark' />
                        <p className='sort__title'>Name: A to Z</p>
                    </label>
                    <label className='sort__wrapper'>
                        <input type="radio" value="Name: Z to A" checked={ field.sortBy === "Name: Z to A"} className='products__sort__checkbox' id="Name: Z to A" name="sort" onClick={ () => field.sortBy === "Name: Z to A" }/>
                        <span className='sort__checkmark' />
                        <p className='sort__title'>Name: Z to A</p>
                    </label>
                </form>
            </div>
            <div className='products__types__wrapper'>
                <h2 className='products__h2'>Types</h2>
                <form className='products__sort'>
                    {types.map((e) => (
                        <div key={e.id}>
                            <div className='checkbox__container'>
                                <label className='sort__wrapper' onChange={onTypeChange}>
                                    <input type="radio" value={e.fields.title} checked={ field.type === e.fields.title} className='products__sort__checkbox' name='type__radio' onChange={ () => field.type === e.fields.title} />
                                    <span className='sort__checkmark' />
                                    <p className='sort__title'>{e.fields.title}</p>
                                </label>
                            </div>
                        </div>
                    ))}
                </form>
                <h2 className='products__h2'>Categories</h2>
                <form className='products__sort'>
                    {categories.map((e) => (
                        <div key={e.id}>
                            <div className='checkbox__container'>
                                <label className='sort__wrapper' onChange={onCategoryChange}>
                                    <input type="radio" value={e.fields.title} checked={ field.category === e.fields.title} className='products__sort__checkbox' name='category__radio' onChange={ () => field.category === e.fields.title} />
                                    <span className='sort__checkmark' />
                                    <p className='sort__title'>{e.fields.title}</p>
                                </label>
                            </div>
                        </div>
                    ))}
                </form>

            </div>
        </div>
    )
}

export default ProductsSidebar