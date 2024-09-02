import React from 'react'
import { Col, Row } from 'antd';

export default function ShortcutBtn(props) {
  return (
        <div className="row text-white px-2 mx-1">
            <Row>
                <Col span={21} className=" bg-dark justify-content-ceter d-flex align-items-center p-5">                
                    <span className='fs-5 fw-light'>{props.name}</span>
                </Col>
                <Col span={3} className=" bg-danger p-3 d-flex align-items-center justify-content-center text-center">
                    <span><i class="fa-solid fa-chevron-right"></i></span>
                </Col>
            </Row>
        </div>
  )
}

    
