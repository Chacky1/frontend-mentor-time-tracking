/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import TimeContext from '../TimeContext'

function TrackingCard({ data, trackCategory }) {
  const [bulletPointsActive, setBulletPointsActive] = useState(false)
  const { timeFrame } = useContext(TimeContext)

  return (
    <div className={`tracking-card tracking-card--${trackCategory}`}>
      <div className="tracking-card__icon">
        <img src={`./images/icon-${trackCategory}.svg`} alt={data.title} />
      </div>
      <div className="card-info">
        <h3 className="card-info__title">{data.title}</h3>
        <div className="card-info__more">
          <svg
            onMouseEnter={() => setBulletPointsActive(true)}
            onMouseLeave={() => setBulletPointsActive(false)}
            width="21"
            height="5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill={bulletPointsActive ? 'white' : '#BBC0FF'}
              fillRule="evenodd"
            />
          </svg>
        </div>
        <p className="card-info__current">
          {data.timeframes[timeFrame].current}hrs
        </p>
        <p className="card-info__previous">
          Last Week - {data.timeframes[timeFrame].previous}hrs
        </p>
      </div>
    </div>
  )
}

TrackingCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    timeframes: PropTypes.objectOf(
      PropTypes.shape({
        daily: PropTypes.objectOf(
          PropTypes.shape({
            current: PropTypes.string,
            previous: PropTypes.string,
          })
        ),
        weekly: PropTypes.objectOf(
          PropTypes.shape({
            current: PropTypes.string,
            previous: PropTypes.string,
          })
        ),
        monthly: PropTypes.objectOf(
          PropTypes.shape({
            current: PropTypes.string,
            previous: PropTypes.string,
          })
        ),
      })
    ),
  }).isRequired,
  trackCategory: PropTypes.string.isRequired,
}

export default TrackingCard
