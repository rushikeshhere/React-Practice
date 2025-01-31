import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const user_id_Element = useRef();
  const titleElement = useRef();
  const contentElement = useRef();
  const tagsElement = useRef();
  const likesElement = useRef();
  const dislikesElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user_id = user_id_Element.current.value;
    const title = titleElement.current.value;
    const content = contentElement.current.value;

    const tags = tagsElement.current.value.split(" ");
    const likes = parseInt(likesElement.current.value, 10);
    const dislikes = parseInt(dislikesElement.current.value, 10);

    user_id_Element.current.value = "";
    titleElement.current.value = "";
    contentElement.current.value = "";
    tagsElement.current.value = "";
    likesElement.current.value = "";
    dislikesElement.current.value = "";
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="user_id" className="form-label">
          User Id
        </label>
        <input
          type="text"
          ref={user_id_Element}
          className="form-control"
          id="user_id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Content Title
        </label>
        <input
          type="text"
          ref={titleElement}
          className="form-control"
          id="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Add more about content
        </label>
        <textarea
          rows={5}
          ref={contentElement}
          className="form-control"
          id="user_id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Use Tags for better search
        </label>
        <input
          type="text"
          ref={tagsElement}
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
          ref={likesElement}
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
          ref={dislikesElement}
          className="form-control"
          id="dislikes"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;
