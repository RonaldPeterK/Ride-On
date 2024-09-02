import React from 'react'
import ShortcutBtn from '../Button/ShortcutBtn/shortcutBtn'

export default function ShortCutButtons() {
  return (
        <div className="container p-4 ">
            <div className="row">
                <div className="col-lg-6 mt-3">
                    <ShortcutBtn
                        name="Book Instantly Online Now"
                    />
                </div>
                <div className="col-lg-6 mt-3">
                    <ShortcutBtn
                        name="Learn More About Our Services"
                    />
                </div>
            </div>
        </div>
  )
}
