import React from 'react';
import { Card } from 'antd';
import Img1 from './../../RideON/assets/Home/img-9.jpg'
const NewsCardUi = (props) => (
<>
  <Card hoverable className='m-3'>
    <img src={Img1}alt="404 Error" className='card-img-top' />
    <div className="card-content border-bottom px-5 py-4 ">
        <p className='fs-4 fw-light title'>{props.title}</p>
    </div>
    <div className="card-body  p-3 text-start">
        <ul className='d-flex gap-4 fs-5 fw-light'>
            <li><i class="fa-regular  fa-calendar"></i> July 1, 2018</li>
            <li><i class="fa-solid  fa-comments"></i>{props.comments} Comments</li>
        </ul>
    </div>
    <div className="card-content border-top px-5 py-3 ">
        <p className='fs-6 title'>Sed suscipit pretium venetics, Prasent ultries convalies augue, in tincidunt nibh hendrit sit amet.</p>
    </div>
  </Card>
</>
);
export default NewsCardUi;