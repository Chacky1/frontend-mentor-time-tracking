import React from 'react'
import PropTypes from 'prop-types'
import TrackingCard from './TrackingCard'

function TrackingGrid({ dataSet }) {
  return (
    <div className="tracking-grid">
      {dataSet.map((category) => (
        <TrackingCard key={category.title} data={category} />
      ))}
    </div>
  )
}

TrackingGrid.propTypes = {
  dataSet: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
}

export default TrackingGrid
