import React from "react"
import Number from "./Number"
import Time from "./Time"
import Alert from "./Alert"
import Tags from "./Tags"
import Rating from "./Rating"

class App extends React.Component {
  state = {
    rating: 3,
    number: 0,
    isToDisplay: true,
    tags: [
      { name: "javascript", color: "red" },
      { name: "html", color: "blue" },
      { name: "css", color: "green" },
      { name: "react", color: "yellow" },
      { name: "node", color: "grey" },
      { name: "bootstrap", color: "purple" },
      { name: "node", color: "pink" },
      { name: "node", color: "brown" }
    ]
  }
  constructor(props) {
    super(props)
  }
  setNumber = newNumber => {
    this.setState({
      number: newNumber
    })
  }
  setDisplay = () => {
    this.setState({
      isToDisplay: false
    })
  }
  changeRating = nbr => {
    this.setState({
      rating: nbr
    })
  }

  render() {
    return (
      <div>
        <Number
          number={this.state.number}
          onButtonClick={this.setNumber}
          max={9}
          min={-5}
        />
        <Time time={100000018} />
        <Alert
          text="You have failed successfully"
          color="red"
          display={this.state.isToDisplay}
          onButtonClick={this.setDisplay}
          timeOut={5000}
        />
        <Tags list={this.state.tags} />
        <Rating
          limit={12}
          rating={this.state.rating}
          onClick={this.changeRating}
        />
      </div>
    )
  }
}

export default App
