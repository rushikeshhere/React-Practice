import { useContext, useState } from "react";
import Post from "./Post";
import { PostList } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostListComponent = () => {
  const { postList, addInitialPosts } = useContext(PostList);

  const [isLoading, setIsLoading] = useState(false);

  if (!isLoading) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addInitialPosts(data));
    setIsLoading(true);
  }

  const handleGetPosts = () => {};

  return (
    <>
      {/* {postList.length === 0 && <WelcomeMessage onGetPosts={handleGetPosts} />} */}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostListComponent;
