import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const handleSubmit = (event) => {};
  return (
    <Form method="POST" className="form-container">
      <div className="mb-3">
        <label htmlFor="user_id" className="form-label">
          User Id
        </label>
        <input
          type="text"
          name="user_id"
          className="form-control"
          id="user_id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Content Title
        </label>
        <input type="text" name="title" className="form-control" id="title" />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Add more about content
        </label>
        <textarea rows={5} name="body " className="form-control" id="user_id" />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Use Tags for better search
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="tags"
          placeholder="add tags using spaces"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="likes" className="form-label">
          Likes
        </label>
        <input
          type="number"
          name="likes"
          className="form-control"
          id="likes"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dislikes" className="form-label">
          Dislikes
        </label>
        <input
          type="number"
          name="dislikes"
          className="form-control"
          id="dislikes"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Create Post
      </button>
    </Form>
  );
};

export async function CreatePostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Post created:", data);
      addPost(data);
    })
    .catch((error) => {
      console.error("Error creating post:", error);
    });
  return redirect("/");
}

export default CreatePost;
