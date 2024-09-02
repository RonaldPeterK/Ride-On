import React from 'react'
import SpanLine from '../../Span/spanLine'
import './bannerCom.css'
import { Breadcrumb } from 'antd';
export default function ContactBannerCom(props) {
  return (
    <div className="bannerCom contact text-center p-5">
        <p className='display-6 m-1'>Contact</p>
        <SpanLine/>
        <Breadcrumb
            className='mt-3'
            separator=">"
            items={[
            {
                title: 'Home',
                href: '/',
            },
            {
                title: 'Contact', 
            }
            ]}
        />
    </div>
  )
}