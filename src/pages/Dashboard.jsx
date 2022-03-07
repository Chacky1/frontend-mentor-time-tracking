import React from 'react'
import Profile from '../components/Profile'
import TrackingGrid from '../components/TrackingGrid'
import data from '../data.json'

function Dashboard() {
  return (
    <div className="dashboard">
      <Profile />
      <TrackingGrid dataSet={data} />
    </div>
  )
}

export default Dashboard
