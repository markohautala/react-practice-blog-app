import React, { Component } from 'react'
import names from '../data/names'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      names: names
    }
  }

  handleChange = (event) => {
    const searchValue = event.target.value // The value of the input field
    const filteredNames = names.filter((oneName) =>
      oneName.toLowerCase().includes(searchValue.toLowerCase())
    ) // Filter the names array based on the search value

    this.setState({
      names: filteredNames // Update the state with the filtered names
    })
  }

  render() {
    return (
      <div style={{ margin: '50px' }}>
        <h1>Search name:</h1>
        <form action="">
          <input onChange={this.handleChange} type="text" placeholder="Search name" />
          <input type="submit" value="Search" />
        </form>
        <div>Search-result is rendered here:</div>
        <h5>Matching names found: {this.state.names.length}</h5>
        <div>
          {this.state.names.map((oneName, index) => (
            <p key={index}>{oneName}</p>
          ))}
        </div>
      </div>
    )
  }
}