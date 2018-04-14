import React from "react"

const Tag = props => {
  return (
    <div className="tag" style={{ borderColor: props.color }}>
      <h3>{props.name}</h3>
    </div>
  )
}

export default Tag
