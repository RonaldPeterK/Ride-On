import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import './../../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css'
import './../../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css'
import FleetCardUi from './fleetCardUi';
import FleetCardDb from './../../db/fleetCardDb.json'
import './fleetOwl.css'
export default function FleetOwl() {
    const options = {
        margin: 10,
        responsiveClass: true,
        loop : true,
        dots: true,
        nav : true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        smartSpeed: 1500,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 },
          1400: {items : 4},
        },
      };
      
  return (
    <>
        <OwlCarousel className='owl-theme'
        {...options}>
        {
            FleetCardDb.map(fleetCard =>
            {
              return (
                <div className="item" key={fleetCard._id}>
                  <FleetCardUi
                    img={fleetCard.img}
                    name={fleetCard.title}
                    rate = {fleetCard.rate}
                    passengers = {fleetCard.lifirst}
                    bags = {fleetCard.lisec}
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
