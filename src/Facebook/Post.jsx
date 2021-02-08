import React from "react";
import CreatePost from "./CreatePost";
import Feed from "./Feed";
import "./Post.css";
import Stories from "./Stories";
const Post = () => {
  return (
    <div className="post">
      <Stories />
      <CreatePost />
      <Feed />
    </div>
  );
};

export default Post;
