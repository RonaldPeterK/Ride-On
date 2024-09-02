import React from 'react'
import SpanLine from '../Span/spanLine'
import Video from '../About/video'
import MissionCom from './missionCom'
import './missWork.css'

export default function MissWork() {
  return (
    <>
        <div className="container p-5">
            <div className="row  align-items-start gap-5">
                <div className="col-lg-6 mt-3">
                    <p className="fs-3">How We Work</p>
                    <SpanLine/>
                    <div className="mt-4"></div>
                    <Video/>
                </div>
                <div className="col-lg-5 mt-3">
                    <p className="fs-3">Our Mission</p>
                    <SpanLine/>
                    <div className="mt-3"></div>
                    <p>Lorem ipsum, dolor sit amet consectetur Adipisci libero inventore ab nobis architecto laborum itaque tempora.</p>
                    <MissionCom/>
                </div>
            </div>
        </div>
    </>
  )
}
