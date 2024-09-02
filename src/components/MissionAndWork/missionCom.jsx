import React from 'react'
import MissionDb from './../db/missionDb.json'
export default function MissionCom() {
  return (
    <div>
        <ul className="list-group list-group-flush">
            {
                MissionDb.map(mission =>
                {
                    return (
                        <li className="px-0 py-3 list-group-item align-items-center" key={mission._id}>
                            <i className="fa-solid fw-bold fa-chevron-right text-danger me-3"></i>
                            {mission.name}
                        </li>
                    )
                }
                )
            }
        </ul>
    </div>
  )
}
