import React from "react"

const Time = props => {
  function timeConversion(nbr) {
    let timeLeft = nbr
    let time = ["00", "00", "00"]
    let hoursCount = 0
    let minutesCount = 0
    let secondsCount = 0
    while (timeLeft >= 3600000) {
      hoursCount++
      timeLeft -= 3600000
    }
    while (timeLeft >= 60000) {
      minutesCount++
      timeLeft -= 60000
    }
    while (timeLeft >= 1000) {
      secondsCount++
      timeLeft -= 1000
    }
    time[0] = hoursCount >= 10 ? +hoursCount : "0" + hoursCount
    time[1] = minutesCount >= 10 ? +minutesCount : "0" + minutesCount
    time[2] = secondsCount >= 10 ? +secondsCount : "0" + secondsCount
    return time
  }
  let time = timeConversion(props.time)
  return (
    <div className="time-container">
      <div className="hours">
        <h1>{time[0]}</h1>
      </div>
      <div className="sep">
        <h1>:</h1>
      </div>
      <div className="minutes">
        <h1>{time[1]}</h1>
      </div>
      <div className="sep">
        <h1>:</h1>
      </div>
      <div className="seconds">
        <h1>{time[2]}</h1>
      </div>
    </div>
  )
}

export default Time
