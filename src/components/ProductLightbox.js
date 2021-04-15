// Creating a lightbox component for product details page. 
import '../styles/ProductLightbox.css'
import React, {useState} from 'react'

function ImageGallery(props) {
  const product = props.product;

  var images = [];
  var i = 0;
  for (i = 0; i < product.fields.images.length; i++) {
    images.push(product.fields.images[i].url)
  }

  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  
  const imageCards = images.map((image) => (
    <img key={image} alt={product.fields.title} className="image__card" onClick={() => showImage(image)} src={image}  />
  ));

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };
  
  // Creating the next and previous buttons. 
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (
    <div >
      <div className='lightbox__cards'>{imageCards}</div>
      {lightboxDisplay ? 
        <div id="lightbox" onClick={hideLightBox}>
          <button onClick={showPrev} className='lightbox__button'>⭠</button>
          <img id="lightbox-img" src={imageToShow} alt={product.fields.title}></img>
          <button onClick={showNext} className='lightbox__button'>⭢</button>
        </div>
       : ""
      }
    </div>
  );
}

export default ImageGallery