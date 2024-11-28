import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../components/Modal';
import classes from './PostDetails.module.css';
import axios from 'axios'

function PostDetails() {
  const post = useLoaderData();
  console.log("from server i load in useLoaderData:",post)
  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader ({params}){
 const responce =  await axios.get(`http://localhost:8080/posts/${params.id}`)
console.log("i get from serverr", responce.data.post)
 return responce.data.post
}