import classes from "./NewPost.module.css";
import { useState } from "react";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

function NewPost({ onStopEditing, onAddPost }) {
  const [post, setPost] = useState("");
  const [author, setAuthor] = useState("");

  function handlePostChange(event) {
    setPost(event.target.value);
  }
  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }
  function submitPostHandler(event) {
    event.preventDefault();
    const newPost = {
      body: post,
      author: author,
    };
    onAddPost(newPost);
    onStopEditing();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitPostHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" onChange={handlePostChange} required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" onChange={handleAuthorChange} id="name" required />
        </p>
        <p className={classes.actions}>
          <Link to="/" type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
