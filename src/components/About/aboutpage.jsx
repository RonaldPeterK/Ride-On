import React from 'react'
import About from './aboutComponent'
import Video from './video'
import Btn from '../Button/button'
export default function AboutPg() {
  return (
    <>
        <div className="container-fluid p-5">
            <div className="row d-flex justify-content-center gap-5 align-items-center">
                <div className="col-lg-5">
                  <About/>
                  <Btn
                      name = "Learn More"
                  />
                </div>
                <div className="col-lg-5">
                  <Video/>
                </div>
            </div>
        </div>
    </>
  )
}