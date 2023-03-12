import React from "react";
import PostItem from "../PostItem/PostItem";

function PostsList({ posts, remove , setVisible}) {
  return (
    <div>
      {posts.map((post, index ) => (
        <PostItem
          remove={remove}
          number={index + 1}
          key={post.pk}
          post={post}
          setVisible={setVisible}
        />
      ))}
    </div>
  );
}

export default PostsList;
