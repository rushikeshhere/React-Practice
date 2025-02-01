import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost, { CreatePostAction } from "./components/CreatePost.jsx";
import PostListComponent, {
  PostListLoader,
} from "./components/PostListComponent.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostListComponent />, loader: PostListLoader },
      {
        path: "/create-post",
        element: <CreatePost />,
        action: CreatePostAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
