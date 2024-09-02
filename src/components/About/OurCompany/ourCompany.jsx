import React from 'react'
import SpanLine from '../../Span/spanLine'
import { Col, Row } from 'antd';
import img1 from './../../RideON/assets/other/img-2.jpg';
import img2 from './../../RideON/assets/other/img-3.jpg';
import img4 from './../../RideON/assets/other/img-5.jpg';

export default function OurCompany() {
  return (
    <>
        <div className="container justify-content-center align-items-center p-5">
            <div className="row align-items-center  justify-content-center">
                <div className="col-lg-6 gap-4 d-flex flex-column mt-2">
                    <h4 className='fw-normal'>Our Company</h4>
                    <SpanLine/>
                    <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo odit perferendis nostrum perspiciatis totam veniam facere similique. Magni est modi quidem quibusdam error molestias, molestiae, temporibus non illo iste expedita.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis delectus, id iste vero optio, sapiente, sit deleniti maxime ratione molestias consectetur cupiditate assumenda perspiciatis nemo dicta. Sed veniam laborum repudiandae adipisicing.!
                    </p>
                    <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo odit perferendis nostrum perspiciatis totam veniam facere similique. Magni est modi quidem quibusdam error molestias, molestiae, temporibus non illo iste expedita.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, modi sed perferendis harum nulla reiciendis consequatur, reprehenderit assumenda illum, quia cum deserunt. Dolore earum in minima sunt quaerat commodi. Nihil adipisicing elit. Blanditiis! quibusdam error molestias.
                    </p>
                </div>
                <div className="col-lg-6 mt-3">
                    <Row gutter={[20, 20]}>
                        <Col span={12}>
                            <img src={img1} alt="grid img" width='100%'/>
                        </Col>
                        <Col span={12}>
                            <img src={img2} alt="grid img" width='100%'/>
                        </Col>
                        <Col span={12}>
                            <img src={img2} alt="grid img" width='100%'/>
                        </Col>
                        <Col span={12}>
                            <img src={img4} alt="grid img" width='100%'/>
                        </Col>
                    </Row>
                </div>
            </div> 
        </div>
    </>
  )
}
