import React, {useState, useEffect} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import AppRouter from './routers/AppRouter';
import base from './api/base'
import './styles/App.css'

const App = ({ store, persistor }) => {
    const [products, setProducts] = useState([]);
    const [types, setTypes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [blog, setBlog] = useState([]);
    const [variants, setVariants] = useState([]);

    useEffect(() => {
        base('Products').select({ filterByFormula: 'AND(sell)', view: 'Grid view' }).eachPage((records, fetchNextPage) => {
            setProducts(records);
            fetchNextPage();
        })
    }, []);
        useEffect(() => {
        base('Types').select({ view: 'Grid view' }).eachPage((records, fetchNextPage) => {
            setTypes(records);
            fetchNextPage();
        })
        }, []);
        useEffect(() => {
        base('Collections').select({ view: 'Grid view' }).eachPage((records, fetchNextPage) => {
            setCategories(records);
            fetchNextPage();
        }) 
        }, []);
        useEffect(() => {
        base('Variants').select({  view: 'Grid view' }).eachPage((records, fetchNextPage) => {
            setVariants(records);
            fetchNextPage();
        })
        }, []);
        useEffect(() => {
        base('Blog').select({ view: 'Grid view' }).eachPage((records, fetchNextPage) => {
            setBlog(records);
            fetchNextPage();
        })
        }, []);
      return (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <AppRouter products={products} types={types} categories={categories} variants={variants} blog={blog}/>
        </PersistGate>
        </Provider>
      )
};

export default App;