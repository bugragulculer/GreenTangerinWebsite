import React from 'react';
import { headers } from '../content/header'
import useScrollTop from '../hooks/useScrollTop'
import Announcement from '../components/Announcement'
import Header from '../components/Header'
import FeaturedProducts from '../components/FeaturedProducts'
import NewsletterForm from '../components/NewsletterForm'

const Home = props => {
  //UseScrollTop is used to start the page at the top.
  useScrollTop();

  // Getting header details.
  const mainHeader = headers[0];
  const secondHeader = headers[1];
  const thirdHeader = headers[2];

  // Constructing the home page.
  return (
    <div className='home__container'>
      <Header key={mainHeader.id} header={mainHeader}/>
      <Announcement />
      <Header key={secondHeader.id} header={secondHeader}/>
      <Header key={thirdHeader.id} header={thirdHeader} />
      <NewsletterForm />
      <FeaturedProducts {...props}/>
    </div>
  );
}
export default Home;