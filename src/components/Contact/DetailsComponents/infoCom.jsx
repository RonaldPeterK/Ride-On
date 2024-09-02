import React from 'react'
import SpanLine from '../../Span/spanLine'


export default function InfoCom() {
  return (
    <>
    <div className="touch">
                        <h4 className='fw-normal'>Get In Touch</h4>
                        <SpanLine/>
                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi ea officia animi voluptatum tempora explicabo iure, inventore quibusdam neque Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate mollitia, magnam blanditiis ducvh dtuch kannre whfa subbagh ke deleniti Velit aspernatur Suscipit, dolorem veniam!</p>
                    </div>
                    <div className="con mt-5">
                        <h4 className='fw-normal'>Contact Details</h4>
                        <SpanLine/>
                        <ul className="list-group list-group-flush">
                        <li className="px-3 py-4 list-group-item align-items-center">
                            <i className=" fa-solid fa-location-dot me-3 text-danger"/>
                            700 5th Avenue, New York City, Uinted States
                        </li>
                        <li className="px-3 py-4 list-group-item align-items-center">
                            <i className=" fa-solid fa-phone me-3 text-danger"></i>
                            1800-1111-2222
                        </li>
                        <li className="px-3 py-4 list-group-item align-items-center">
                            <i className=" fa-solid fa-envelope me-3 text-danger"></i>
                            booking@example.com
                        </li>
                        </ul>
                    </div>
                    <div className="social mt-4">
                        <h4 className='fw-normal'>Social Media</h4>
                        <SpanLine/>
                        <div className="d-flex gap-4 mt-3 pt-4 px-3">
                            <i class="fa-brands fa-xl text-danger fa-facebook-f"></i>
                            <i class="fa-brands fa-xl text-danger fa-instagram"></i>
                            <i class="fa-brands fa-xl text-danger fa-pinterest"></i>
                            <i class="fa-brands fa-xl text-danger fa-twitter"></i>
                            <i class="fa-brands fa-xl text-danger fa-youtube"></i>
                        </div>
                    </div>
    </>
  )
}
