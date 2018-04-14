import React from "react"
import Tag from "./Tag"

const Tags = props => {
  return (
    <div className="tags-container">
      {props.list.map(el => {
        return <Tag name={el.name} color={el.color} />
      })}
    </div>
  )
}

export default Tags
