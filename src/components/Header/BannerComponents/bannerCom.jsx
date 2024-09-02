import React from 'react'
import SpanLine from '../../Span/spanLine'
import './bannerCom.css'
import { Breadcrumb } from 'antd';
export default function BannerCom(props) {
  return (
    <div className="bannerCom text-center p-5 gap-5">
        <p className='display-6 m-1'>About Us</p>
        <SpanLine/>
        <Breadcrumb
            separator=">"
            items={[
            {
                title: 'Home',
                href: '/',
            },
            {
                title: 'About Us', 
            }
            ]}
        />
    </div>
  )
}