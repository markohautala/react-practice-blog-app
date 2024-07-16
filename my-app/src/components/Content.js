import React, { Component } from "react";
import css from "./css/Content.module.css";
import PostItem from "./PostItem";
import savedPosts from "../data/posts.json"; // Ensure the path is correct
import Loader from "./Loader";
import SearchBar from "./SearchBar"; // Correct import

console.log(savedPosts); // Debug: Check if JSON data is loaded

export class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoaded: true,
      });
    }, 2000);
  }

  render() {
    return (
      <div className={css.Content} style={{ margin: '20px' }}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
          <SearchBar savedPosts={savedPosts.savedPosts} /> {/* Pass savedPosts */}
        </div>
        <div className={css.SearchResults}>
          {this.state.isLoaded ? (
            <PostItem savedPosts={savedPosts.savedPosts} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}

export default Content;
