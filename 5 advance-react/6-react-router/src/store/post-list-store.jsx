import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  intitalLoading: false,
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter((post) => post.id !== action.payload);
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [intitalLoading, setInitialLoading] = useState(false);

  useEffect(() => {
    setInitialLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data);
        setInitialLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setInitialLoading(false);
      });
  }, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: posts,
    });
  };
  // wrote callback function to delete post
  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: postId,
      });
    },
    [dispatchPostList]
  );

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        intitalLoading,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
