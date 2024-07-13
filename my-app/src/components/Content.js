import React, { Component } from 'react';
import css from "./css/Content.module.css";
import PostItem from "./PostItem";
import savedPosts from '../data/posts.json'; // Ensure the path is correct

console.log(savedPosts); // Debug: Check if JSON data is loaded

export class Content extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
        </div>
        <div className={css.SearchResults}>
          <PostItem savedPosts={savedPosts.savedPosts} />
        </div>
      </div>
    );
  }
}

export default Content;