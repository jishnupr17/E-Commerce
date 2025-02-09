import React from 'react';

const Gallery = () => {
  const gallery = ["/img5.web.jpeg", "/img11.jpeg","/g8.jpg", "/img11.jpeg","/g1.jpg", "/g2.jpg", "/img4.web.jpeg", "/img2.web.jpeg", "/g10.avif"];

  return (
    <section className='gallery'>
      <h1>BETTER BEATS BEST</h1>
      <div className='images'>
        <div>
          
          {
            gallery.slice(0,3) .map((element, index) => (
              <img key={index} src={element} alt="galleryimages" />
            ))
          }
        </div>
        <div>
          {
            gallery.slice(3,6) .map((element, index) => (
              <img key={index} src={element} alt="galleryimages" />
            ))
          }
        </div>
        <div>
          {
            gallery.slice(6,9) .map((element, index) => (
              <img key={index} src={element} alt="galleryimages" />
            ))
          }
        </div>
        </div>

       
   

    </section>
  );
};

export default Gallery;
