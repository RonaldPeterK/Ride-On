import React from 'react';
import { Card } from 'antd';
import './fleetCard.css'
const FleetCardUi = (props) => (
<>
  <Card hoverable className='m-3'>
    <img src={props.img} alt="404 Error" className='card-img-top' />
    <div className="card-content border-top">
        <button className='rate btn bg-danger rounded-0 mx-5'>From ${props.rate}</button>
    </div>
    <div className="card-body px-5 my-4">
        <p className='fs-5 fw-normal title'>{props.name}</p>
        <p className="line1"></p>
        <ul className='list-group'>
            <li><i class="fa-duotone fa-xl fa-solid fa-check"></i> {props.passengers}</li>
            <li><i class="fa-duotone fa-xl fa-solid fa-check"></i> {props.bags}</li>
        </ul>
    </div>
  </Card>
</>
);
export default FleetCardUi;