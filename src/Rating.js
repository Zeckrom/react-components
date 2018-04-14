import React from "react"
import "./rating.css"

function ratingToStars(nbr, limit) {
  let result = []
  let length = 1
  if (nbr > limit) nbr = limit

  for (let i = 0; i < nbr; i++) {
    result.push("★")
    length++
  }
  while (length < limit) {
    result.push("☆")
    length++
  }
  return result
}

const Rating = props => {
  return (
    <div className="rating">
      {ratingToStars(props.rating, props.limit).map((el, i) => {
        return (
          <span
            onClick={() => {
              props.onClick(i + 1)
            }}
          >
            {el}
          </span>
        )
      })}
    </div>
  )
}

export default Rating
