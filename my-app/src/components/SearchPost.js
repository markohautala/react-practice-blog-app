import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postList: this.props.savedPosts, // Initialize with the posts from props
      searchValue: '' // Initialize search value
    };
  }

  handleChange = (event) => {
    const searchValue = event.target.value.toLowerCase(); // The value of the input field
    const filteredPosts = this.props.savedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchValue) || post.name.toLowerCase().includes(searchValue)
    ); // Filter the posts array based on the search value

    this.setState({
      postList: filteredPosts, // Update the state with the filtered posts
      searchValue // Update the search value
    });
  };

  render() {
    return (
      <div>
        <h1>Search Posts:</h1>
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Search by title or artist..."
            value={this.state.searchValue}
          />
          <input type="submit" value="Search" />
        </form>
        <h5>Posts found: {this.state.postList.length}</h5>
        <div>
          {this.state.postList.map((post, index) => (
            <div key={index}>
              <h2>{post.title}</h2>
              <p>{post.name}</p>
              <img src={post.image} alt={post.title} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
