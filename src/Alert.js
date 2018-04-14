import React from "react"

const Alert = props => {
  if (props.timeOut) {
    setTimeout(function() {
      props.onButtonClick()
    }, props.timeOut)
  }
  return (
    props.display && (
      <div className={props.color + " alert-container"}>
        <div className="message">
          <h3>{props.text}</h3>
        </div>
        <div className={props.color + "-del delete"}>
          <h3
            onClick={() => {
              props.onButtonClick()
            }}
          >
            X
          </h3>
        </div>
      </div>
    )
  )
}

export default Alert
