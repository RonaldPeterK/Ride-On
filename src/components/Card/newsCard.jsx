import React from 'react'
import SpanLine from '../Span/spanLine'
import NewsOwl from './NewsCard/newsOwl'

export default function NewsCard() {
  return (
    <>
    <div className="container py-5">
        <div className="row justify-content-center">
            <div className="col-md-8 text-center">
                <h2 className='fw-light fs-1'>Latest News</h2>
                <SpanLine/>
            </div>
        </div>
        <NewsOwl/>
    </div>
    
    </>
  )
}
