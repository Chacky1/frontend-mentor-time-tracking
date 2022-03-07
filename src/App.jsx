import React, { useMemo, useState } from 'react'
import Dashboard from './pages/Dashboard'
import TimeContext from './TimeContext'

const timeFrames = ['daily', 'weekly', 'monthly']

function App() {
  const [timeFrame, setTimeFrame] = useState(timeFrames[1])
  const memoizedTimeFrameData = useMemo(
    () => ({
      timeFrame,
      setTimeFrame,
    }),
    [timeFrame]
  )
  return (
    <TimeContext.Provider value={memoizedTimeFrameData}>
      <Dashboard />
    </TimeContext.Provider>
  )
}

export default App
