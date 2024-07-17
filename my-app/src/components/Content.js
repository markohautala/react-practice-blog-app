import React, { Component } from "react";
import css from "./css/Content.module.css";
import PostItem from "./PostItem";
import savedPosts from "../data/posts.json"; // Ensure the path is correct
import Loader from "./Loader";
import SearchPost from "./SearchPost";

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
        <div className={css.SearchResults}>
        <h1>My Photos</h1>
          {this.state.isLoaded ? (
            <SearchPost savedPosts={savedPosts.savedPosts} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}

export default Content;
