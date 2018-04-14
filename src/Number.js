import React from "react"

const Number = props => {
  let result = props.setNumber ? props.setNumber : props.number
  let max = props.max ? props.max : Infinity
  let min = props.min ? props.min : -Infinity
  if (result > max) {
    result = max
  }
  if (result < min) {
    result = min
  }

  return (
    <div className="number-container">
      <div
        className="minus"
        onClick={() => {
          if (result > min) {
            props.onButtonClick(result - 1)
          }
        }}
      >
        <h1>-</h1>
      </div>
      <div className="number">
        <h1
          onChange={() => {
            props.onChangeEvent
          }}
        >
          {result}
        </h1>
      </div>
      <div
        className="plus"
        onClick={() => {
          if (result < max) {
            props.onButtonClick(result + 1)
          }
        }}
      >
        <h1>+</h1>
      </div>
    </div>
  )
}

export default Number
