import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h1>Search name:</h1>
        <form action="">
          <input type="text" placeholder="Search name" />
          <input type="submit" value="Search" />
        </form>
        <div>Search-result is rendered here:</div>
      </div>
    )
  }
}
