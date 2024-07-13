import React from "react";

function PostItem(props) {
  console.log(props.savedPosts); // Debug: Check if props are passed correctly

  return (
    <div>
      {Array.isArray(props.savedPosts) ? props.savedPosts.map(post => {
        const { title, name, image, description } = post;
        return (
          <div key={post.title}>
            <p>{title}</p>
            <p>{name}</p>
            <img src={image} alt="random" />
            <p>{description}</p>
          </div>
        );
      }) : null}
    </div>
  );
}

export default PostItem;