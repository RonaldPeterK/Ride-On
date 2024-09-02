import React from 'react';
import { Button, Tooltip } from 'antd';
import "./button.css"
const Btn = (props) => (
    <>
      <Tooltip title={props.title}>
        <Button type='submit' shape="round" className='btn p-4 fs-5 d-inline-flex align-items-center mt-3' size="large" href={props.link}>
            <span>{props.name}</span>
            <span className='ms-2'><i class="fa-solid fa-chevron-right"></i></span>
        </Button>
      </Tooltip>
    </>
);
export default Btn;