import React from 'react'
import InfoCom from './DetailsComponents/infoCom'
import ConFormCom from './DetailsComponents/conFormCom'

export default function Details() {
  return (
    <>
        <div className="container p-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <ConFormCom/>
                </div>
                <div className="col-lg-6">
                    <InfoCom/>
                </div>
            </div>
        </div>
    </>
  )
}
