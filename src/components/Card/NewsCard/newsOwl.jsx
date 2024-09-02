import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import './../../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css'
import './../../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css'
import NewsCardDb from './../../db/newsCardDb.json'
import './../FleetCard/fleetOwl.css'
import NewsCardUi from './newsCardUi';
export default function NewsOwl() {
    const options = {
        margin: 10,
        responsiveClass: true,
        loop : true,
        dots: true,
        nav : true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        smartSpeed: 2000,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 2 },
          1400: {items : 3},
        },
      };
      
  return (
    <>
        <OwlCarousel className='owl-theme'
        {...options}>
        {
            NewsCardDb.map(newscard =>
            {
              return (
                <div className="item" key={newscard._id}>
                  <NewsCardUi
                    title = {newscard.title}
                    comments = {newscard.comments}
                    discribtion = {newscard.discribtion}
                  />
                </div>
              )
            }
            )
          }
        </OwlCarousel>
    </>
  )
}
