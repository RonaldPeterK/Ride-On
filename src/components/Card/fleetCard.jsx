import React from 'react'
import FleetOwl from './FleetCard/fleetOwl'
import SpanLine from '../Span/spanLine'

export default function Card() {
  return (
    <>
    <div className="container py-5">
        <div className="row justify-content-center">
            <div className="col-md-8 text-center">
                <h2>Our Fleet</h2>
                <SpanLine/>
                <p className='mt-4'>Choose from a wide selection of boats ranging from luxury motor yachts to classic sailings yatchs, we have every type of boat available to meet your needs. We also take customs orders and will help you acquire a specific yacht.</p>
            </div>
        </div>
        <FleetOwl/>
    </div>
    
    </>
  )
}
