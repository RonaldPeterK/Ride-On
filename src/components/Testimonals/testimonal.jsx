import { Col, Row } from 'antd';
import React from 'react';
import './testimonal.css';
import SpanLine from '../Span/spanLine';
import AvatarImg from './../RideON/assets/Home/img-6.jpg';

function Testimonal() {

return (
    <>
      <Row>
        <Col span={24} className='text-center justify-content-center'>
            <div className="testimonal py-5 p-5 text-white">
                <h3 className='fw-normal'>Testimonials</h3>
                <SpanLine/>
                <p className='d-flex align-items-center justify-content-center gap-3 mt-5'>
                    <i class="quote fa-solid fa-2xl fa-quote-left me-2"></i>
                    Fast and Professional are the best describe the chauffeur team, they got me to my business meeting on time, looking forward to next time!
                    <i class="quote fa-solid fa-2xl fa-quote-right ms-2"></i>
                </p>
                <img src={AvatarImg} alt="Profile" className='rounded-circle my-4'/>
                <p>Tony & Gray Biffer - Ford Party Bus</p>
            </div>
        </Col>
      </Row>
    </>
);
}  
  export default Testimonal;