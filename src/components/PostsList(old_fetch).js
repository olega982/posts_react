import NewPost from "../routes/NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import axios from "axios";

function PostList({ onStopEditing, moduleIsVisible }) {
  const [posts, setPosts] = useState([]);
  const [isFatching, setIsFathing] = useState(false);

  useEffect(() => {
    // async function fetchPosts() {
    //   setIsFathing(true);
    //   const data = await fetch("http://localhost:8080/posts");
    //   const responce = await data.json();
    //   console.log(responce.posts);
    //   setIsFathing(false);
    //   setPosts(responce.posts);
    // }
    // fetchPosts();
    async function fetchPost2() {
      setIsFathing(true);
      const responce = await axios.get("http://localhost:8080/posts");
      console.log(responce.data.posts);
      setPosts(responce.data.posts);
      setIsFathing(false);
    }
    fetchPost2();
  }, []);

  function handlePostSubmission(newPost) {
    axios.post("http://localhost:8080/posts", {
      method: "POST",
      data: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // fetch("http://localhost:8080/posts", {
    //   method: "POST",
    //   data: JSON.stringify(newPost),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    setPosts((oldPosts) => [...oldPosts, newPost]);
  }

  return (
    <>
      {moduleIsVisible && (
        <Modal onChange={onStopEditing}>
          <NewPost
            onStopEditing={onStopEditing}
            onAddPost={handlePostSubmission}
          />
        </Modal>
      )}
      {!isFatching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post id={post.id} author={post.author} post={post.body} />
          ))}
        </ul>
      )}
      {!isFatching && posts.length === 0 && (
        <div>
          <h2>No posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFatching && <div>I am fething the data!!</div>}
    </>
  );
}

export default PostList;
