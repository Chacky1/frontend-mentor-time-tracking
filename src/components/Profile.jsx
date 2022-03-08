import React, { useContext } from 'react'
import TimeContext from '../TimeContext'

function Profile() {
  const { timeFrame, setTimeFrame } = useContext(TimeContext)
  return (
    <div className="profile">
      <div className="profile-content">
        <img
          className="profile-content__image"
          src="/images/image-jeremy.png"
          alt="profile"
        />
        <p className="profile-content__report">Report for</p>
        <h2 className="profile-content__username">Jeremy Robson</h2>
      </div>
      <ul className="profile__timeframes">
        <li className={timeFrame === 'daily' ? 'active' : ''}>
          <button
            type="button"
            onClick={() => setTimeFrame('daily')}
            onKeyPress={() => setTimeFrame('daily')}
          >
            Daily
          </button>
        </li>
        <li className={timeFrame === 'weekly' ? 'active' : ''}>
          <button
            type="button"
            onClick={() => setTimeFrame('weekly')}
            onKeyPress={() => setTimeFrame('weekly')}
          >
            Weekly
          </button>
        </li>
        <li className={timeFrame === 'monthly' ? 'active' : ''}>
          <button
            type="button"
            onClick={() => setTimeFrame('monthly')}
            onKeyPress={() => setTimeFrame('monthly')}
          >
            Monthly
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Profile
