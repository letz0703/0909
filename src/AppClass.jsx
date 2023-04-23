import React, { Component } from "react"

export default class AppClass extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "james" }
  }

  render() {
    const handleClick = () => {
      this.setState({ name: "brown" })
    }
    return <div onClick={handleClick}>Hi {this.state.name}</div>
  }
}
