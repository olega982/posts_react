import NewPost from "../routes/NewPost(old_approch)";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useState } from "react";
import Modal from "./Modal";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

function PostList({ onStopEditing, moduleIsVisible }) {
  const posts = useLoaderData();
  console.log(posts);

  return (
    <>
      {moduleIsVisible && (
        <Modal onChange={onStopEditing}>
          <NewPost onStopEditing={onStopEditing} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              id={post.id}
              key={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div>
          <h2>No posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
