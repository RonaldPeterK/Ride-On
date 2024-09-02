import React from 'react'
import SpanLine from '../Span/spanLine';
import Btn from '../Button/button';
import './adds.css'
export default function Adds() {
  return (
    <>
        <div className="banner1 my-5 p-5 container-fluid d-flex text-center align-items-center justify-content-center">
            <div className="col-lg-6 text-white py-5">
                <p className='fs-1 fw-normal'>Book Online Today And Travel In Comfort On Your Next Trip</p>
                <SpanLine />
                <p className='text-white fs-6 fw-light mt-4'>Call Us On 1800-1111-2222 or Email booking@website.com</p>
                <Btn 
                    name="Online Booking"
                />
            </div>
        </div>
    </>
  )
}
