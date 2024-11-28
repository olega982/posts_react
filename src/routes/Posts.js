import PostList from "../components/PostsList";
import { Outlet } from "react-router-dom";
import axios from "axios";

function Posts() {
  return (
    <>
      <main>
        <Outlet />
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const responce = await axios.get("http://localhost:8080/posts");
  return responce.data.posts;
}
