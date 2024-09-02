import React from 'react';
import {Card, Flex, Typography } from 'antd';
import SpanLine from '../Span/spanLine';
import "./services.css"
const cardStyle = {
  
};

const ServicesUi = (props) => (
  <Card
    hoverable
    style={cardStyle}
    styles={{
      body: {
        padding: 0,
        overflow: 'hidden',
      },
    }}
  >
    <Flex> 
    <div className="icon px-4">
        <i className="icons fa-2xl fa-regular fa-calendar-check"></i>
    </div> 
      <Flex
      className='p-4'
        vertical
        align="flex-start"
        justify="space-around"
        style={{
          gap:10
        }}
      >
        <Typography.Title level={3}>
          {props.name}
        </Typography.Title>
        <SpanLine/>
        <Typography.Text className='mt-3'>
          {props.detail}
        </Typography.Text>
      </Flex>
    </Flex>
  </Card>
);
export default ServicesUi;