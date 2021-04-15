import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from '../pages/Home';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer'
import Products from '../pages/Products'
import Collections from '../pages/Collections'
import Blog from '../pages/Blog'
import FAQ from '../pages/FAQ'
import Shipping from '../pages/Shipping'
import Returns from '../pages/Returns'
import ViewProduct from '../pages/ViewProduct'
import ViewCollection from '../pages/ViewCollection'
import ViewBlog from '../pages/ViewBlog'
import Checkout from '../pages/Checkout'
import PageNotFound from '../pages/PageNotFound'

document.title = "Green Tangerin"
 
// AppRouter.js will create the pagination of the whole website.

const AppRouter = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path='/home'>
                    <Navbar />
                    <Home {...props} />
                    <Footer />
                </Route>
                <Route exact path='/'>
                    <Redirect to='/home'/>
                </Route>
                <Route exact path='/products'>
                    <Navbar />
                    <Products {...props} />
                    <Footer />
                </Route>
                <Route exact path='/collections'>
                    <Navbar />
                    <Collections {...props} />
                    <Footer />
                </Route>
                <Route exact path='/blog'>
                    <Navbar />
                    <Blog {...props} />
                    <Footer />
                </Route>
                <Route exact path='/shipping'>
                    <Navbar />
                    <Shipping />
                    <Footer />
                </Route>
                <Route exact path='/returns-exchanges'>
                    <Navbar />
                    <Returns />
                    <Footer />
                </Route>
                <Route exact path='/faq'>
                    <Navbar />
                    <FAQ />
                    <Footer />
                </Route>
                <Route exact path='/checkout'>
                    <Checkout {...props}/>
                </Route>
                <Route path='/products/:slug'>
                    <Navbar />
                    <ViewProduct {...props} />
                    <Footer />
                </Route>
                <Route path='/collections/:slug'>
                    <Navbar />
                    <ViewCollection {...props} />
                    <Footer />
                </Route>
                <Route path='/blog/:slug'>
                    <Navbar />
                    <ViewBlog {...props} />
                    <Footer />
                </Route>
                <Route >
                    <PageNotFound />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter;