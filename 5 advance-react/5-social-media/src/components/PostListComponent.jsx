import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostListComponent = () => {
  const { postList, addInitialPosts } = useContext(PostList);
  const [intitalLoading, setInitialLoading] = useState(false);

  // const [isLoading, setIsLoading] = useState(false);

  // if (!isLoading) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => addInitialPosts(data));
  //   setIsLoading(true);
  // }

  useEffect(() => {
    setInitialLoading(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data);
        setInitialLoading(false);
      });
  }, []);

  const handleGetPosts = () => {};

  return (
    <>
      {/* {postList.length === 0 && <WelcomeMessage onGetPosts={handleGetPosts} />} */}
      {intitalLoading && <LoadingSpinner />}
      {!intitalLoading && postList.length === 0 && <WelcomeMessage />}
      {!intitalLoading &&
        postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export default PostListComponent;
